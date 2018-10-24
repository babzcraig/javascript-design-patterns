module.exports = {
  validate: function(value) {
    return value.toString().includes("@");
  }
};
