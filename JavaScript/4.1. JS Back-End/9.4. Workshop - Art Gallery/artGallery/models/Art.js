const { Schema, model, Types: { ObjectId } } = require('mongoose');

const CERTIFICATE_PATTERN = /^(Yes)|(No)$/;
const URL_PATTERN = /^https?:\/\/(.+)$/;

const artSchema = new Schema({
    title: { type: String, minlength: [6, 'Title must be at least 6 characters long'] },
    technique: { type: String, maxlength: [15, 'The painting technique can be at most 15 characters long'] },
    certificate: {
        type: String, validate: {
            validator(value) {
                return CERTIFICATE_PATTERN.test(value)
            }, message: 'If you have Certificate, answer "Yes", otherwise answer "No"'
        }
    },
    picture: {
        type: String, validate: {
            validator(value) {
                return URL_PATTERN.test(value)
            }, message: 'Image must be a valid URL'
        }
    }, 
    author: { type: ObjectId, ref: 'User', required: true}, 
    shared: { type: [ObjectId], ref: 'User', default: [] }, 
    sharedCount: { type: Number, default: 0 }
});

const Art = model('Art', artSchema);

module.exports = Art;
