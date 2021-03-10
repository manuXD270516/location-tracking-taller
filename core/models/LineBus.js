const { Sequelize, DataTypes } = require('sequelize');
const { sequelize } = require('../database/sequelize');
const moment = require('moment');
const { paramsDeleted, excludeTimestamps } = require('../../shared/utils/database-sequelize');


  const LineBus = sequelize.define(
    'LineBus',
    {
      LineBusId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        comment: 'null',
      },
      LineNumber: {
        type: DataTypes.INTEGER,
        allowNull: false,
        comment: 'null',
      },
      InternNumber: {
        type: DataTypes.INTEGER,
        allowNull: false,
        comment: 'null',
      },
      DriverFullName: {
        type: DataTypes.STRING(100),
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
        type: DataTypes.CHAR(1),
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
      tableName: 'LineBus',
      timestamps: false,
      schema: 'taller',
    }
  );

  console.log(LineBus);

  module.exports = LineBus;
