const { deletePlay, getById } = require('../services/playService');
const { getUserByUserId } = require('../services/userService');

const router = require('express').Router();

router.get('/delete/:id', async (req, res) => {
    const playId = req.params.id;
    const userId = req.session.user._id;

    const user = getUserByUserId(userId);
    const play = await getById(playId);

    if (userId != play.author) {
        throw new Error (user.username + ' - You are not the author of this play')
    }

    try {
        await deletePlay(playId);
        res.redirect('/')
    } catch (err) {
        console.error(err)
    }
})

module.exports = router;