const { morphism } = require('morphism');
const { mapperOfferedAnswerForQuestion, mapperQuestionAnswered } = require('./offered-answer.dto');

const mapperQuestionAndAnswersSelected = (questions) => {
  const questionSchema = {
    QuestionId: 'QuestionId',
    Question: 'QuestionText',
    Priority: 'Priority',
    AllowMultypleAnswers: 'AllowMultypleAnswers',
    ControlViewTypeId: 'ControlViewType.ControlViewTypeId',
    ControlViewTypeDesc: 'ControlViewType.ControlName',
    Answered: ({ QuestionOfferedAnswers }, src, dest) =>
      +QuestionOfferedAnswers.some(({ Nannys }) => Nannys.length),
    OfferedAnswers: 'QuestionOfferedAnswers',
  };

  //console.log(questions[0].QuestionOfferedAnswers);
  // iterar
  let questionDto = morphism(questionSchema, questions);

  questionDto.forEach((question, i) => {
    //console.log(question.OfferedAnswers);
    //questionDto.Answered = mapperQuestionAnswered(question.OfferedAnswers);
    questionDto[i].OfferedAnswers = mapperOfferedAnswerForQuestion(question.OfferedAnswers);
  });

  //console.log(questionDto.OfferedAnswers);
  return questionDto;
};

module.exports = {
  mapperQuestionAndAnswersSelected,
};
