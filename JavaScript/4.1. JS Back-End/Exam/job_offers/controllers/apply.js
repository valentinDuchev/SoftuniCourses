const { isUser } = require('../middleware/guards');
const { apply } = require('../services/adService');
const mapErrors = require('../util/mappers');

const router = require('express').Router();

router.get('/apply/:id', isUser(), async (req, res) => {
    const userId = req.session.user._id;
    const adId = req.params.id;

    try {
        await apply(adId, userId);
        res.redirect('/details/' + adId)
    } catch (err) {
        console.error(err)
        const errors = mapErrors(err);
        res.render('details', { title: 'Details', errors})
    }
})

module.exports = router;