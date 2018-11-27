const _ = require('lodash');

function extractNumbers(numbers) {
  let extractedNumbers = [];
  for (const number of _.flattenDeep(numbers)) {
    if (number % 2 == 0) {
      extractedNumbers.push(number);
    }
  }
  return extractedNumbers;
}

module.exports = extractNumbers;
