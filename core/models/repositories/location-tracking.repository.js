const LineBus = require('../LineBus');
const LocationTracking = require('../LocationTracking');

const registerLocationTracking = async (entity) => {
  return await LocationTracking.create(entity);
};


const getAllLocationsTracking = async () => {
  return await LocationTracking.findAll();
};


module.exports = {
  registerLocationTracking,
  getAllLocationsTracking,
};
