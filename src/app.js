const express = require('express');
const bodyParser = require('body-parser');
const letterRouts = require('./routes/letterRoutes');
const imageRoutes = require('./routes/imageRoutes');
const logger = require('./middlewares/logger');
const connectDB = require('./config/db');

const app = express();

connectDB().then(() => console.log('MongoDB connected'));

app.use(bodyParser.json());
app.use(logger);
app.use('/api/v1/letters', letterRouts);
app.use('/api/v1/images', imageRoutes);

// 오류 처리 미들웨어
//app.use(errorHandler);

module.exports = app;
