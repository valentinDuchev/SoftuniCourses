const router = require('express').Router();
const { isUser } = require('../middleware/guards');
const { createArt } = require('../services/artService');
const { getUserByUsername, getUserById, userAddArt } = require('../services/userService');
const {mapErrors, artViewModel, authorViewModel} = require('../util/mappers');

router.get('/create', isUser(), (req, res) => {
    res.render('create', { title: 'Create '})
});

router.post('/create', isUser(), async (req, res) => {
    const userId = req.session.user._id;
    //const user = authorViewModel(await getUserById(userId));
    const art = {
        title: req.body.title, 
        technique: req.body.technique, 
        picture: req.body.picture, 
        certificate: req.body.certificate, 
        author: userId, 
        shared: []
    };

    try {
        await createArt(art);
        await userAddArt(userId, art.title)
        res.redirect('/catalog')
    } catch (err) {
        console.error(err);
        const errors = mapErrors(err);
        res.render('create', { title: 'Create', errors, art})
    }
})

module.exports = router;