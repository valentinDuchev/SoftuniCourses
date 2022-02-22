const { isUser } = require('../middleware/guards');
const { searchFunc } = require('../services/housingService');
const { searchViewModel } = require('../util/mappers');

const router = require('express').Router();

router.get('/search', isUser(), (req, res) => {
    res.render('search')
})

router.post('/search', isUser(), async (req, res) => {
    const search = req.body.search;
    
    try {
        const result = (await searchFunc(search)).map(searchViewModel);
        res.render('search', { title: `Search - ${search}`, result })
    } catch (err) {
        console.error(err)
    }
})

module.exports = router;