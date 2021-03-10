const { Router } = require('express');
const router = Router();

const { UserController } = require('../controllers/');

// APIS END-POINTS: GET
router.get('/verify/:userId', UserController.verifyAuthenticate);

// APIS END-POINTS: POST
router.post('/authenticate/:userType', UserController.authenticateUser);

router.post('/logout/:userId', UserController.logoutUser);

// APIS END-POINTS: PUT

// APIS END-POINTS: DELETE

// APIS END-POINTS: PATCH

module.exports = router;
