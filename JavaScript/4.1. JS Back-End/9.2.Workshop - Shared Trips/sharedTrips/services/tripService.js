const Trip = require('../models/Trip');
const { tripViewModel } = require('../util/mappers');

async function createTrip(trip) {
    const result = new Trip(trip);
    await result.save();

    return result;
}

async function getTrips() {
    return Trip.find({});
}

async function getTripById(id) {
    return Trip.findById(id).populate('creator', 'email').populate('buddies', 'email');
}

async function join(id, userId) {
    const trip = await getTripById(id);

    if (trip.seats > 0) {
        for (let buddy of trip.buddies) {
            if (buddy._id == userId) {
                throw new Error('You have already joined this trip.')
            }
        }
        trip.buddies.push(userId);
        trip.seats -= 1;
        await trip.save();

    } else {
        throw new Error('There are no empty seats for this trip')
    }
}

async function deleteTrip(id) {
    return Trip.findByIdAndDelete(id);
}

async function editTrip(id, trip) {

    const existing = await getTripById(id);

    existing.startPoint = trip.startPoint;
    existing.endPoint = trip.endPoint;
    existing.date = trip.date;
    existing.time = trip.time;
    existing.carImage = trip.carImage;
    existing.seats = trip.seats;
    existing.price = trip.price;
    existing.description = trip.description;

    await existing.save();
}

module.exports = {
    createTrip,
    getTrips,
    getTripById,
    join,
    deleteTrip,
    editTrip
}