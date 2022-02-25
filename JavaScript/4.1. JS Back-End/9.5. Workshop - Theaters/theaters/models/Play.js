const { Schema, model, Types: {ObjectId} } = require('mongoose');

const playSchema = new Schema ({
    title: { type: String, required: [true, 'Title is required'], minlength: [3, 'Minimum length is 3'] }, 
    description: { type: String, required: true, maxLength: [50, 'Description cannot be more than 50 characters long'] },
    imageUrl: { type: String, required: [true, 'The URL of the image is required'] },
    isPublic: { type: Boolean, default: false },
    date: { type: String, default: Date.now },
    liked: { type: [ObjectId], ref: 'User', default: []}, 
    likesCount: { type: Number, default: 0 }, 
    author: { type: ObjectId, ref: 'User', required: true}

});

playSchema.index({ title: 1 }, {
    unique: true, 
    collation: {
        locale: 'en', 
        strength: 2
    }
});

const Play = model('Play', playSchema);

module.exports = Play;