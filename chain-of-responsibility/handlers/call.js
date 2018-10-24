let Handler = require("../handler");
let textHandler = require("./text");

let callHandler = new Handler("call", handleCall, textHandler);

function handleCall(call) {
  console.log(
    "Call placed to number",
    call.number,
    "from number: ",
    call.ownNumber
  );
}

module.exports = callHandler;
