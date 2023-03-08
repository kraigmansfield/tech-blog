const router = require('express').Router();
const {Post} = require('../../models/Post');

router.post('/', (req,res) => {
    const body = req.body;
    Post.create({...body, userID: req.session.userID})
    .then(data =>{
        res.json(data);
    });
});

router.put('/:id', (req,res)=> {
    Post.update(req.body, {
        where: {
            id: req.params.id
        }
    })
    .then(data => {
        res.json(data);
    });
});

router.delete('/:id', (req,res)=> {
    Post.destroy(req.body, {
        where: {
            id: req.params.id
        }
    })
    .then(data => {
        res.json(data);
    });
});

module.exports = router

