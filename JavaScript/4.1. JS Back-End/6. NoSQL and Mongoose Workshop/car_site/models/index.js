const mongoose = require('mongoose');

const Car = require('./Car'); //tuk e nujno samo da zaredim faila, toi taka ili imache nqma da se izpulnqva chrez promenlivata Car => tq ne e nujna
const Accessory = require('./Accessory');

const connectionString = 'mongodb://localhost:27017/carbicle';

async function init() {
    try {
        await mongoose.connect(connectionString, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('Database connected')

        mongoose.connection.on('error', (err) => {
            console.error('Database error');
            console.error(err)
        })
    } catch (err) {
        console.error('Error connecting to database.');
        proccess.exit(1);
    }
}

module.exports = init;