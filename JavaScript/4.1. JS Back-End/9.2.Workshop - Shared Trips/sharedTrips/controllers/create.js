const { isUser } = require('../middleware/guards');
const { createTrip } = require('../services/tripService');
const  mapErrors  = require('../util/mappers')

const router = require('express').Router();


router.get('/create', isUser(), (req, res) => {
    res.render('create');
})

router.post('/create', isUser(), async (req, res) => {
    const userId = req.session.user._id;
    const trip = {
        startPoint: req.body.startPoint, 
        endPoint: req.body.endPoint, 
        date: req.body.date,
        time: req.body.time,
        carImage: req.body.carImage, 
        carBrand: req.body.carBrand, 
        seats: req.body.seats, 
        price: req.body.price, 
        description: req.body.description, 
        creator: userId
    };

    try { 
        await createTrip(trip);
        res.redirect('/')
    } catch (err) {
        console.error(err);
        const errors = mapErrors(err);
        res.render('create')
    }
})

module.exports = router;