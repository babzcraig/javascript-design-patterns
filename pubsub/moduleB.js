const pubSub = require("./pubsub");
let subscription;

subscription = pubSub.subscribe("anEvent", data => {
  console.log(`"anEvent", was published with this data: "${data.msg}"`);
  subscription.unsubscribe();
});
