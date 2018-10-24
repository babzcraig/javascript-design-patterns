const mediaFactory = require("./mediaFactory");

const myVideo = mediaFactory.createMedia("Video", {
  length: 3.5,
  name: "My video"
});

const myImage = mediaFactory.createMedia("Image", {
  width: 100,
  height: 100,
  name: "My image"
});

console.log(myVideo);
console.log(myImage);
