const mongoose = require('mongoose');

const Car = require('./models/Car')

const connectionString = 'mongodb://localhost:27017/testdb';

start();

async function start() {
    await mongoose.connect(connectionString, {
        useUnifiedTopology: true,
        useNewUrlParser: true
    });
    console.log('Database connected');
    /*
    Creating new Car to the database --> nov zapis

    try {
        const car = new Car({
            name: "Toyota corolla", 
            price: 3000
        });
        await car.save();
    } catch (err) {
        console.log(err.message)  //tozi error shte se izpulni, ako pri suzdavane na zapis nakoi ot validatorite ne e izpulnen-chrez obekta err mojem da reshim koe negovo sv-vo da izpishem na potrebitelq
    }
    */

    const data = await Car.find({});
    console.log(data);
    data.forEach(car => car.startEngine()); //taka izplozvame metoda, koito definirahme po-gore
    data.forEach(car => console.log(car.VAT));

}