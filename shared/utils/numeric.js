let nextCode = (prefix, lastCode) => {
  let newCode = prefix;

  let startPosNumber = lastCode.indexOf(prefix) + prefix.length;

  let maxCodeDigits = lastCode.length - startPosNumber;

  let lastCodeNumber = parseInt(lastCode.substring(startPosNumber));

  lastCodeNumber++;

  newCode += `${'0'.repeat(maxCodeDigits - lastCodeNumber.toString().length)}${lastCodeNumber}`;

  return newCode;
};

module.exports = {
  nextCode,
};
