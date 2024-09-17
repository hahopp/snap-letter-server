const minioClient = require('../config/minioClient.js');
const generateRandomString = require("../utils/textGenerator");

const uploadFileToMinIO = async (file) => {
    const bucketName = process.env.MINIO_BUCKET_NAME;
    const objectName = `/images/${Date.now()}-${generateRandomString(32)}`; // MinIO에 저장될 파일 이름
    const buffer = file.buffer;

    try {
        await minioClient.putObject(bucketName, objectName, buffer, file.size, {
            'Content-Type': file.mimetype,
        });

        console.log(`file upload succeed: ${objectName}`);
        return objectName;
    } catch (error) {
        console.error('fail on uploading file:', error);
        throw new Error('fail on uploading file');
    }
};

module.exports = {uploadFileToMinIO};
