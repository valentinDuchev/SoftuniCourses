const router = require('express').Router();
const { body, validationResult } = require('express-validator');
const { isUser, isGuest } = require('../middleware/guards');
const { register, login } = require('../services/userService');
const {mapErrors} = require('../util/mappers');

router.get('/register', isGuest(), (req, res) => {
    res.render('register', { title: 'Register' })
});

//TODO check the name fields in the hbs form + action and method 
router.post('/register', isGuest(), async (req, res) => {
    try {
        if (req.body.password != req.body.repass) {
            throw new Error('Passwords do not match');
        } 

        const user = await register(req.body.email, req.body.password, req.body.gender);
        req.session.user = user;
        res.redirect('/'); //TODO check redirect requirements

    } catch (err) {
        console.log(err)
        
        //TODO send error messages
        const errors = mapErrors(err);
        res.render('register', { title: 'Register', data: { email: req.body.email }, errors })
    }
});

router.get('/login', (req, res) => {
    res.render('login', { title: 'Login' });
});

//TODO check form action, method, field names
router.post('/login', isGuest(), async (req, res) => {
    try { 
        const user = await login (req.body.email, req.body.password);
        req.session.user = user;
        res.redirect('/'); //TODO check redirect requirements
    } catch (err) {
        console.error(err)
        //TODO send error messages
        const errors = mapErrors(err);
        res.render('login', { title: 'Login', data: { email: req.body.email }, errors });
    }
});

router.get('/logout', isUser(), (req, res) => {
    delete req.session.user;
    res.redirect('/')
})

//Testing the skeleton ---> !!! RENAME testMain.hbs TO main.hbs
//--------------------------------------------------------------------------------------------------------------------------------------------------------------
//Testing the skeleton ---> !!! RENAME testMain.hbs TO main.hbs


router.get('/testRegister', isGuest(), (req, res) => {
    res.render('register', { title: 'Register' })
});

//TODO check the name fields in the hbs form + action and method 
router.post('/testRegister', isGuest(), async (req, res) => {
    try {
        if (req.body.password != req.body.repass) {
            throw new Error('Passwords do not match');
        }

        const user = await register(req.body.username, req.body.password);
        req.session.user = user;
        res.redirect('/'); //TODO check redirect requirements

    } catch (err) {
        console.log(err)
        //TODO send error messages
        const errors = mapErrors(err);
        res.render('register', { title: 'Register', data: { username: req.body.username }, errors })
    }
});

router.get('/testLogin', isGuest(), (req, res) => {
    res.render('login', { title: 'Login' });
});

//TODO check form action, method, field names
router.post('/testLogin', isGuest(), async (req, res) => {
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


module.exports = router;