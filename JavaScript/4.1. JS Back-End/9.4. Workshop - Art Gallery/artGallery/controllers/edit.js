const { isUser } = require('../middleware/guards');
const { getById, updateById } = require('../services/artService');
const { artViewModel, mapErrors } = require('../util/mappers');

const router = require('express').Router();

router.get('/edit/:id', isUser(), async (req, res) => {
    const userId = req.session.user._id;
    const artId = req.params.id;
    const art = artViewModel(await getById(artId));

    if (userId != art.author._id) {
        delete req.session.user; 
        res.redirect('/login')
        throw new Error('You are not the author of this art')
    }

    try {
        res.render('edit', { title: `Edit - ${art.title}`, art })

    } catch (err) {
        console.error(err);
        res.redirect('/catalog')
    }
});

router.post('/edit/:id', async (req, res) => {
    const userId = req.session.user._id;
    const artId = req.params.id;
    const existing = artViewModel(await getById(artId));

    if (userId != existing.author._id) {
        throw new Error('You are not the author of this art')
    };

    const art = {
        title: req.body.title,
        technique: req.body.technique,
        picture: req.body.picture,
        certificate: req.body.certificate
    }

    try {
        await updateById(artId, art);
        res.redirect('/details/' + artId)
    } catch (err) {
        console.error(err);
        const errors = mapErrors(err);
        res.render('edit', { title: `Edit - ${art.title}`, art, errors })
    }



})

module.exports = router;