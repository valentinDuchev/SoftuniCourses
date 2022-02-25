const { isUser } = require('../middleware/guards');
const { getById, edit } = require('../services/playService');
const { getUserByUserId } = require('../services/userService');
const mapErrors = require('../util/mappers');

const router = require('express').Router();

router.get('/edit/:id',isUser(), async (req, res) => {
    const playId = req.params.id;
    const userId = req.session.user._id;

    const user = getUserByUserId(userId)
    const play = await getById(playId)

    if (userId != play.author) {
        throw new Error (user.username + ' - You are not the author of this play')
    }

    res.render('edit', {title: `Edit - ${play.title}`, play})
});

router.post('/edit/:id', async (req, res) => {
    const playId = req.params.id;
    const userId = req.session.user._id;

    const user = getUserByUserId(userId);
    const play = await getById(playId);

    if (userId != play.author) {
        throw new Error (user.username + ' - You are not the author of this play')
    }

    

    const data = {
        title: req.body.title, 
        description: req.body.description, 
        imageUrl: req.body.imageUrl
    }

    if (req.body.isPublic == 'on') {
        data.isPublic = true;
    } else {
        data.isPublic = false;
    }

    console.log(data)

    try {
        await edit(playId, data);
        res.redirect('/details/' + playId)
    } catch (err) {
        console.error(err);
        const errors = mapErrors(err);
        res.render('edit', { title: `Edit - ${play.title}`, play, errors})
    }
})

module.exports = router;