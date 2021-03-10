const { Router } = require('express');
const { QuestionnaireController } = require('../controllers');
const router = Router();

router.get('/:questionnaireId', QuestionnaireController.getAllQuestionsByQuestionnaire);

module.exports = router;
