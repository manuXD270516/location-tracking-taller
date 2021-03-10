const LineBus = require('../LineBus');
const LocationTracking = require('../LocationTracking');

const getLineBusById = async (LineBusId) => {
  return await LineBus.findByPk(LineBusId, {
    where: { LineBusId },
    include: [{ model: LocationTracking }],
  });
};


module.exports = {
  getLineBusById,
};
