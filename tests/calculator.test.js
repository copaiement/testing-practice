const calculator = require('../scripts/calculator');

test('Adds', () => {
  expect(calculator.add(1, 2)).toBe(3);
});

test('Subtracts', () => {
  expect(calculator.subtract(6, 2)).toBe(4);
});

test('Multiplies', () => {
  expect(calculator.multiply(3, 5)).toBe(15);
});

test('Divides', () => {
  expect(calculator.divide(4, 2)).toBe(2);
});

test('Rejects non numbers', () => {
  expect(calculator.add('a', 2)).toBe('One or more inputs is not a number');
});