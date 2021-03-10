/**
 * @author manuel saavedra
 * @email saavedramanuel100@gmail.com
 * @create date 2020-07-14 22:08:39
 * @modify date 2020-07-14 22:08:39
 * @desc [description]
 */

const randToken = require('rand-token');

module.exports = {
  generateStringRandom: (size = 64) => {
    return randToken.generate(size);
  },
  nextCode: (prefix, lastCode) => {
    let newCode = prefix;
    // console.log('lastCode: ',lastCode );
    let startPosNumber = lastCode.indexOf(prefix) + prefix.length;
    let maxCodeDigits = lastCode.length - startPosNumber;
    // console.log('maxdigits ', maxCodeDigits);
    let lastCodeNumber = parseInt(lastCode.substring(startPosNumber));
    //console.log('lastCodeNumber:  ', lastCodeNumber);
    lastCodeNumber++;
    // console.log('lastCodeNumber refresh', lastCodeNumber);

    newCode += `${'0'.repeat(maxCodeDigits - lastCodeNumber.toString().length)}${lastCodeNumber}`;
    // console.log('lastCodeNumber: ', lastCodeNumber);
    return newCode;
  },
};
