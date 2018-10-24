const Colleague = function(id, mediator) {
  this.id = id;
  this.mediator = mediator;
};

Colleague.prototype.receiveMessage = function(message) {
  console.log("Module", this.id, "received message: ", message);
  return true;
};

Colleague.prototype.sendMessage = function(message, recipientId) {
  recipientId
    ? this.mediator.send(recipientId, message)
    : this.mediator.broadcast(message, this);
};

module.exports = {
  create: function(id, mediator) {
    var that = new Colleague(id, mediator);

    mediator.register(that);

    return that;
  }
};
