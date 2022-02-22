const { getHousingById, editHousing } = require('../services/housingService');
const { housingViewModel, mapErrors } = require('../util/mappers');

const router = require('express').Router();

router.get('/edit/:id', async (req, res) => {
    const id = req.params.id;
    const housing = housingViewModel(await getHousingById(id));

    res.render('edit', { title: `Edit - ${housing._id}`, housing})
});

router.post('/edit/:id', async (req, res) => {
    const id = req.params.id;
    const housing = housingViewModel(await getHousingById(id));

    if (req.session.user._id != housing.owner._id) {
        res.redirect('/login');
    }

    const newHousing = {
        name: req.body.name, 
        type: req.body.type, 
        year: req.body.year, 
        city: req.body.city, 
        homeImage: req.body.homeImage, 
        description: req.body.description, 
        pieces: req.body.pieces, 
    };

    try {
        await editHousing(id, newHousing);
        res.redirect('/details/' + id)
    } catch (err) {
        console.error(err);
        console.log('yyy')
        const errors = mapErrors(err);
        newHousing._id = id;
        res.render('edit', { title: `Edit - ${newHousing._name}`, errors, newHousing})
    }

})

module.exports = router;