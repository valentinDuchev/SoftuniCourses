const { getAndSortByDate, getAll } = require('../services/playService');

const router = require('express').Router();

router.get('/sort/likes', async (req, res) => {
    try {
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
        const playsByDate = sorted;
        res.render('home', {title: 'Home Page', playsByDate})
    } catch (err) {
        console.error(err)
    }
});

router.get('/sort/date', async (req, res) => {
    try {
        const playsByDate = await getAndSortByDate();
        res.render('home', { title: 'Home Page', playsByDate });

    } catch (err) {

    }
})

module.exports = router;