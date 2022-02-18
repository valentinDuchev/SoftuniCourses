const { isUser } = require('../middleware/guards');
const { createPost, vote, getPostById } = require('../services/postService');
const { mapErrors, postViewModel } = require('../util/mappers');

const router = require('express').Router();

router.get('/create', isUser(), (req, res) => {
    res.render('create', { title: 'Create Post' });
});

router.post('/create', isUser(),  async (req, res) => {
    const userId = req.session.user._id;
    const post = {
        title: req.body.title, 
        keyword: req.body.keyword, 
        location: req.body.location, 
        date: req.body.date, 
        image: req.body.image, 
        description: req.body.description, 
        author: userId
    };

    try {
        await createPost(post);
        res.redirect('/catalog')
    } catch (err) {
        console.error(err);
        const errors = mapErrors(err);
        res.render('create', { title: 'Create Post', errors, data: post });
    }
});

router.get('/vote/:id/:type', isUser(), async (req, res) => {
    const id = req.params.id;
    const value = req.params.type == 'upVote' ? 1 : -1;
    const post = postViewModel(await getPostById(req.params.id))

    try {
        await vote(id, req.session.user._id, value)
        res.redirect('/details/' + id);
    } catch (err) {
        console.error(err);
        const errors = mapErrors(err);
        res.render('details', { title: 'Post Details', post});
    }
})

module.exports = router;