const router = require('express').Router();

router.get('*', (req, res) => {
    res.render('404', { title: '404 - Not Found'})
})

module.exports = router;