const { findByIdAndUpdate } = require('../models/Post');
const { getPostById, updatePost } = require('../services/postService');
const { postViewModel, mapErrors } = require('../util/mappers');

const router = require('express').Router();

router.get('/edit/:id', async (req, res) => {
    const post = postViewModel(await getPostById(req.params.id));
    if (req.session.user._id != post.author._id) {
        res.redirect('/login');
    }
    res.render('edit', { title: `Edit - ${post.title}`, post });
});

router.post('/edit/:id', async (req, res) => {
    const id = req.params.id;
    const existing = postViewModel(await getPostById(id));

    if (req.session.user._id != existing.author._id) {
        return res.redirect('/login');
    }

    const post = {
        title: req.body.title, 
        keyword: req.body.keyword, 
        location: req.body.location,  
        date: req.body.date, 
        image: req.body.image, 
        description: req.body.description, 
    };

    try {
        await updatePost(id, post);
        res.redirect('/details/' + id)
    } catch (err) {
        console.error(err);
        const errors = mapErrors(err);
        post._id = id;
        res.render('edit', { title: `Edit - ${post.title}`, post, errors});
    }
})

module.exports = router;