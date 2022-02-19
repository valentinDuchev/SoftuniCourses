const { isUser } = require('../middleware/guards');
const { getTripById, join } = require('../services/tripService');
const { tripViewModel, mapErrors } = require('../util/mappers');

const router = require('express').Router();

router.get('/join/:id', isUser(), async (req, res) => {
    const id = req.params.id;
    const trip = tripViewModel(await getTripById(id));

    try {
        await join(id, req.session.user._id);
        
        res.redirect('/details/' + id);
        
    } catch (err) {
        console.error(err);
        const errors = mapErrors(err);
        res.render('details', { errors, trip });
    }
});

module.exports = router;