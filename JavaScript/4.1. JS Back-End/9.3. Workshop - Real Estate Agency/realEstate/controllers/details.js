const { getHousingById } = require('../services/housingService');
const { housingViewModel } = require('../util/mappers');

const router = require('express').Router();

router.get('/details/:id', async (req, res) => {
    const housingId = req.params.id;
    const housing = housingViewModel(await getHousingById(housingId));


    if (req.session.user) {
        const userId = req.session.user._id;
        housing.hasUser = true;

        if (housing.rented.length < 1) {
            housing.notRented = true;
        }
        if (req.session.user._id == housing.owner._id) {
            housing.isOwner = true;
        } 
        if (housing.pieces < 1) {
            housing.noPieces = true;
        } 
        for (let rentners of housing.rented) {
            if (userId == rentners._id) {
                housing.hasRented = true;
            }
        }
    }

    res.render('details', { title: `Details - ${housing.name}`, housing })
});

module.exports = router;