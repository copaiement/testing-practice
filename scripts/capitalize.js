function capitalize(string) {
  const regex = /[A-Z]/gi;
  if (regex.test(string.charAt(0))) {
    return string.charAt(0).toUpperCase().concat(string.slice(1).toLowerCase());
  }
  return string;
}

module.exports = capitalize;
