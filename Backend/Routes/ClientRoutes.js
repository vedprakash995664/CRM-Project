const express = require('express');
const { loginClient } = require('../Controllers/ClientController');

const router = express.Router();

// Login a user
router.post('/login', loginClient);

module.exports = router;
