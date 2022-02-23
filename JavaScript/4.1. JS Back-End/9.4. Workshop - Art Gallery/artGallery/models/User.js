const { Schema, model, Types: {ObjectId} } = require('mongoose');


//TODO change user model according to exam description
const userSchema = new Schema ({
    username: { type: String, minlength: [4, 'Username must be at least 4 characters long'] }, 
    hashedPassword: { type: String, required: true}, 
    address: { type: String, required: [true, 'Address is required'], maxlength: [20, 'The address can be at most 20 characters long'] }, 
    shared: { type: [String], default: [] }, 
    added: { type: [String], default: [] }
});

userSchema.index({ username: 1 }, {
    unique: true, 
    collation: {
        locale: 'en', 
        strength: 2
    }
});

const User = model('User', userSchema);

module.exports = User;