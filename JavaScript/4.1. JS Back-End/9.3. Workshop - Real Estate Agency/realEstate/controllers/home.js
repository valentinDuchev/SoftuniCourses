const { getHousingById, getHousings } = require('../services/housingService');
const { housingViewModel } = require('../util/mappers');

const router = require('express').Router();

router.get('/', async (req, res) => {
    const housings = (await getHousings()).map(housingViewModel);
    res.render('home', { title: 'Home Page', housings})
});
 
module.exports = router;