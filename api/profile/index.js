const express = require('express');
const router = express.Router();
const controller = require('./profile.controller');

router.get('/get', controller.getAll);
router.get('/get/:id', controller.getById);
router.post('/create', controller.create);
router.put('/update', controller.update);

module.exports = router;