const User = require('../models/User');
const { compare, hash } = require('bcrypt');


async function register (username, password) {
    const existing = await getUserByUsername(username);

    if (existing) {
        throw new Error ('Username is taken.')
    }

    const hashedPassword = await hash(password, 10);

    const user = new User({
        username, 
        hashedPassword
    });
     
    await user.save();

    return user;
}