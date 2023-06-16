const capitalize = require('../scripts/capitalize');

test('Return first letter capitalized', () => { 
  expect(capitalize('test')).toBe('Test');
});

test('Works with all lower case', () => {
  expect(capitalize('lowercase')).toBe('Lowercase');
});

test('Works with all upper case', () => {
  expect(capitalize('UPPERCASE')).toBe('Uppercase');
});

test('Works with numbers and symbols in string', () => {
  expect(capitalize('test string 124!')).toBe('Test string 124!');
});

test('Works if first character is not a letter', () => {
  expect(capitalize('1141')).toBe('1141');
});

test('Works with a single character', () => {
  expect(capitalize('i')).toBe('I');
});