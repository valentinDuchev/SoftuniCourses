const { isUser } = require('../middleware/guards');
const { deleteById, getById } = require('../services/artService');
const { artViewModel, mapErrors } = require('../util/mappers');

const router = require('express').Router();

router.get('/delete/:id', isUser(), async (req, res) => {
    const artId = req.params.id;
    const art = artViewModel(await getById(artId))

    if (req.session.user._id != art.author._id) {
        throw new Error('You are not the author of this art.')
    }

    try {
        await deleteById(artId);
        res.redirect('/catalog')
    } catch (err) {
        console.error(err);
        const errors = mapErrors(err);
        res.render('details', { title: `Details - ${art.name}`, art})
    }
})

module.exports = router;