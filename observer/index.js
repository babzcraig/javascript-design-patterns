const Subject = require("./subject");
const Observer = require("./observer");

let subject, observer, otherObserver, data, moreData;

subject = new Subject();
observer = new Observer("Observer1");
otherObserver = new Observer("Observer2");

data = {
  prop: "something"
};

moreData = {
  prop: "something else"
};

subject.observe(observer);
subject.observe(otherObserver);

subject.add(data);
subject.add(moreData);

subject.unObserve(observer);

subject.remove(data);
