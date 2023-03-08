const router = require('express').Router();
const {Comment} = require('../../models/Comment')

router.pose('/',(req,res) => {
    Comment.create({...req.body, userID: req.session.userID })
    .then(newComment => {
        res.json(newComment);
    });
});

module.exports = router;
