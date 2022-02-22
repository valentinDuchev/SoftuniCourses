const { Schema, model } = require('mongoose');

const NAME_PATTERN = /^([a-zA-Z]+) ([a-zA-Z]+)$/;

//TODO change user model according to exam description
const userSchema = new Schema({
    fullName: {
        type: String, required: [true, 'First name + Last name is required'], validate: {
            validator(value) {
                return NAME_PATTERN.test(value);
            }, message: 'First name and Last name may contain only english letters'
        }
    },
    username: { type: String, required: [true, 'Username is required'], minlength: [5, 'Username must be at least 5 characters long'] },
    hashedPassword: { type: String, required: true }
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