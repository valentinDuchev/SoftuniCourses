const { getPostById } = require('../services/postService');
const { postViewModel } = require('../util/mappers');

const router = require('express').Router();

router.get('/details/:id', async (req, res) => {
    const post = postViewModel(await getPostById(req.params.id));

    if (req.session.user) {
        post.hasUser = true;
        if (req.session.user._id == post.author._id) {
            post.isAuthor = true;
        } else {
            post.hasVoted = post.votes.includes(req.session.user._id);
        }
        //TODO check votes
    }


    res.render('details', { title: post.title, post });
})

module.exports = router;