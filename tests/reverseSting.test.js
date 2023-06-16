const reverseString = require('../scripts/reverseString');

test('Reverses string', () => {
  expect(reverseString('test')).toBe('tset');
});

test('Works with multiple words', () => {
  expect(reverseString('Hello there')).toBe('ereht olleH');
});

test('Works with numbers', () => {
  expect(reverseString('1234')).toBe('4321');
});
