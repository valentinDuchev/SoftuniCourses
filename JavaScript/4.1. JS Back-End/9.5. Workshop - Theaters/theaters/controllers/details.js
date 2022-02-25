const { isUser } = require('../middleware/guards');
const { getById } = require('../services/playService');

const router = require('express').Router();

router.get('/details/:id', isUser(), async (req, res) => {
    const playId = req.params.id;
    const userId  = req.session.user._id;
    const play = (await getById(playId))

    if (play.author == userId) {
        play.isAuthor = true;
    }

    for (let element of play.liked) {
        if (element == userId) {
            play.hasLiked = true;
        }
    }

    try {
        res.render('details', {title: `Details - ${play.title}`, play})
    } catch (err) {
        console.error(err);
    }
    
})

module.exports = router;