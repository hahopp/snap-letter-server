const express = require('express');
const {uploadSingleImage, multerErrorHandler} = require('../middlewares/uploadSingleImage.js');
const {uploadImage} = require('../controllers/imageController.js');

const router = express.Router();

// POST /upload 라우트 - 업로드 처리
router.post('/', uploadSingleImage, multerErrorHandler, uploadImage);

module.exports = router;
