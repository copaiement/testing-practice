function checkInputs(string, shift) {
  if (typeof string === 'string' && typeof shift === 'number') return true;
  return false;
}

function caesarCypher(string, shift) {
  if (checkInputs(string, shift)) {

  }
  return 'Wrong input type. Required: string, number';
}

// acceptable characters:
// A-Z, a-z
// all other characters stay the same

module.exports = caesarCypher;
