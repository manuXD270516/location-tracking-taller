const { Router } = require('express');
const { TypeNannyController } = require('../controllers');

const router = Router();

// API END-POINTS: GET
router.get('/', TypeNannyController.getAllTypesNanny);
//router.get('/:typeNannyId/typeNanny', ParentsController.getAllNannysForType);

// API END-POINTS: POST
//router.post('/', ParentsController.registerParents);
// API END-POINTS: PUT

// API END-POINTS: DELETE
//router.delete('/:nannyId', nannyController.delete);
// API END-POINTS: PATCH

module.exports = router;
