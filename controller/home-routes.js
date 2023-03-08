const router = require('express').Router();
const {Post,Comment,User} = require('../models');

router.get('/', (req,res) => {
    Post.findAll({
        include: [User],
    })
    .then((data) => {
        const posts = data.map((post) => post.get({plain:true}));
        res.render("all-posts", {posts});
    });
});

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
            res.render('single-post', {post});
        }
    })
})
