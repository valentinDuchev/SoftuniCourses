const { getTripById } = require('../services/tripService');
const { tripViewModel } = require('../util/mappers');

const router = require('express').Router();

router.get('/details/:id', async (req, res) => {
    const trip = tripViewModel(await getTripById(req.params.id));

    if (req.session.user) {
        trip.hasUser = true;
        if (req.session.user._id == trip.creator._id) {
            trip.isCreator = true;
        } else {
            for (let buddy of trip.buddies) {
                if (buddy._id == req.session.user._id) {
                    trip.hasJoined = true;
                } 
            }
        };
        if (trip.seats <= 0) {
            trip.isNotAvailable = true;
        }
    }
    res.render('details', { trip, title: `Details - ${req.params.id}` })
});

module.exports = router;