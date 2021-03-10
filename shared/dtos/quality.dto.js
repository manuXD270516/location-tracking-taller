const { morphism } = require('morphism');

const mapperQuality = (Qualities) => {
  const QualitySchema = {
    QualityId: 'ClassifierId',
    Quality: 'Description',
  };
  return morphism(QualitySchema, Qualities);
};

module.exports = {
  mapperQuality,
};
