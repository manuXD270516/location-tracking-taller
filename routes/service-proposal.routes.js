const { Router } = require('express');
const { ServiceProposalController } = require('../controllers');

const router = Router();

// API END-POINTS: GET
router.get(
  '/:assignmentNannyId/assignmentNanny',
  ServiceProposalController.getAllServicesProposalForAssignmentNanny
);

// API END-POINTS: POST
router.post('/', ServiceProposalController.registerServiceProposal);
router.post('/:serviceProposalId/management', ServiceProposalController.managementServiceProposal);

// API END-POINTS: PUT

// API END-POINTS: DELETE
//router.delete('/:nannyId', nannyController.delete);
// API END-POINTS: PATCH

module.exports = router;
