const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;

function isPasswordValid(password) {
  return Boolean(password.value.match(passwordRegex));
}

module.exports = isPasswordValid;
