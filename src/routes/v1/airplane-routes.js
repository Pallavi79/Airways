const express = require('express');
const router = express.Router();

const {AirplaneController}=require('../../controllers');


//  /api/va/airplanes
router.post('/',AirplaneController.createAirplane);

module.exports=router