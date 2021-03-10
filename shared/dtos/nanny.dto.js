const { morphism } = require('morphism');
const { mapperFileDocument } = require('./file-document.dto');
const { mapperQuality } = require('./quality.dto');
const { mapperWorkExperience } = require('./work-experience.dto');

const mapperNannyDetails = (nannyModel) => {
  const nannySchema = {
    CI: 'CI',
    Extension: 'Extension',
    FullName: (iterate, src, dest) => {
      return `${iterate.Names} ${iterate.Lastnames}`;
    },
    Email: 'Email',
    Phone: 'Phone',
    Gender: 'Gender',
    DateBirth: 'DateBirth',
    Enabled: 'Enabled',
    CreatedIn: 'CreatedIn',
    Address: {
      Textual: 'Address',
      Latitude: 'LocationLogs[0].Latitude',
      Longitude: 'LocationLogs[0].Longitude',
    },
    User: {
      Username: 'User.Username',
      LoginStatus: 'User.UsersSessions[0].SessionActive',
    },
  };

  let nannyDto = morphism(nannySchema, nannyModel);
  nannyDto.FileDocuments = mapperFileDocument(nannyModel.FileDocuments);
  nannyDto.Qualities = mapperQuality(nannyModel.Qualities); 
  nannyDto.WorkExperiences = mapperWorkExperience(nannyModel.WorkExperiences); 
  return nannyDto;
};

module.exports = {
  mapperNannyDetails,
};
