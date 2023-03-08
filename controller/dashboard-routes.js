const router = require('express').Router();
const {Post,Comment,User} = require('../models');

router.get('/', (req,res) => {
    Post.findAll({
        include: [User],
    })
    .then((data) => {
        res.render('all-posts', {post});
    })
})

router.get('/post/:id', (req,res) => {
    Post.findByPk(req.params.id, {
        include: [
            User,
            {
                model: Comment,
                include: [User],
            },
        ],
    })
    .then((data) => {
        if (data) {
            const post = data.get({plain:true});
            res.render("single-post", {post});
        }
    })
})

module.exports = router;