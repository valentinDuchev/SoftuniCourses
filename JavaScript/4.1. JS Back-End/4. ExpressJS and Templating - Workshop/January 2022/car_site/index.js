// [ x ] initialize and configure Express app
// [ x ] initialize templating lib
// [ x ] create home controller
// [ x ] bind routing
// [ x ] create layout
// [  ] create data service
// [  ] implement controllers 

const express = require('express');
const hbs = require('express-handlebars');

const carsService = require('./services/cars')

const { home } = require('./controllers/home');
const { about } = require('./controllers/about');
const create = require('./controllers/create');
const { details } = require('./controllers/details');
const deleteCar = require('./controllers/delete');
const edit = require('./controllers/edit')

const { notFound } = require('./controllers/notFound');

const app = express();

app.engine('hbs', hbs.create({
    extname: '.hbs'
}).engine);
app.set('view engine', 'hbs'); //tova e za da mojem pri render da ne se nalaga da slagame .hbs nakraq (pr: res.render(home) vmesto res.render(home.hbs))

app.use(express.urlencoded({ extended: true }));
app.use('/static', express.static('static'));
app.use(carsService())

app.get('/', home);
app.get('/about', about);
app.get('/create', create.get);
app.get('/details/:id', details);

app.post('/create', create.post)

app.route('/delete/:id')
    .get(deleteCar.get)
    .post(deleteCar.post)

app.route('/edit/:id')
    .get(edit.get)
    .post(edit.post)

app.all('*', notFound);

app.listen(3000, () => {
    console.log('Server started on port 3000');
})