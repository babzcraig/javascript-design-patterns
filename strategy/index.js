const Strategy = require("./strategy");
const telValidator = require("./telValidator");
const emailValidator = require("./emailValidator");

const validator = new Strategy();

console.log(validator.selectValidator(telValidator).validate(12345678900));

console.log(
  validator.selectValidator(emailValidator).validate("john@appleseed.com")
);
