const mongoose = require('mongoose');

const letterSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    thumbnailUrl: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
    code: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Letter', letterSchema);