// backend/routes/aiRoutes.js
const express = require('express');
const { generateCode, optimizeCode } = require('../controllers/aiController');

const router = express.Router();
router.post('/generate-code', generateCode);
router.post('/optimize-code', optimizeCode);

module.exports = router;
