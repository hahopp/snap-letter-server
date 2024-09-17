const express = require('express');
const router = express.Router();
const letterController = require('../controllers/letterController');

router.post('/', letterController.createLetter); // Create
router.get('/:id', letterController.getLetter); // Read by ID

module.exports = router;
