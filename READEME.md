To undo the last commit, we can do the following depending on the last commit.

When the last commit is not the initial commit
No changes. i.e. Execute git reset HEAD~
When the last commit is the initial commit
Execute git update-ref -d HEAD followed by git rm -fr . git rm --cached -r .

#Authentication demo Part-1
*Setup folder structure
*install packages
*Add root route and template
*Add secret route and template

#Authentication demo Part-2
*Create user model
*Configure Passport