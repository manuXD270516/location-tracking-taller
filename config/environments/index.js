// for deploy local server

require('dotenv').config();
const { environments } = require('../../shared/utils/environments');
const { NODE_ENV } = process.env;

console.log('Current Environment: ', NODE_ENV);
const envLocal = require('./local');
const envDevelop = require('./development');
const envQa = require('./qa');
const envProduction = require('./production');

let currentEnvironment = envLocal; // default scope

switch (NODE_ENV) {
  case environments.DEVELOP_ENVIRONMENT:
    currentEnvironment = envDevelop;
    break;
  case environments.QA_ENVIRONMENT:
    currentEnvironment = envQa;
    break;
  case environments.PRODUCTION_ENVIRONMENT:
    currentEnvironment = envProduction;
    break;
  default:
    // local (not using)
    break;
}

// console.log(currentEnvironment);
module.exports = currentEnvironment;
