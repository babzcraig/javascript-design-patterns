const Video = require("./video");
const Image = require("./image");

var media = {
  Video,
  Image
};

module.exports = {
  createMedia: function(type, attributes) {
    // stores the type of constructor we require in the MediaType variable
    const MediaType = media[type];
    return new MediaType(attributes);
  }
};
