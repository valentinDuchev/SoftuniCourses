const { getAll } = require('../services/adService');

const router = require('express').Router();

router.get('/catalog', async (req, res) => {
    const ads = await getAll();
    console.log(ads)
    res.render('catalog', { title: 'Catalog', ads })
})

module.exports = router;