const { isUser } = require('../middleware/guards');
const { getById, edit } = require('../services/adService');
const mapErrors = require('../util/mappers');

const router = require('express').Router();

router.get('/edit/:id', isUser(), async (req, res) => {
    const userId = req.session.user._id;
    const adId = req.params.id;

    const ad = await getById(adId);

    if (userId != ad.author._id) {
        throw new Error('You are not the author of this ad')
    }
    try {
        console.log(ad)
        res.render('edit', { title: `Edit - ${ad.headline}`, ad })
    } catch (err) {
        console.error(err)
    }
}); 

router.post('/edit/:id', isUser(), async (req, res) => {
    const userId = req.session.user._id;
    const adId = req.params.id;

    const existing = await getById(adId);

    if (userId != existing.author._id) {
        throw new Error('You are not the author of this ad')
    }

    const ad = {
        headline: req.body.headline, 
        location: req.body.location, 
        name: req.body.name, 
        description: req.body.description
    }

    try {
        await edit(adId, ad) 
        res.redirect('/details/' + adId)
    } catch (err) {
        console.error (err)
        const errors = mapErrors(err);
        res.render('edit', { title: 'Edit Page', errors, ad})
    }
})

module.exports = router;