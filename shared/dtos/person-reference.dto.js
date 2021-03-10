const { morphism } = require('morphism');
const { mapperOfferedAnswerForQuestion, mapperQuestionAnswered } = require('./offered-answer.dto');

const mapperContactRerefence = (contactsReferences) => {
  const contactReference = {
    PhoneId: 'PhoneId',
    PhoneTypeId: 'PhoneTypeId',
    PhoneType: 'PhoneType.TypeDescription',
    ContactFullname: 'PersonReference.ContactFullname',
  };

  return morphism(contactReference, contactsReferences);
};

module.exports = {
  mapperContactRerefence,
};
