const router = require('express').Router();
const { body, validationResult } = require('express-validator');
const { isUser, isGuest } = require('../middleware/guards');
const { register, login } = require('../services/userService');
const {mapErrors} = require('../util/mappers');

router.get('/register', isGuest(), (req, res) => {
    res.render('register', { title: 'Register' })
});

router.post('/register', isGuest(), async (req, res) => {
    try {
        if (req.body.password != req.body.repass) {
            throw new Error('Passwords do not match');
        }

        if (req.body.password.length < 4) {
            throw new Error ('Password must be at least 4 characters long')
        }
 
        const user = await register(req.body.fullName, req.body.username, req.body.password);
        req.session.user = user;
        res.redirect('/'); //TODO check redirect requirements

    } catch (err) {
        console.log(err)
        //TODO send error messages
        const errors = mapErrors(err);
        const data = {
            fullName: req.body.fullName, 
            username: req.body.username
        }
        res.render('register', { title: 'Register', data, errors })
    }
});

router.get('/login', isGuest(), (req, res) => {
    res.render('login', { title: 'Login' });
});

//TODO check form action, method, field names
router.post('/login', isGuest(), async (req, res) => {
    try { 
        const user = await login (req.body.username, req.body.password);
        req.session.user = user;
        res.redirect('/'); //TODO check redirect requirements
    } catch (err) {
        console.error(err)
        //TODO send error messages
        const errors = mapErrors(err);
        res.render('login', { title: 'Login', data: { username: req.body.username }, errors });
    }
});

router.get('/logout', isUser(), (req, res) => {
    delete req.session.user;
    res.redirect('/')
});

module.exports = router;