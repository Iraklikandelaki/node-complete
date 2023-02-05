const express = require('express');

const router = express.Router();

const partnersController = require('../controllers/partners');
router.get('/partners', partnersController.getContent);
router.post('/partners', partnersController.createContent)

module.exports = router;