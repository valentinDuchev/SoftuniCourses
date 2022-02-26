const router = require('express').Router();
const { body, validationResult } = require('express-validator');
const { isUser, isGuest } = require('../middleware/guards');
const { register, login } = require('../services/userService');
const mapErrors = require('../util/mappers');

router.get('/register', isGuest(), (req, res) => {
    res.render('register', { title: 'Register' })
});

router.post('/register', isGuest(), async (req, res) => {
    try {
        if (req.body.password != req.body.repass) {
            throw new Error('Passwords do not match');
        }

        if (req.body.password.length < 5) {
            throw new Error ('Password must be at least 5 characters long')
        }

        const user = await register(req.body.email, req.body.password, req.body.skills);
        req.session.user = user;
        res.redirect('/'); //TODO check redirect requirements

    } catch (err) {
        console.log(err)
        const errors = mapErrors(err);
        res.render('register', { title: 'Register', data: { email: req.body.email, skills: req.body.skills }, errors })
    }
});

router.get('/login', isGuest(), (req, res) => {
    res.render('login', { title: 'Login' });
});

router.post('/login', isGuest(), async (req, res) => {
    try { 
        const user = await login (req.body.email, req.body.password);
        req.session.user = user;
        res.redirect('/'); //TODO check redirect requirements
    } catch (err) {
        console.error(err)
        const errors = mapErrors(err);
        res.render('login', { title: 'Login', data: { email: req.body.email }, errors });
    }
});

router.get('/logout', isUser(), (req, res) => {
    delete req.session.user;
    res.redirect('/')
});

module.exports = router;