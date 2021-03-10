const { Sequelize, DataTypes } = require('sequelize');
const { sequelize } = require('../database/sequelize');
const moment = require('moment');
const { paramsDeleted, excludeTimestamps } = require('../../shared/utils/database-sequelize');
const LineBus = require('./LineBus');

const LocationTracking = sequelize.define(
  'LocationTracking',
  {
    LocationTrackingId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      comment: 'null',
    },
    Latitude: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      comment: 'null',
    },
    Longitude: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      comment: 'null',
    },
    Altitude: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      comment: 'null',
    },
    LineBusId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: 'null',
    },
    Status: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1,
      comment: 'null',
    },
    CreatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: new Date().toISOString(),
      comment: 'null',
    },
    LastModifiedAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: new Date().toISOString(),
      comment: 'null',
    },
  },
  {
    defaultScope: {
      attributes: { ...excludeTimestamps() },
      where: {
        Status: 1,
      },
    },
    scopes: {},
    tableName: 'LocationTracking',
    timestamps: false,
    schema: 'taller',
  }
);

// Relationship
// LocationTracking 1..* <-> 1..1 LineBus
LocationTracking.belongsTo(LineBus, {
  foreignKey: 'LineBusId',
});
LineBus.hasMany(LocationTracking, {
  foreignKey: 'LineBusId',
});

console.log(LocationTracking);

module.exports = LocationTracking;
