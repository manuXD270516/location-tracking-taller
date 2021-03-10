const { morphism } = require('morphism');
const { mapperQuestionAndAnswersSelected } = require('./question.dto');

const mapperQuestionnaire = (questionnaries) => {
  const questionnaireSchema = {
    QuestionnaireId: 'QuestionnaireId',
    Questionnaire: 'Name',
    TimeToSolve: 'TimeToSolve',
    TimeResolved: 'NannysResolved[0].QuestionnairePersonHeader.TimeResolved',
    Questions: 'Questions',
  };

  let questionnaireDto = morphism(questionnaireSchema, questionnaries);

  questionnaireDto.forEach((questionnaire, i) => {
    questionnaireDto[i].Questions = mapperQuestionAndAnswersSelected(questionnaire.Questions);
  });
  //console.log(questionnarie.Questions[0].OfferedAnswers);

  /*questionnaireDto.Questions = mapperQuestionAndAnswersSelected(questionnaries.Questions);*/

  return questionnaireDto;
};

module.exports = {
  mapperQuestionnaire,
};
