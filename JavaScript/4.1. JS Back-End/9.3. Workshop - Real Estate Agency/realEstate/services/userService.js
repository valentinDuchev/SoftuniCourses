const User = require('../models/User');
const { compare, hash } = require('bcrypt');
const e = require('express');


//TODO add all fields required in the exam
//TODO add validation

async function register (fullName, username, password) {
    const existing = await getUserByUsername(username);

    if (existing) {
        throw new Error ('Username is taken.')
    }

    const hashedPassword = await hash(password, 10);

    const user = new User({
        fullName,
        username, 
        hashedPassword
    });
     
    await user.save();

    return user;
}

//TODO change identifier 
async function login (username, password) {
    const user = await getUserByUsername(username);

    if (!user) {
        throw new Error ('Incorrect username or password');
    } 

    const hasMatch = await compare(password, user.hashedPassword);

    console.log()

    if (!hasMatch) {
        throw new Error ('Incorrect username or password');
    }

    return user;
}   

//TODO identify the user by identifier (current identifier is email)
async function getUserByUsername (username) {
    const user = User.findOne({ username: new RegExp(`^${username}$`, 'i') });

    return user;
}

module.exports = {
    login, 
    register
}