const { deleteTrip, getTripById } = require('../services/tripService');
const { tripViewModel } = require('../util/mappers');

const router = require('express').Router();

router.get('/delete/:id', async (req, res) => {
    const id = req.params.id;
    const existing = tripViewModel(await getTripById(id));

    if (req.session.user._id != existing.creator._id) {
        return res.redirect('/login');
    }

    try {
        await deleteTrip(id);
        res.redirect('/catalog')
    } catch (err) {
        console.error(err);
        const errors = mapErrors(err);
        res.render('/catalog/' + id, { errors })
    }
});

module.exports = router;