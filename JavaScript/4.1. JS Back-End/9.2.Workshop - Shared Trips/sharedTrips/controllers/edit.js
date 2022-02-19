const { isUser } = require('../middleware/guards');
const { getTripById, editTrip } = require('../services/tripService');
const { tripViewModel } = require('../util/mappers');

const router = require('express').Router();

router.get('/edit/:id', isUser(), async (req, res) => {
    const id = req.params.id;
    const trip = tripViewModel(await getTripById(id));
    if (req.session.user._id != trip.creator._id) {
        res.redirect('/login');
    }
    res.render('edit', { trip, title: `Edit - ${req.params.id}` })
});

router.post('/edit/:id', async (req, res) => {
    const id = req.params.id;
    const existing = tripViewModel(await getTripById(id));

    if (req.session.user._id != existing.creator._id) {
        res.redirect('/login');
    }

    const trip = {
        startPoint: req.body.startPoint,
        endPoint: req.body.endPoint,
        date: req.body.date,
        time: req.body.time,
        carImage: req.body.carImage,
        carBrand: req.body.carBrand,
        seats: req.body.seats,
        price: req.body.price,
        description: req.body.description
    };

    try { 
        await editTrip(id, trip);
        res.redirect('/details/' + id);
    } catch (err) {
        console.error(err);
        const errors = mapErrors(err);
        trip._id = id;
        res.render('edit', { trip, errors});
    }

})

module.exports = router;