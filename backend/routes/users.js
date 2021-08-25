const router = require('express').Router();
let User = require('../models/user.model');
const bcrypt = require('bcrypt-nodejs');


router.route('/add').post((req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    const newUser = new User({ username, password });
    newUser.save()
        .then(() => res.json("user added!"))
        .catch(err => res.status(400).json("error" + err))
});

module.exports = router;