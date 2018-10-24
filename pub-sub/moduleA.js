const pubSub = require("./pub-sub");

let subscription;

subscription = pubSub.subscribe("atopic", function(data) {
  console.log("atopic was published with data: ", data);
  subscription.unsubscribe();
});
