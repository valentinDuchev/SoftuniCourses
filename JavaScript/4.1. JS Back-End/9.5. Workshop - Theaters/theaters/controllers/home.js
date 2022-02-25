const { getAll, getById, getAndSortByDate } = require('../services/playService');

const router = require('express').Router();

router.get('/', async  (req, res) => {
    const plays = (await getAll());
    plays.sort(function (a, b) {
        return b.likesCount - a.likesCount;
    });
    const sorted = [];
    for (let i = 0; i < 3; i++) {
        if (plays.length > i) {
            sorted.push(plays[i]);
        }
    }

    const playsByDate = await getAndSortByDate();
    res.render('home', {title: 'Home Page', sorted, playsByDate });
});

module.exports = router;