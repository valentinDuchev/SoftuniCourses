const express = require('express');
const expressConfig = require('./config/express')
const databaseConfig = require('./config/database');
const routesConfig = require('./config/routes');

//const initDb = require('./models/index');

const { home } = require('./controllers/home');
//const { allPosts } = require('./controllers/allPosts');
//const { notFound } = require('./controllers/notFound');
//const authService = require('./controllers/auth');
//const createService = require('./controllers/create');
//const { details } = require('./controllers/details');

start();

async function start() {
    
    const app = express();
    expressConfig(app);
    await databaseConfig(app);
    routesConfig(app);

    //await initDb();

    app.get('/', home);
    //app.get('/allPosts', allPosts);
    //app.get('/details', details)
    
    //app.use(createService);



    //app.get('*', notFound)

    app.listen(3000, () => console.log('Server started on port 3000'));
}


