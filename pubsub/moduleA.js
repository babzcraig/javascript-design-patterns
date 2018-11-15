const pubSub = require("./pubsub");

module.exports = {
  publishEvent() {
    const data = {
      msg: "TOP SECRET DATA"
    };

    pubSub.publish("anEvent", data);
  }
};
