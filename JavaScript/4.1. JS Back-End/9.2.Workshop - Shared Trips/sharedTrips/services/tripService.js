const Post = require('../models/Trip');
const Trip = require('../models/Trip');

async function createTrip (trip) {
    const result = new Trip(trip);
    await result.save();

    return result;
}

async function getTrips () {
    return Post.find({});
}

module.exports = {
    createTrip, 
    getTrips
}