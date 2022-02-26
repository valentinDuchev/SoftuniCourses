const { Schema, model, Types: { ObjectId } } = require('mongoose');

const URL_PATTERN = /^(http|https):\/\//;

const tripSchema = new Schema({
    startPoint: { type: String, minLength: [4, 'The start point must be at least 4 characters long'] },
    endPoint: { type: String, minLength: [4, 'The end point must be at least 4 characters long'] },
    date: { type: String, required: true },
    time: { type: String, required: true },
    carImage: {
        type: String, validate: {
            validator(value) {
                return URL_PATTERN.test(value);
            },
            message: 'Image must be a valid URL'
        }
    },
    carBrand: { type: String, minLength: [4, 'The car brand must be at least 4 characters long'] },
    seats: { type: Number, required: true },
    price: { type: Number, min: [1, 'Price must be over 1 BGN'], max: [50, 'Price cannot be over 50 BGN'] },
    description: { type: String,  minLength: [10, 'The description must be at least 10 characters long'] },
    creator: { type: ObjectId, ref: 'User', required: true },
    buddies: { type: [ObjectId], ref: 'User', required: true }
});

const Trip = model('Trip', tripSchema);

module.exports = Trip;