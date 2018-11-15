let subscribers = {};

module.exports = {
  publish(event, data) {
    if (!subscribers[event]) return;

    subscribers[event].forEach(subscriberCallback => subscriberCallback(data));
  },
  subscribe(event, callback) {
    let index;

    if (!subscribers[event]) {
      subscribers[event] = [];
    }

    index = subscribers[event].push(callback) - 1;

    return {
      unsubscribe() {
        subscribers[event].splice(index, 1);
      }
    };
  }
};
