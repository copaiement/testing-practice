function checkInputs(string, shift) {
  if (typeof string === 'string' && typeof shift === 'number') return true;
  return false;
}

function shiftChar(char, shift) {
  const charCode = char.charCodeAt(0);
  // capitals
  if (charCode >= 65 && charCode <= 90) {
    let newCode = charCode + shift;
    if (newCode < 65) {
      newCode = 90 + ((newCode - 65) + 1);
    } else if (newCode > 90) {
      newCode = 65 + ((newCode - 90) - 1);
    }
    return String.fromCharCode(newCode);
  }
  // lowercase
  if (charCode >= 97 && charCode <= 122) {
    let newCode = charCode + shift;
    if (newCode < 97) {
      newCode = 122 + ((newCode - 97) + 1);
    } else if (newCode > 122) {
      newCode = 97 + ((newCode - 122) - 1);
    }
    return String.fromCharCode(newCode);
  }

  return char;
}

function caesarCypher(string, shift) {
  if (checkInputs(string, shift)) {
    let newString = '';
    for (let i = 0; i < string.length; i++) {
      newString += shiftChar(string.charAt(i), shift);
    }
    return newString;
  }
  return 'Wrong input type. Required: string, number';
}

// acceptable characters:
// A-Z, a-z
// all other characters stay the same

module.exports = caesarCypher;
