const { getHousings } = require('../services/housingService');
const { housingViewModel } = require('../util/mappers');

const router = require('express').Router();

router.get('/catalog', async (req, res) => {
    const housings = (await getHousings()).map(housingViewModel);

    res.render('catalog', { title: 'Catalog - All Housings', housings})
})

module.exports = router;