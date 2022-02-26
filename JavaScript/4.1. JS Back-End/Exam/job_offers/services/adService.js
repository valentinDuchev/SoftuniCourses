const Ad = require('../models/Ad');
const { getUserById, getUserByEmail } = require('./userService');

async function createAd(ad, userId) {
    const result = new Ad(ad);
    await result.save();
    const user = await getUserById(userId);
    user.adds.push(result._id)
    await user.save()

    return result;
}

async function getAll() {
    return await Ad.find({}).lean();
}

async function getById(id) {
    return await Ad.findById(id).populate('author', 'email').populate('applied', 'email skills').lean();
}

async function apply(adId, userId) {
    const ad = await Ad.findById(adId);

    for (let i = 0; i < ad.applied.length; i++) {
        if (ad.applied[i]._id == userId) {
            throw new Error('You have already applied for this job')

        }
    }
    
    ad.applied.push(userId)
    ad.appliedCount += 1;

    await ad.save();
}

async function edit (id, data) {
    const existing = await Ad.findById(id);

    existing.headline = data.headline;
    existing.location = data.location;
    existing.name = data.name;
    existing.description = data.description;

    await existing.save()
}

async function deleteById (id) {
    await Ad.findByIdAndDelete(id);
}

async function search (email) {
    const author = await getUserByEmail(email);
    console.log(author._id)
    return await Ad.find({author: author._id}).lean()
}

module.exports = {
    createAd,
    getAll,
    getById,
    apply, 
    edit, 
    deleteById, 
    search
}