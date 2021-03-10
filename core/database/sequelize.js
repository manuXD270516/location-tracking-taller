'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(__filename);

// Instanciacion de variables gloables
const cls = require('cls-hooked');
const namespace = cls.createNamespace('dss');

const { DATABASE } = require('../../config/environments');

const config = DATABASE;

const db = {};

const sequelize = new Sequelize(config.database, config.username, config.password, config, {
  /*dialect: 'mssql',
    host: 'deltacargosql.database.windows.net',
    dialectOptions : {
        options: {
            encrypt: true
        }
    }*/
});

Sequelize.useCLS(namespace);

Sequelize.DATE.prototype._stringify = function _stringify(date, options) {
  return this._applyTimezone(date, options).format('YYYY-MM-DD HH:mm:ss.SSS');
};

// Logic for Database First
var parentDir = path.normalize(__dirname + '/..');
const pathLoadDb = path.join(parentDir, 'models');
//console.log(pathLoadDb);

/* fs.readdirSync(pathLoadDb)
    .filter(file => {
        return file.indexOf('.') !== 0 && file !== basename && file.slice(-3) === '.js';
    })
    .forEach(file => {
        console.log(file);
        const model = sequelize['import'](path.join(pathLoadDb, file));

        db[model.name] = model;
    });

Object.keys(db)
    .forEach(modelName => {
        if (db[modelName].associate) {
            db[modelName].associate(db);
        }

    });
 */

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch((err) => {
    console.log('Unable to connect to the database:', err);
  });

db.sequelize = sequelize;
db.Sequelize = Sequelize;


module.exports = db;
