const User = require("../models/user");

exports.postedSignUpForm = (req, res) => {
    res.render("index")
}

exports.postedLogInForm = (req, res) => {
    res.render("index")
}

// retrives the posted data from the req body and saves a new user
exports.saveUser = (req, res) => {
    let newUser = new User({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        dateOfBirth: req.body.dateOfBirth,
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
        securityQuestion1: req.body.securityQuestion1,
        securityAnswer1: req.body.securityAnswer1,
        securityQuestion2: req.body.securityQuestion2,
        securityAnswer2: req.body.securityAnswer2,
        securityQuestion3: req.body.securityQuestion3,
        securityAnswer3: req.body.securityAnswer3
    })
    newUser.save()
        .then(() => {
            res.render("thanks"); // make a modal to let them know they're signed up?
        })
        .catch(error => {
            res.send(error);
        })
};