const {
  responseServer,
  StatusCodeHTTP,
  StatusCodeDomain,
} = require('../shared/utils/http-request');
const { LocationTrackingRepository } = require('../core/models/repositories');
const { paramsForVerifyBeforeCreate } = require('../shared/utils/database-sequelize');

const entityTypeNanny = 'Tipo de Nanny';

const { sequelize: sequelizeInstance } = require('../core/database/sequelize');
const { addParamsToAllObjects } = require('../shared/utils/arrays');

const getAllLocationsLogs = async (req, res) => {
  try {
    let data = await LocationTrackingRepository.getAllLocationsTracking();
    return responseServer(res, data);
  } catch (error) {
    return responseServer(res, error, StatusCodeHTTP.INTERNAL_SERVER_ERROR_HTTP);
  }
};

const registrerLocationLogs = async (req, res) => {
  try {
    let { lat,lon } = req.query;
      let LineBusId = 1; // default
      let Latitude = parseFloat(lat)
        Longitude = parseFloat(lon);
    await LocationTrackingRepository.registerLocationTracking({ Latitude, Longitude, LineBusId });
    return responseServer(res, { message: 'coordenada registrada exitosamente' });
  } catch (error) {
    return responseServer(res, error, StatusCodeHTTP.INTERNAL_SERVER_ERROR_HTTP);
  }
};

module.exports = { getAllLocationsLogs, registrerLocationLogs };
