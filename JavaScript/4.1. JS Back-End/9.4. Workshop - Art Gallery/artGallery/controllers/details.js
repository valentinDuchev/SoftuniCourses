const { getById } = require('../services/artService');
const { artViewModel, mapErrors } = require('../util/mappers');

const router = require('express').Router();

router.get('/details/:id', async (req, res) => {
    const artId = req.params.id;
    const art = artViewModel(await getById(artId));

    if (req.session.user) {
        const userId = req.session.user._id;
        art.hasUser = true;
        
        if (art.shared.length < 1) {
            art.notShared = true;
        }

        if (userId == art.author._id) {
            art.isAuthor = true;
        }

       for (let i of art.shared) {
           if (i._id == userId) {
               art.hasShared = true;
           }
       }
    }

    res.render('details', {title: `Details - ${art.title}`, art});
})

module.exports = router;