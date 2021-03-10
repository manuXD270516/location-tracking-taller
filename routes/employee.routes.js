const { Router } = require('express');
const { EmployeeController } = require('../controllers');

const router = Router();

// API END-POINTS: GET
router.get('/', EmployeeController.getAllEmployees);
//router.get('/:', NannyController.getNannyById);

// API END-POINTS: POST
router.post('/', EmployeeController.registerEmployee);

// Temp
//router.post('/create', NannyController.preRegisterNanny);
// API END-POINTS: PUT

// API END-POINTS: DELETE
//router.delete('/:nannyId', NannyController.deleteNanny);
// API END-POINTS: PATCH

module.exports = router;
