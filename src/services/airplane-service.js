const{AirplaneRpository} = require('../repositories');
const{StatusCodes}=require('http-status-codes');
const AppError = require('../utils/errors/app-error');


const airplaneRepository = new AirplaneRpository();

async function createAirplane(data) {
    try {
        const airplane = await airplaneRepository.create(data);
        return airplane;
    } catch(error) {
        if(error.name == 'SequelizeValidationError') {
            let explanation = [];
            error.errors.forEach((err) => {
                explanation.push(err.message);
            });
            //console.log(explanation);
            throw new AppError(explanation, StatusCodes.BAD_REQUEST);
        }
        throw new AppError('Cannot create a new Airplance object', StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

module.exports={
    createAirplane
}