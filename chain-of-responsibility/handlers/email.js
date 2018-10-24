let Handler = require("../handler");

let emailHandler = new Handler("email", handleEmail, null);

function handleEmail(email) {
  console.log("Email sent to", email.recipient, "message: ", email.message);
}

module.exports = emailHandler;
