const router = require("express").Router()
const User = require("../models/Users");
router.get("/login", (req,res) => {
    res.render("login")
})

.post('/login', (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    User.findOne({email: email}, (err, foundResults) => {
        if(err){
            console.log(err);
        } else {
            if(foundResults.password === password)
            {
                res.send("You Logged In");
            }else {
                res.send("Incorrect Email or password")
            }
        }
    })
})

module.exports = router;