const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.set("view engine", "ejs");
// app.use(bodyParser)

app.get("/", function(req, res){
    res.render("home");
});

app.listen(3000, function(){
    console.log("Server started at Port: 3000"); 
});