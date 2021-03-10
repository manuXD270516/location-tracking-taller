const { Router } = require('express');
const { PhoneTypeController } = require('../controllers');

const router = Router();

// API END-POINTS: GET
router.get('/', PhoneTypeController.getAllPhoneTypes);
//router.get('/:parentsId', ParentsController.getParentsById);

// API END-POINTS: POST
//router.post('/', ParentsController.registerParents);
// API END-POINTS: PUT

// API END-POINTS: DELETE
//router.delete('/:nannyId', nannyController.delete);
// API END-POINTS: PATCH

module.exports = router;
