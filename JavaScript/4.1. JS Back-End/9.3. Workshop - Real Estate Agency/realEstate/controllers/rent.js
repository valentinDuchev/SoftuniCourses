const { getHousingById, rent } = require('../services/housingService');
const { housingViewModel, mapErrors } = require('../util/mappers');

const router = require('express').Router();

router.get('/rent/:id', async (req, res) => {
    const housingId = req.params.id;
    const userId = req.session.user._id;

    const housing = housingViewModel(await getHousingById(housingId));

    try {
        await rent(housingId, userId);
        res.redirect('/details/' + housingId);
    } catch (err) {
        console.error(err);
        const errors = mapErrors(err);
        res.render('details', { title: `Details - ${housing.name}`, errors, housing })
    }
})

module.exports = router;