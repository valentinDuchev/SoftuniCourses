const { isUser } = require('../middleware/guards');
const { deletePost, getPostById } = require('../services/postService');
const { mapErrors, postViewModel } = require('../util/mappers');

const router = require('express').Router();

router.get('/delete/:id', isUser(), async (req, res) => {
    const id = req.params.id;
    const existing = postViewModel(await getPostById(id));

    if (req.session.user._id != existing.author._id) {
        return res.redirect('/login');
    }

    try {
        await deletePost(id);
        res.redirect('/catalog')
    } catch (err) {
        console.error(err);
        const errors = mapErrors(err);
        res.render('/catalog/' + id, { title: existing.title, errors })
    }
})

module.exports = router;