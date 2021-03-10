const { Router } = require('express');
const { NannyController } = require('../controllers');

const router = Router();

// API END-POINTS: GET
router.get('/', NannyController.getAllNannys);
router.get('/:typeNannyId/typeNanny', NannyController.getAllNannysForType);
router.get('/:typeNannyId/typeNanny/forRegister', NannyController.getDataForTypeNanny);
router.get('/:nannyId', NannyController.getNannyById);
router.get(
  '/:assignmentNannyId/assignmentNanny/forEdition',
  NannyController.getDataForEditionByTypeNanny
);
router.get('/verify/params', NannyController.verifyParamsNanny);
router.get('/finishRegister/:typeNannyId/typeNanny', NannyController.getDataForFinishRegister);

// API END-POINTS: POST
router.post('/preRegister', NannyController.preRegisterNanny);
router.post('/finishRegister/:nannyId', NannyController.finishRegisterNanny);
router.post('/workExperience/:nannyId', NannyController.addWorksExperiences);

// API END-POINTS: PUT
router.put('/changeState/:nannyId', NannyController.changeState);

// API END-POINTS: DELETE
router.delete('/:nannyId', NannyController.deleteNanny);
// API END-POINTS: PATCH

module.exports = router;
