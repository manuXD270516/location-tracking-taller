const express = require('express');
const cors = require('cors');
const compression = require('compression');
const bodyParser = require('body-parser');
const { Router } = require('express');

const router = Router();
const apiRouter = Router();

const USER_NANNY = 1;
const USER_FATHER = 2;
const USER_EMPLOYEE = 3;

/*const NannyRoutes = require('./nanny.routes');
const TypeNannyRoutes = require('./type-nanny.routes');
const ParentsRoutes = require('./parents.routes');
//const GroupQuestionRoutes = require('./group-question.routes');
const SessionRoutes = require('./session.routes');
const ServiceProposalRoutes = require('./service-proposal.routes');

const QuestionnaireRoutes = require('./questionnaire.routes');
const EmployeeRoutes = require('./employee.routes');
const UsersRoutes = require('./users.routes');
const PhoneTypeRoutes = require('./phone-type.routes');*/
const LocationTrackingRoutes = require('./location-tracking.routes');

const authTokenJWT = require('../shared/middlewares/auth-token-jwt');

router.use(express.static('public'));

apiRouter
  .use(cors())
  .use(
    bodyParser.json({
      extended: true,
      limit: '100mb',
    })
  )
  .use(
    bodyParser.urlencoded({
      extended: true,
      limit: '100mb',
    })
  )
  .use(compression());

//apiRouter.use('/session', SessionRoutes);


//apiRouter.use('/groupQuestion', GroupQuestionRoutes);
/* apiRouter.use('/nanny', NannyRoutes);
apiRouter.use('/typeNanny', TypeNannyRoutes);
apiRouter.use('/parents', ParentsRoutes);
apiRouter.use('/serviceProposal', ServiceProposalRoutes);

apiRouter.use('/employee', EmployeeRoutes);
apiRouter.use('/users', UsersRoutes);


apiRouter.use('/questionnaire', QuestionnaireRoutes);
apiRouter.use('/phoneType', PhoneTypeRoutes);
 */
apiRouter.use('/locationTracking', LocationTrackingRoutes);




router.use('/api', apiRouter);

// Test middleware authorization
apiRouter.use(authTokenJWT.verifyTokenAuthorization(USER_NANNY, USER_FATHER, USER_EMPLOYEE));

module.exports = router;
