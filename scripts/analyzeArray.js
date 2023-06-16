function checkInput(input) {
  return Array.isArray(input);
}

function analyzeArray(array) {
  if (checkInput(array)) {
    return {
      average: (array.reduce((total, cur) => total + cur)) / array.length,
      max: Math.max(...array),
      min: Math.min(...array),
      length: array.length,
    };
  }
  return 'Input is not an array';
}

module.exports = analyzeArray;
