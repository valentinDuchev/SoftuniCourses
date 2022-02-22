const router = require('express').Router();
const { deleteById, getHousingById } = require('../services/housingService');
const { housingViewModel, mapErrors } = require('../util/mappers');

router.get('/delete/:id', async (req, res) => {
    const id = req.params.id;
    const housing = housingViewModel(await getHousingById(id));

    if (req.session.user._id != housing.owner._id) {
        return res.redirect('/login');
    }

    try {
        await deleteById(id);
        res.redirect('/catalog')
    } catch (err) {
        console.error(err);
        const errors = mapErrors(err);
        res.render('details', { title: `Details - ${housing.name}`, existing: housing});
    }
})

module.exports = router;