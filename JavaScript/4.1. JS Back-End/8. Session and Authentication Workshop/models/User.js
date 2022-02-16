const { Schema, model } = require('mongoose');
const { hashPassword, comparePassword } = require('../services/util');

const userSchema = new Schema ({
    username: { type: String, required: true, minlength: 3, unique: true }, 
    hashedPassword: { type: String, required: true }
});

userSchema.methods.comparePassword = async function(password) {
    //use bcrypt to comparr and hash incoming password with stored hashed password
    return await comparePassword(password, this.hashedPassword );
}

userSchema.pre('save', async function (next) {
    //console.log('Saving', this)
    if (this.isModified('hashedPassword')) {
        console.log('Hashing new password  ')
        this.hashedPassword = await hashPassword(this.hashedPassword);
    }
    next();
})

const User = model('User', userSchema);

module.exports = User;