const express = require('express');
const router = express.Router();

const {InfoController} = require('../../controllers');
router.get('/info',InfoController.info);

const airplaneRoutes = require('./airplane-routes');
router.use('/airplanes',airplaneRoutes);

module.exports = router;