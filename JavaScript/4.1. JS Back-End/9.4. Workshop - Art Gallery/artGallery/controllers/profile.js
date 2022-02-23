const { getUserById } = require('../services/userService');
const { authorViewModel } = require('../util/mappers');

const router = require('express').Router();

router.get('/profile', async (req, res) => {
    const userId = req.session.user._id;
    const user = authorViewModel(await getUserById(userId));
    user.allShared = '';
    user.allAdded = '';

    if (user.shared.length < 1) {
        user.notShared = true;
    } else {
        user.allShared = user.shared[0];
        for (let i = 1; i < user.shared.length; i++) {
            user.allShared += `, ${user.shared[i]}`;
        }
        console.log(user.allShared)
    }

    if (user.added.length < 1) {
        user.notAdded = true;
    } else {
        user.allAdded = user.added[0];
        for (let i = 1; i < user.added.length; i++) {
            user.allAdded += `, ${user.added[i]}`
        } 
    }

    res.render('profile', { title: 'Profile', user })
})

module.exports = router;