const Play = require('../models/Play');
const User = require('../models/User');
const { getUserByUserId } = require('./userService');

async function createPlay (play) {
    const result = new Play (play);
    await result.save();

    return result;
};

async function getAll () {
    const result = await Play.find({}).lean();
    return result;
};

async function getById (id) {
    return await Play.findById(id).lean();
};

async function getAndSortByDate () {
    const result = await Play.find({}).sort({date: 'descending'}).lean();
    return result;
}

async function like (playId, userId) {
    const play = await Play.findById(playId);
    const user = await getUserByUserId(userId);

    if (play.liked.includes(userId)) {
        throw new Error (`${user.username}` + ' You have already liked this play')
    }

    play.liked.push(userId);
    play.likesCount += 1;

    user.likedPlays.push(playId);

    await play.save();
    await user.save();
}

async function edit (id, data) {
    const existing = await Play.findById(id);

    existing.title = data.title;
    existing.description = data.description;
    existing.imageUrl = data.imageUrl;
    existing.isPublic = data.isPublic;

    await existing.save();
}

async function deletePlay (id) {
    await Play.findByIdAndDelete(id);
}
 
module.exports = {
    createPlay, 
    getAll, 
    getById, 
    getAndSortByDate, 
    like, 
    edit, 
    deletePlay
};
