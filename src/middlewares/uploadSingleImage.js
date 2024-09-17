const multer = require('multer');

const storage = multer.memoryStorage();
const upload = multer({
    storage,
    limits: {fileSize: 3 * 1024 * 1024}, // 3MB로 용량 제한
    fileFilter: (req, file, cb) => {
        // 이미지 파일인지 MIME 타입으로 체크
        if (!file.mimetype.startsWith('image/')) {
            return cb(new Error('INVALID_FILE_TYPE'), false);
        }
        cb(null, true);
    }
});

const uploadSingleImage = upload.single('image');


// Multer 에러 처리 미들웨어
const multerErrorHandler = (err, req, res, next) => {
    if (err) {
        if (err.message === "INVALID_FILE_TYPE") {
            return res.status(400).json({message: "it's not image file"});
        }
        if (err.code === 'LIMIT_FILE_SIZE') {
            return res.status(400).json({message: 'File size exceeds 3MB limit'});
        }
        return res.status(500).json({message: 'File upload failed'});
    }
    next();
};

module.exports = {uploadSingleImage, multerErrorHandler};