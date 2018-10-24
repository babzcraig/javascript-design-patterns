var Mediator = function() {
  this.colleagues = [];
};

Mediator.prototype.register = function(colleague) {
  this.colleagues.push(colleague);
};

Mediator.prototype.send = function(recipientId, message) {
  this.colleagues.some(function(colleague) {
    if (colleague.id === recipientId) {
      return colleague.receiveMessage(message);
    }
  });
};

Mediator.prototype.broadcast = function(message, sender) {
  this.colleagues.forEach(function(colleague) {
    if (colleague.id !== sender.id) {
      colleague.receiveMessage(message);
    }
  });
};

module.exports = Mediator;
