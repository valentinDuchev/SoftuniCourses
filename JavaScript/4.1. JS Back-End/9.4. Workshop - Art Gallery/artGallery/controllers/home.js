const { getAll } = require('../services/artService');
const { artViewModel } = require('../util/mappers');

const router = require('express').Router();

router.get('/', async (req, res) => {
    const arts = (await getAll()).map(artViewModel);

    res.render('home', {title: 'Home Page', arts })
});

module.exports = router;