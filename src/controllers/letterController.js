const letterService = require('../services/letterService');

exports.createLetter = async (req, res) => {
    try {
        const letter = await letterService.createLetter(req.body)
        res.status(201).json(letter);
    } catch (err) {
        res.status(500).json({message: "error on creating."});
    }
};

exports.getLetter = async (req, res) => {
    try {
        const { code } = req.params;
        const letter = await letterService.getLetter(code);

        return letter
            ? res.json(letter)
            : res.status(404).json({ message: "Letter not found." });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Error on getting letter." });
    }
};

