const { getTrips } = require('../services/tripService');
const { tripViewModel } = require('../util/mappers')

const router = require('express').Router();

router.get('/catalog', async (req, res) => {
    const trips = (await getTrips()).map(tripViewModel);

    res.render('catalog', { trips, title: 'Trip Catalog' })
});

module.exports = router;