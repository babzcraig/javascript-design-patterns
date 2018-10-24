let CommunicationHandler = function(communicationType, handler, nextHandler) {
  this.communicationType = communicationType;
  this.handler = handler;
  this.nextHandler = nextHandler;
};

CommunicationHandler.prototype.handleRequest = function(communication) {
  if (communication.type !== this.communicationType) {
    this.nextHandler
      ? this.nextHandler.handleRequest(communication)
      : console.log(
          `Communication type ${communication.type} could not be handled`
        );
    return;
  }

  this.handler(communication);
};

module.exports = CommunicationHandler;
