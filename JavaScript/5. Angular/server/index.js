global.__basedir = __dirname;
require('dotenv').config();

const express = require('express');
const expressConfig = require('./config/express')
const databaseConfig = require('./config/database');
const cors = require('cors');
const routes = require('./config/routes');
const errorHandler = require('./utils/errHandler');


start();

async function start() {
    const config = require('./config/config');

    const app = express();
    require('./config/express')(app);
    await databaseConfig(app);

    app.use(cors({
        origin: config.origin,
        credentials: true
    }));

    app.use('/api', routes);
    app.use(errorHandler)

    app.listen(config.port, console.log(`Listening on port ${config.port}!`));
}