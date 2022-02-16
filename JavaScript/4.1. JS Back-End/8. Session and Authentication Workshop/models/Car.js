const { Schema, model, Types: { ObjectId } } = require('mongoose');

const carSchema = new Schema ({
    name: { type: String, required: true, minlength: 3}, 
    description: { type: String, default: ''},
    imageUrl: { type: String, default: 'noImage.png'},
    price: { type: Number, required: true, min: 0 }, 
    accessories: { default: [], type: [ObjectId], ref: 'Accessory' }, 
    isDeleted: { type: Boolean, default: false}, 
    owner: { type: ObjectId, ref: 'User' }
});

const Car = model('Car', carSchema);

module.exports = Car;