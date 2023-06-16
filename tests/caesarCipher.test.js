const caesarCipher = require('../scripts/caesarCipher');

test('Shifts one letter', () => {
  expect(caesarCipher('a', 5)).toBe('f');
});

test('Shifts one letter backwards', () => {
  expect(caesarCipher('f', -5)).toBe('a');
});

test('Wraps forward', () => {
  expect(caesarCipher('z', 5)).toBe('e');
});

test('Wraps backward', () => {
  expect(caesarCipher('a', -5)).toBe('v');
});

test('Works with full string', () => {
  expect(caesarCipher('This is a test', 10)).toBe('Drsc sc k docd');
});

test('Works with negative shift', () => {
  expect(caesarCipher('Negative test', -5)).toBe('Izbvodqz ozno');
});

test('Works with punctuation', () => {
  expect(caesarCipher('This. Is. A. TEST!', 3)).toBe('Wklv. Lv. D. WHVW!');
});
