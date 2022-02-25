const { isUser } = require('../middleware/guards');
const { like } = require('../services/playService');

const router = require('express').Router();

router.get('/like/:id', isUser(), async (req, res) => {
    const playId = req.params.id;
    const userId = req.session.user._id;

    try {   
        await like(playId, userId);
        res.redirect('/details/' + playId)
    } catch (err) {
        console.error(err);
        res.redirect('/details/' + playId)
    }
})

module.exports = router;