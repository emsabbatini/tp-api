const express = require('express');
const controller = require('./auth.controller.js');
const router = express.Router();

router.get('/login', controller.login);

module.exports = router;