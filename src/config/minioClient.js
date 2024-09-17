const Minio = require('minio');
const dotenv = require('dotenv');

dotenv.config();

// MinIO 클라이언트 초기화
const minioClient = new Minio.Client({
    endPoint: process.env.MINIO_ENDPOINT,
    port: parseInt(process.env.MINIO_PORT, 10),
    useSSL: process.env.MINIO_USE_SSL === 'true',
    accessKey: process.env.MINIO_ACCESS_KEY,
    secretKey: process.env.MINIO_SECRET_KEY,
});

// 버킷이 존재하는지 확인하고 없으면 생성
const bucketName = process.env.MINIO_BUCKET_NAME;

const checkAndCreateBucket = async () => {
    try {
        const exists = await minioClient.bucketExists(bucketName);
        if (!exists) {
            await minioClient.makeBucket(bucketName);
            console.log(`Bucket '${bucketName}' created successfully.`);
        } else {
            console.log(`Bucket '${bucketName}' already exists.`);
        }
    } catch (error) {
        console.error('Error in bucket creation or check:', error);
    }
};

checkAndCreateBucket().then(() => {
    console.log("minio client is ready.");
});

module.exports = minioClient;
