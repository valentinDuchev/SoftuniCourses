const { isUser } = require('../middleware/guards');
const { createAd } = require('../services/adService');
const mapErrors = require('../util/mappers');

const router = require('express').Router();

router.get('/create', isUser(), (req, res) => {
    res.render('create', { title: 'Create Ad'})
});

router.post('/create', isUser(), async (req, res) => {
    const userId = req.session.user._id;
    const ad = {
        headline: req.body.headline, 
        location: req.body.location, 
        name: req.body.name, 
        description: req.body.description, 
        author: userId
    };

    try { 
        await createAd(ad, userId);
        res.redirect('/catalog')
    } catch (err) {
        console.error(err);
        const errors = mapErrors(err);
        res.render('create', { title: 'Create Ad', ad, errors})
    }
})

module.exports = router;