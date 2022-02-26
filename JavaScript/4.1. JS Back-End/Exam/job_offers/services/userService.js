const User = require('../models/User');
const { compare, hash } = require('bcrypt');
const e = require('express');


//TODO add all fields required in the exam
//TODO add validation

async function register (email, password, skills) {
    const existing = await getUserByEmail(email);

    if (existing) {
        throw new Error ('Email is taken.')
    }

    const hashedPassword = await hash(password, 10);

    const user = new User({
        email, 
        hashedPassword, 
        skills, 
    });
     
    await user.save();

    return user;
}

//TODO change identifier 
async function login (email, password) {
    const user = await getUserByEmail(email);

    if (!user) {
        throw new Error ('Incorrect username or password');
    } 

    const hasMatch = await compare(password, user.hashedPassword);


    if (!hasMatch) {
        throw new Error ('Incorrect username or password');
    }

    return user;
}   

//TODO identify the user by identifier (current identifier is email)
async function getUserByEmail (email) {
    const user = User.findOne({ email: new RegExp(`^${email}$`, 'i') });

    return user;
}
 
async function getUserById (id) {
    return await User.findById(id);
}

module.exports = {
    login, 
    register, 
    getUserByEmail, 
    getUserById
}