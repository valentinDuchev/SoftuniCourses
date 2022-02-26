const { Schema, model, Types: { ObjectId } } = require('mongoose');

const adSchema = new Schema ({
    headline: { type: String, minLength: [4, 'Headline must be at least 4 characters long']}, 
    location: { type: String, minLength: [8, 'Location must be at leaxt 8 characters long']}, 
    name: { type: String, minLength: [3, 'The company name must be at least 3 characters long']}, 
    description: { type: String, maxlength: [40, 'The company description cannot be more than 40 characters long']}, 
    author: { type: ObjectId, ref: 'User', required: true}, 
    applied: { type: [ObjectId], ref: 'User', default: []}, 
    appliedCount: { type: Number, default: 0 }
});

const Ad = model('Ad', adSchema);

module.exports = Ad;