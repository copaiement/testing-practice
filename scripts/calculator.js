function checkInputs(a, b) {
  if (typeof a === 'number' && typeof b === 'number') {
    return true;
  }
  return false;
}

const add = (a, b) => {
  if (checkInputs(a, b)) {
    return a + b;
  }
  return 'One or more inputs is not a number';
};

const subtract = (a, b) => {
  if (checkInputs(a, b)) {
    return a - b;
  }
  return 'One or more inputs is not a number';
};

const multiply = (a, b) => {
  if (checkInputs(a, b)) {
    return a * b;
  }
  return 'One or more inputs is not a number';
};

const divide = (a, b) => {
  if (checkInputs(a, b)) {
    return a / b;
  }
  return 'One or more inputs is not a number';
};

const calculator = {
  add,
  subtract,
  multiply,
  divide,
};

module.exports = calculator;
