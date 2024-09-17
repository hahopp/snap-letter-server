const {uploadFileToMinIO} = require('../services/imageService.js');

const uploadImage = async (req, res) => {
    const {file} = req;

    if (!file) {
        return res.status(400).json({message: '파일이 업로드되지 않았습니다.'});
    }

    try {
        const objectName = await uploadFileToMinIO(file);
        res.status(200).json({
            message: `success`,
            id: objectName
        });
    } catch (error) {
        res.status(500).json({message: error.message});
    }
};

module.exports = {uploadImage};
