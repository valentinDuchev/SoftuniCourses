const { isUser } = require('../middleware/guards');
const { createHousing } = require('../services/housingService');
const {mapErrors} = require('../util/mappers');

const router = require('express').Router();

router.get('/create', isUser(), (req, res) => {
    res.render('create')
});

router.post('/create', isUser(), async (req, res) => {
    const userId = req.session.user._id; 
    const housing = {
        name: req.body.name, 
        type: req.body.type, 
        year: req.body.year, 
        city: req.body.city, 
        homeImage: req.body.homeImage, 
        description: req.body.description, 
        pieces: req.body.pieces, 
        rented: [],
        owner: userId, 
    };

    try {
        await createHousing(housing);
        res.redirect('/catalog')
    } catch (err) {
        console.error(err);
        const errors = mapErrors(err);
        res.render('create', { title: 'Create', errors, housing})
    }
})

module.exports = router;