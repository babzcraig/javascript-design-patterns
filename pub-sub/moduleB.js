const pubSub = require("./pub-sub");

module.exports = {
  publishEvent: function() {
    const data = {
      something: "some data"
    };

    pubSub.publish("atopic", data);
  }
};
