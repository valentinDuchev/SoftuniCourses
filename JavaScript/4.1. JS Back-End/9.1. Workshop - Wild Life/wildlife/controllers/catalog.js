const { getPosts } = require('../services/postService');
const { postViewModel } = require('../util/mappers');

const router = require('express').Router();

router.get('/catalog', async (req, res) => {
    const posts = (await getPosts()).map(postViewModel);

    res.render('catalog', { title: 'Catalog Page', posts })
});

module.exports = router;