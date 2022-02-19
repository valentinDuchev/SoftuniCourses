const { isUser } = require('../middleware/guards');
const { getUserByEmail } = require('../services/userService');
const { profileViewModel } = require('../util/mappers');

const router = require('express').Router();

router.get('/profile', isUser(), async (req, res) => {
    
    const email = req.session.user.email;
    const profile =  profileViewModel(await getUserByEmail(email));

    if (profile.gender == 'male') {
        profile.male = true;
    }

    console.log(profile)
    
    res.render('profile', { profile, title: `Profile - ${profile.email}` })
});

module.exports = router;