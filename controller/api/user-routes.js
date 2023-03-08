const router = require('express').Router();
const {User} = require('../../models/User');

router.post('/', (req,res) => {
    User.create({
        username: req.body.username,
        password: req.body.password,
})
    .then(data => {
        res.json(data)
        req.session.userId = data.id;
        req.session.username = data.username;
        res.json(data);
})});

