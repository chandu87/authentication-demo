const express               = require('express'),
      bodyParser            = require('body-parser'),
      mongoose              = require('mongoose'),
      passport              = require('passport'),
      localStrategy         = require('passport-local'),
      passportLocalmongoose = require('passport-local-mongoose'),
      User                  = require('./models/user');


const app = express();
mongoose.connect("mongodb://localhost/auth_demo");
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));
app.use(require('express-session')({
    secret: "Rusty is the best and cutest dog",
    resave: false,
    saveUninitialized: false    
}));
app.use(passport.initialize());  //needed methods for passport to work
app.use(passport.session());

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

//============================== ROUTES =======================================


app.get("/", function(req, res){
    res.render("home");
});
app.get("/secret", function(req, res){
    res.render("secret");
})

//Auth ROUTES

//show Signup form
app.get("/register", function(req, res){
    res.render("register");
});
//handling user signup
app.post("/register", function(req, res){
    User.register(new User({username: req.body.username}),req.body.password, function(err, user){
        if(err){
            console.log(err);
            return res.render("register");
        }
        passport.authenticate("local")(req, res, function(){
            res.redirect("/secret");
        });
    });
});

//Login Routes
//Login Page
app.get("/login", function(req, res){
    res.render("login");
});



app.listen(3000, function(){
    console.log("Server started at Port: 3000"); 
});