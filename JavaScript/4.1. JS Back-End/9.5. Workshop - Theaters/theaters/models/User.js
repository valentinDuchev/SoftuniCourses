const { Schema, model, Types: {ObjectId} } = require('mongoose');


//TODO change user model according to exam description
const userSchema = new Schema ({
    username: { type: String, required: true, minlength: [3, 'Username must be at least 3 characters long'] }, 
    hashedPassword: { type: String, required: true}, 
    likedPlays: { type: [ObjectId], ref: 'Play', default: []}, 
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