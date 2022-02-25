const { isUser } = require('../middleware/guards');
const { createPlay } = require('../services/playService');
const mapErrors = require('../util/mappers');

const router = require('express').Router();

router.get('/create',  (req, res) => {
    res.render('create', { title: 'Create Play'})
});

router.post('/create', isUser(), async (req, res) => {
    const userId = req.session.user._id;

    if (req.body.isPublic == 'on') {
        req.body.isPublic = true;
    }

    const play = {
        title: req.body.title, 
        description: req.body.description, 
        imageUrl: req.body.imageUrl, 
        isPublic: req.body.isPublic,
        author: userId
    }

    try {
        await createPlay(play);
        console.log(play)
        res.redirect('/')
    } catch (err) {
        console.error(err);
        const errors = mapErrors(err);
        res.render('create', { title: 'Create Play', play, errors})
    }
})  

module.exports = router;