const { getAll } = require('../services/artService');
const { artViewModel } = require('../util/mappers');

const router = require('express').Router();

router.get('/catalog', async (req, res) => {
    const arts = (await getAll()).map(artViewModel);
    res.render('catalog', { title: 'Catalog', arts})
})

module.exports = router;