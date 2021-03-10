const { Router } = require('express');
const { LocationTrackingController } = require('../controller');

const router = Router();

// API END-POINTS: GET
router.get('/', LocationTrackingController.getAllLocationsLogs);
//router.get('/:parentsId', ParentsController.getParentsById);

// API END-POINTS: POST
router.get('/register', LocationTrackingController.registrerLocationLogs);

// API END-POINTS: PUT

// API END-POINTS: DELETE
//router.delete('/:nannyId', nannyController.delete);
// API END-POINTS: PATCH

module.exports = router;
