const { Router } = require('express');
const { UserController } = require('../controllers');

const router = Router();

// API END-POINTS: GET


// API END-POINTS: POST
router.post('/changePassword/:userType', UserController.changeUserPassword);


// API END-POINTS: DELETE

// API END-POINTS: PATCH



module.exports = router;
