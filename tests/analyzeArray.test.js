const analyzeArray = require('../scripts/analyzeArray');

test('Incorrect Input', () => {
  expect(analyzeArray('test')).toBe('Input is not an array');
});

test('Normal Array', () => {
  expect(analyzeArray([1, 2, 3, 4, 5])).toEqual({
    average: 3,
    max: 5,
    min: 1,
    length: 5,
  });
});
