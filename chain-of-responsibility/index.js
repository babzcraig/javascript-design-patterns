let call,
  sms,
  email,
  handler,
  Handler = require("./handler"),
  callHandler = require("./handlers/call");

call = {
  type: "call",
  number: "08095997279",
  ownNumber: "90089909090"
};

email = {
  type: "email",
  recipient: "babs@mail.co",
  message: "Hi Babs"
};

sms = {
  type: "text",
  number: "0809988990090",
  message: "Hey Bro"
};

fax = {
  type: "fax",
  number: "08099667789090",
  message: "This is not 1999"
};

handler = new Handler(null, null, callHandler);
handler.handleRequest(fax);
