var subscribers = {};

module.exports = {
  publish: function(topic, data) {
    // If the topic has not been subscribed to we return.
    if (!subscribers[topic]) return;

    subscribers[topic].forEach(function(subscriber) {
      subscriber(data);
    });
  },
  subscribe: function(topic, callback) {
    let index;
    // if the topic being registered doesnt exist we initialize it as an array on the subscribers object
    if (!subscribers[topic]) {
      subscribers[topic] = [];
    }

    // we simply use the return value of the push() method which is the length of the array and remove one to get the index
    index = subscribers[topic].push(callback) - 1;

    return {
      unsubscribe: function() {
        subscribers[topic].splice(index, 1);
      }
    };
  }
};
