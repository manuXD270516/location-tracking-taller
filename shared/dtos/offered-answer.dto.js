const { morphism } = require('morphism');

const mapperQuestionAnswered = (questionOfferedAnswer) => {
  const questionAnsweredSchema = {
    //Answered: ({ Nannys }, src, desc) => Nannys.length,
    Answered: ({ Nannys }, src, desc) => { console.log(Nannys); return Nannys.length}
  };

  return morphism(questionAnsweredSchema, questionOfferedAnswer);
};

const mapperOfferedAnswerForQuestion = (offeredAnswers) => {
  try {
    //console.log(offeredAnswers);
    const offeredAnswerSchema = {
      OfferedAnswerId: 'OfferedAnswerId',
      SelectedAnswerText: 'OfferedAnswer.AnswerText',
      OtherAnswerText: ({ Nannys }, src, dest) =>
        Nannys.length ? Nannys[0].AnswerQuestion.OtherAnswer : null,
      QuestionOfferedAnswerId: 'QuestionOfferedAnswerId',
      Selected: ({ Nannys }, src, dest) => Nannys.length,
      //Selected: 'QuestionOfferedAnswer.Nannys', //default
    };

    const offeredAnswerDto = morphism(offeredAnswerSchema, offeredAnswers);

    //console.log(offeredAnswerDto);

    return offeredAnswerDto;
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  mapperOfferedAnswerForQuestion,
  mapperQuestionAnswered,
};
