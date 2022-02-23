const User = require('../models/User');
const { compare, hash } = require('bcrypt');
const e = require('express');


//TODO add all fields required in the exam
//TODO add validation

async function register (username, password, address) {
    const existing = await getUserByUsername(username);

    if (existing) {
        throw new Error ('Username is taken.')
    }

    const hashedPassword = await hash(password, 10);

    const user = new User({
        username, 
        hashedPassword, 
        address
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

async function getUserById (id) {
    return User.findById(id)
}

async function userAddArt (userId, artName) {
    const user = await User.findById(userId);
    user.added.push(artName);

    await user.save();
}

async function userAddShare (userId, artName) {
    const user = await User.findById(userId);
    user.shared.push(artName);

    await user.save();
}

module.exports = {
    login, 
    register, 
    getUserByUsername, 
    getUserById, 
    userAddArt, 
    userAddShare
}