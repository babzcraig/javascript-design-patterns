const Observer = function(name) {
  this.name = name;
};

Observer.prototype.notify = function(event, data) {
  console.log(
    `The event was: "${event}", and the data was: "${data.prop}" and I am: ${
      this.name
    }`
  );
};

module.exports = Observer;
