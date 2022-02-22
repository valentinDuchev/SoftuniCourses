const { Schema, model, Types: { ObjectId } } = require('mongoose');

const URL_PATTERN = /^https?:\/\/(.+)$/;

const housingSchema = new Schema ({
    name: { type: String, minlength: [6, 'The name of the property must be at least 6 characters long']}, 
    type: { type: String, required: [true, 'You must enter a property type']}, 
    year: { 
        type: Number, 
        required: [true, 'You must enter a valid year'], 
        min: [1850, 'Properties built before 1850 are not valid'], 
        max: [2021, 'Properties, which are still not built, are not valid']
    }, 
    city: { type: String, minlength: [4, 'The city must be at least 4 characters long']}, 
    homeImage: {
        type: String, validate: {
            validator(value) {
                return URL_PATTERN.test(value)
            }, message: 'Image must be a valid URL'
        }
    }, 
    description: {type: String, minlength: [60, 'Description must be at least 60 charcters long']}, 
    pieces: { 
        type: Number,
        min: [0, 'The available pieces cannot be less than 1'], 
        max: [10, 'The available pieces cannot be mre than 10']
    }, 
    rented: { type: [ObjectId], ref: 'User', default: [] }, 
    owner: { type: ObjectId, ref: 'User', required: true }
});

const Housing = model('Housing', housingSchema);

module.exports = Housing;