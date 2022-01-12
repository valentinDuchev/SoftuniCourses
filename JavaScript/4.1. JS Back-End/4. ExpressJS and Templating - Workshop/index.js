// initialize express app
// setup handlebars
// setup static files
// setup storage middleware
// set route handlers (controller actions)

const express = require('express');
const hbs = require('express-handlebars');

const { init: storage } = require('./models/storage') //rename init with storage

const { about } = require('./controllers/about');
const { catalog } = require('./controllers/catalog');
const { create, post } = require('./controllers/create');
const { details } = require('./controllers/details');
const { notFound } = require('./controllers/notFound');

start();

async function start() {
    const port = 3000;
    const app = express();

    // First variable (hbs) -> razshirenieto na failovete, koito shte izpolzvame, second variable->funkciqta, koqto e engine-a
    app.engine('hbs', hbs({
        extname: '.hbs'
    }));
    app.set('view engine', '.hbs'); // pri render (tursene na template), razshirenieto na template-a da e hbs
    app.use('/static', express.static('static'));
    app.use(express.urlencoded({
        extended: false
    }));
    app.use(await storage());

    app.get('/', catalog);
    app.get('/about', about);
    app.get('/create', create);
    app.get('/details/:id', details);
    app.post('/create', post);

    app.all('*', notFound);

    app.listen(port, () => console.log(`Server listening on port ${port}`));
}
