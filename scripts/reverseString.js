function reverseString(string) {
  let rtn = '';
  for (let i = 0; i < string.length; i++) {
    rtn += string.charAt((string.length - 1) - i);
  }
  return rtn;
}

module.exports = reverseString;
