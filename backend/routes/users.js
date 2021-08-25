const router = require('express').Router();
let User = require('../models/user.model');
const bcrypt = require('bcrypt-nodejs');

router.route('/').get((req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    User.findOne({ username: username })
        .then(user => bcrypt.compareSync(password, user.password) ?
            res.json(true) : res.json(false))
        .catch(err => res.status(400).json("error " + err))
});

router.route('/add').post((req, res) => {
    const username = req.body.username;
    const password = bcrypt.hashSync(req.body.password);
    const role = 0;
    const newUser = new User({ username, password, role });
    newUser.save()
        .then(() => res.json("user added!"))
        .catch(err => res.status(400).json("error" + err))
});

module.exports = router;