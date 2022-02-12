const Accessory = require('../models/Accessory');

function mapToViewModel (accessory) {
    return {
        id: accessory._id,
        name: accessory.name, 
        description: accessory.description, 
        imageUrl: accessory.imageUrl, 
        price: accessory.price
    }
    
}

async function createAccessory (accessory) {
    await Accessory.create(accessory);
}; 

async function getAll () {
    const data = await Accessory.find({});
    return data.map(mapToViewModel);
}

module.exports = () => (req, res, next) => {
    req.accessory = {
       createAccessory, 
       getAll
    }; 
    next();
}