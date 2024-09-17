const Letter = require('../models/letter');
const generateRandomString = require("../utils/textGenerator");

exports.createLetter = async (letter) => {
    const newLetter = new Letter({
        title: letter.title,
        thumbnailUrl: letter.thumbnailUrl,
        description: letter.description,
        content: letter.content,
        code: generateRandomString(12)
    });
    return newLetter.save();
}

exports.getLetter = async (code) => {
    return Letter.findOne({code});
}
