/**
 * @author manuel saavedra
 * @email saavedramanuel100@gmail.com
 * @create date 2020-07-14 20:51:22
 * @modify date 2020-07-14 20:51:22
 * @desc [description]
 */

const moment = require('moment');

module.exports = {
  excludeTimestamps: () => {
    return { exclude: ['ActionStatus', 'UpdatedIn', 'DeletedIn'] };
  },

  paramsUpdated: () => {
    return { UpdatedIn: moment(), ActionStatus: 'U' };
  },
  paramsDeleted: () => {
    return { DeletedIn: moment(), ActionStatus: 'D' };
  },

  paramsForVerifyBeforeCreate: (object) => {
    // x = {a: 1, b:2} => arr =  [{a:1}, {b:2}]
    let paramsVerify = [];
    Object.entries(object).forEach((entry) => {
      let currentObj = {};
      currentObj[entry[0]] = entry[1];
      paramsVerify.push(currentObj);
      //console.log(paramsVerify);
    });
    return paramsVerify;
  },

  parameterizePagination: ({ pageNumber, size }) => {
    var resultPaginate = { offset: 0 };
    if (pageNumber && size) {
      // verificar existencia de parametros
      //let totalElements = dataQuery.length;
      //let totalPages = Math.round(totalElements / size);
      resultPaginate = { offset: (pageNumber - 1) * size, limit: parseInt(size) };
    }
    console.log(resultPaginate);
    return resultPaginate;
  },

  finalQuery: ({ pageNumber, size }, data) => {
    let { rows, count } = data;
    let totalElements = count;
    let totalPages = size ? Math.ceil(totalElements / size) : 0;
    return { size, totalElements, totalPages, pageNumber, rows };
  },

  UserType: {
    USER_NANNY: 1,
    USER_PARENTS: 2,
    USER_EMPLOYEE: 3,
  },
  TypeNannyAvailable: {
    NANNY_PROGRAMED: 1,
    NANNY_EMERGENCY: 2,
    NANNY_MONTHLY: 3,
  },

  FileDocumentTypeOptions: {
    VIDEO_PRESENTATION_NANNY: 10,
  },

  ClassifierTypeOptions: {
    RANGE_AGE_KIDS_CLASSIFIER:2,
    CURRENCY_CLASSIFIER: 4,
  },
  ClassifierOptions: {
    PERIOD_MONTH_ID: 10,
  },
  // Ver como hacer dinamico su flujo
};
