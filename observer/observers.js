var Observers = function() {
  this.observers = [];
};

Observers.prototype.add = function(observer) {
  this.observers.push(observer);
};

Observers.prototype.remove = function(observerToRemove) {
  this.observers = this.observers.filter(function(observer) {
    return observer !== observerToRemove;
  });
};

Observers.prototype.get = function() {
  return this.observers;
};

module.exports = Observers;
