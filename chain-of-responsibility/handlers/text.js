let Handler = require("../handler");
let emailHandler = require("./email");

let textHandler = new Handler("text", handleText, emailHandler);

function handleText(sms) {
  console.log("SMS sent to number", sms.number, "message: ", sms.message);
}

module.exports = textHandler;
