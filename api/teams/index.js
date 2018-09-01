const express = require('express');
const router = express.Router();
const controller = require('./teams.controller');

router.get('/get/:id', controller.getById);

module.exports = router;