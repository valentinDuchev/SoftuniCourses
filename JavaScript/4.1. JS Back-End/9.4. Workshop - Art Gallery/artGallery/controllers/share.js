const { isUser } = require('../middleware/guards');
const User = require('../models/User');
const { getById, share } = require('../services/artService');
const { userAddShare } = require('../services/userService');
const { artViewModel, mapErrors } = require('../util/mappers');

const router = require('express').Router();

router.get('/share/:id', isUser(), async (req, res) => {
    const userId = req.session.user._id;
    const artId = req.params.id;
    const art = artViewModel(await getById(artId))


    try {
        await share(artId, userId);
        await userAddShare(userId, art.title)
        res.redirect('/details/' + artId)
    } catch (err) {
        console.error(err)
        const errors = mapErrors(err);
        res.render('details', { title: `Details - ${art.name}`, errors })
    }
})

module.exports = router;