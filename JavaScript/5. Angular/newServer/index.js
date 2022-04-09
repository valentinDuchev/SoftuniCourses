const express = require('express');
const corsMiddleware = require('./config/cors');

require('dotenv').config();

const databaseConfig = require('./config/database');

const recipeController = require('./router/recipeRouter')

start();

async function start() {
    const app = express();
    await databaseConfig(app);


    app.use(express.json());

    app.use(corsMiddleware);

    app.use('/api', recipeController);

    app.get('/', (req, res) => {
        res.json({ message: 'It works' })
    })

    app.listen(5000, () => console.log('Server started on port 5000'));
}