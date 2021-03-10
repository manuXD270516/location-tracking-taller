const { morphism } = require('morphism');
const { mapperContactRerefence } = require('./person-reference.dto');

const mapperWorkExperience = (WorksExperiences) => {
  const WorkExperienceSchema = {
    WorkExperienceId: 'WorkExperienceId',
    WorkName: 'WorkName',
    Description: 'Description',
    Address: 'Address',
    ReasonExit: 'ReasonExit',
    StartDate: 'StartDate',
    EndDate: 'EndDate',
    ContactsReferences: 'ContactsReferences',
  };

  let workExperienceDto = morphism(WorkExperienceSchema, WorksExperiences);

  workExperienceDto.forEach((workExperience, i) => {
    console.log(workExperience);
    workExperienceDto[i].ContactsReferences = mapperContactRerefence(
      workExperience.ContactsReferences
    );
  });

  return workExperienceDto;
};

module.exports = {
  mapperWorkExperience,
};
