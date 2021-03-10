/**
 * @author manuel saavedra
 * @email saavedramanuel100@gmail.com
 * @create date 2020-07-14 20:50:52
 * @modify date 2020-07-14 20:50:52
 * @desc [description]
 */

const asyncForEach = async (array, callback) => {
  for (let i = 0; i < array.length; i++) {
    await callback(array[i], i, array);
  }
};

const addParamsToAllObjects = (objects, paramsAditional) => {
  console.log(paramsAditional);
  return objects.map((currentObject) => {
    return { ...currentObject, ...paramsAditional };
  });
};

module.exports = {
  asyncForEach,
  addParamsToAllObjects,
};
