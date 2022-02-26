const { isUser } = require('../middleware/guards');
const { apply } = require('../services/adService');

const router = require('express').Router();

router.get('/apply/:id', isUser(), async (req, res) => {
    const userId = req.session.user._id;
    const adId = req.params.id;

    try {
        await apply(adId, userId);
        res.redirect('/details/' + adId)
    } catch (err) {
        console.error(err)
    }
})

module.exports = router;