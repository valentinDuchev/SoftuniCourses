const mongoose = require('mongoose');
const config = require('./config');
// require('../models/User');

const connectionString = config.dbURL;

module.exports = async (app) => {
    try {
        await mongoose.connect(connectionString, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
            useCreateIndex: true,
            useFindAndModify: false
        });

        console.log('Database connected');

        mongoose.connection.on('error', (err) => {
            console.error('Database error');
            console.error(err);
        });
    } catch (err) {
        console.error('Error connecting to database');
        // proccess.exit(1);
    }
}