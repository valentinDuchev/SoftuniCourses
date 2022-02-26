const { getAll } = require('../services/adService');

const router = require('express').Router();

router.get('/', async (req, res) => {
    const ads = await getAll();
    const firstThree = [];

    for (let i = 0; i < 3; i++) {
        if (i < ads.length) {
            firstThree.push(ads[i]);
        }
    }
    let data = {};
    if (firstThree.length < 1) {
        data.emptyDatabase = true;
    }
    res.render('home', { title: 'Home Page', firstThree, data})
});

module.exports = router;