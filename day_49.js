// Regex Password Validation
function validate(password) {
  let myRegex = /^((?!.*[\s])(?!.*[\W])(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{6,})/
  return myRegex.test(password);
}
