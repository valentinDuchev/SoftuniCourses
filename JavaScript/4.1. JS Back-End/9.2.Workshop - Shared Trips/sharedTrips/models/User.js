const { Schema, model } = require('mongoose');

const EMAIL_PATTERN = /^([a-zA-Z]+)@([a-zA-Z]+\.([a-zA-Z]+))$/;

//TODO change user model according to exam description
const userSchema = new Schema({
    email: {
        type: String, required: [true, 'Email is required'], valudate: {
            validator(value) {
                return EMAIL_PATTERN.test(value);
            },
            message: 'Email must be valid and must contain onli english letters'
        }
    },
    hashedPassword: { type: String, required: true },
    gender: { type: String, required: true }
});

userSchema.index({ email: 1 }, {
    unique: true,
    collation: {
        locale: 'en',
        strength: 2
    }
});

const User = model('User', userSchema);

module.exports = User;