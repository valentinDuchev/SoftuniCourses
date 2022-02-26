const { isUser } = require('../middleware/guards');
const { search } = require('../services/adService');
const { getUserByEmail } = require('../services/userService');

const router = require('express').Router();

router.get('/search', isUser(), async (req, res) => {
    res.render('search', { title: 'Search'})
});

router.post('/search', isUser(), async (req, res) => {
    const email = req.body.email;
    try {
        const result = await search(email);
        res.render('search', { title: 'Search', result})

    } catch (err) {
        console.error(err)
    }

})

module.exports = router;