const router = require("express").Router()
const User = require("../models/Users");
router.get('/register', (req, res) => {
    res.render("register")
})

.post('/register', (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    const newUser = new User({
        email: email,
        password: password
    });

    newUser.save(err => {
        err ? console.log(err) : res.send("SuccessFully Created User");
    });
})

module.exports = router;