const Trip = require('../models/Trip');

async function createTrip (trip) {
    const result = new Trip(trip);
    await result.save();

    return result;
}

module.exports = {
    createTrip, 
    
}