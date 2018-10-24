var Image = function(attributes) {
  this.width = attributes.width || 0;
  this.height = attributes.height || 0;
  this.name = attributes.name || "";
};

module.exports = Image;
