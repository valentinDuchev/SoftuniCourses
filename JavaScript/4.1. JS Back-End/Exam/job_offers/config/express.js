const express = require('express');
const hbs = require('express-handlebars');
const session = require('express-session');
const userSession = require('../middleware/userSession')

module.exports = (app) => {
    app.engine ('hbs', hbs.create({
        extname: '.hbs'
    }).engine);
    app.set('view engine', 'hbs');

    app.use(session({
        secret: 'my super secret', 
        resave: false, 
        saveUninitialized: true, 
        cookie: { 
            secure: 'auto',
        }
    }));
    app.use(express.urlencoded({ extended: true }));
    app.use('/static', express.static('static'));
    app.use(userSession());
    /*
    app.use(carsService());
    app.use(accessoryService());
    app.use(authService());
    */
}