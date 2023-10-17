const express = require('express');
const router = express.Router();

const {InfoController} = require('../../controllers');
router.get('/info',InfoController.info);

//Airplane router
const airplaneRoutes = require('./airplane-routes');
router.use('/airplanes',airplaneRoutes);

//Cities router
const cityRoutes = require('./city-routes');
router.use('/cities',cityRoutes);

module.exports = router;