const { isUser } = require('../middleware/guards');
const { createTrip, getTrips } = require('../services/tripService');
const { getUserByEmail } = require('../services/userService');
const { mapErrors } = require('../util/mappers')

const router = require('express').Router();


router.get('/create', isUser(), (req, res) => {
    res.render('create', { title: 'Create' });
})

router.post('/create', isUser(), async (req, res) => {
    const userId = req.session.user._id;
    const email = req.session.user.email;
    const profile =  await getUserByEmail(email);

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

    const tripForProfile = {
        startPoint: req.body.startPoint, 
        endPoint: req.body.endPoint, 
        date: req.body.date, 
        time: req.body.time
    }    

    try {
        await createTrip(trip);
        res.redirect('/');
        profile.trips.push(tripForProfile);
        await profile.save();
    } catch (err) {
        console.error(err);
        const errors = mapErrors(err);
        res.render('create', { errors, trip })
    }
})

module.exports = router;