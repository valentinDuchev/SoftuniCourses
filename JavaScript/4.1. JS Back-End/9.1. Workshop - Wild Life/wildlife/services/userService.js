const User = require('../models/User');
const { compare, hash } = require('bcrypt');
const e = require('express');


//TODO add all fields required in the exam
//TODO add validation

async function register (firstName, lastName, email, password) {
    const existing = await getUserByEmail(email);

    if (existing) {
        throw new Error ('Username is taken.')
    }

    const hashedPassword = await hash(password, 10);

    const user = new User({
        firstName,
        lastName, 
        email,  
        hashedPassword
    });
     
    await user.save();

    return user;
}

async function login (username, password) {
    const user = await getUserByEmail(username);

    if (!user) {
        throw new Error ('Incorrect email or password');
    } 

    const hasMatch = await compare(password, user.hashedPassword);


    if (!hasMatch) {
        throw new Error ('Incorrect email or password');
    }

    return user;
}   

async function getUserByEmail (email) {
    const user = User.findOne({ email: new RegExp(`^${email}$`, 'i') });

    return user;
}

module.exports = {
    login, 
    register
}