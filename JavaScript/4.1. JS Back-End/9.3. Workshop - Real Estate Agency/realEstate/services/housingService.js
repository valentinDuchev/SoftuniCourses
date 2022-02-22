const { findByIdAndUpdate } = require('../models/Housing');
const Housing = require('../models/Housing');
const User = require('../models/User');

async function createHousing (housing) {
    const result = new Housing(housing);
    await result.save();

    return result;
}

async function getHousings () {
    return Housing.find({});
}

async function getHousingById(id) {
    return Housing.findById(id).populate('rented', 'fullName');
}

async function rent (housingId, userId) {
    const housing = await Housing.findById(housingId).populate('rented', 'fullname');
    const user = await User.findById(userId)
    console.log(user.fullName)
    console.log(housing.rented)
    
    if (housing.rented.includes(userId)) {
        throw new Error ('You have already rented this housing')
    }

    if (housing.pieces < 1) {
        throw new Error ('There are not options for this housing left.')
    } 

    housing.rented.push(userId);
    housing.pieces -= 1;
    await housing.save();
}

async function deleteById (id) {
    return Housing.findByIdAndDelete(id);
}

async function editHousing (id, newHousing) {
    const existing = await getHousingById(id);

    existing.name = newHousing.name;
    existing.type = newHousing.type;
    existing.year = newHousing.year;
    existing.city = newHousing.city;
    existing.homeImage = newHousing.homeImage;
    existing.description = newHousing.description;
    existing.pieces = newHousing.pieces;

    await existing.save();
}

async function searchFunc (search) {
    return Housing.find({type: { $regex: search, $options: 'i'}}).exec() //'i' -> case-insensitive
}

module.exports = {
    createHousing, 
    getHousings, 
    getHousingById, 
    rent, 
    deleteById, 
    editHousing, 
    searchFunc
}