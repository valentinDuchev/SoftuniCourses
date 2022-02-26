const { getById, getByIdNoLean } = require('../services/adService');

const router = require('express').Router();

router.get('/details/:id', async (req, res) => {
    const id = req.params.id;
    const ad = await getById(id);


    if (req.session.user) {
        const userId = req.session.user._id;
        if (userId == ad.author._id) {
            ad.isAuthor = true;
        } else {
            for (let i = 0; i < ad.applied.length; i++) {
                if (ad.applied[i]._id == userId) {
                    ad.hasApplied = true;
                };
            };
        } if (ad.applied.length > 0) {
            ad.somebodyApplied = true;
        };

        const mapped = [];
        for (let i of ad.applied) {
            mapped.push({
                _id: i._id,
                email: i.email,
                skills: i.skills
            })
        }
        ad.mapped = mapped;
    }

    res.render('details', { title: `Details - ${ad.headline}`, ad })
})

module.exports = router;