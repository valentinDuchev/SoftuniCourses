const { isUser } = require('../middleware/guards');
const { getById, deleteById } = require('../services/adService');

const router = require('express').Router();

router.get('/delete/:id', isUser(), async (req, res) => {
    const adId = req.params.id;
    const userId = req.session.user._id;

    const ad = await getById(adId);

    if (ad.author._id != userId) {
        throw new Error ('You are not the author of this ad')
    }

    try {
        await deleteById(adId)
        res.redirect('/catalog')
    } catch (err) {
        console.error(err)
    }
})  

module.exports = router;