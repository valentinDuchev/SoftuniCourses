const { getTrips } = require('../services/tripService');
const { tripViewModel } = require('../util/mappers')

const router = require('express').Router();

router.get('/catalog', async (req, res) => {
    const trips = (await getTrips()).map(tripViewModel);
    console.log(trips)

    res.render('catalog', { trips })
});

module.exports = router;