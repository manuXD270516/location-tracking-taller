const { morphism } = require('morphism');

const mapperFileDocument = (filesDocument) => {
  const fileDocumentSchema = {
    FileDocumentId: 'FileDocumentId',
    URL: 'FileUrl',
    Extension: 'Extension',
    FileDocumentTypeId: 'FileDocumentType.FileDocumentTypeId',
    FileDocumentTypeDesc: 'FileDocumentType.TypeName',
  };
  return morphism(fileDocumentSchema, filesDocument);
};

module.exports = {
  mapperFileDocument,
};
