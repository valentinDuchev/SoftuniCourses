const Art = require('../models/Art');
const User = require('../models/User');
const { artViewModel } = require('../util/mappers');

async function createArt (art) {
    const result = new Art(art);
    await result.save();
    return result;
}

async function getAll () {
    return Art.find({});
}

async function getById (id) {
    return Art.findById(id).populate('author', 'username').populate('shared', 'username')
}

async function share(id, userId) {
    const art = await (getById(id));

    if (art.shared.includes(userId)) {
        throw new Error ('You have already shared this art.')
    }

    art.shared.push(userId);
    art.sharedCount += 1;

    await art.save();
}

function deleteById (id) {
    return Art.findByIdAndDelete(id);
}

async function updateById (id, data) {
    const existing = await getById(id);

    existing.title = data.title;
    existing.technique = data.technique;
    existing.picture = data.picture;
    existing.certificate = data.certificate;

    await existing.save();
}

module.exports = {
    createArt, 
    getAll, 
    getById, 
    share, 
    deleteById, 
    updateById
}