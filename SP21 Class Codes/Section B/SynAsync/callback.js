function makeBread(callback) {
  console.log("Making Bread");
  setTimeout(function () {
    console.log("Bread Made");
    callback("Garlic Bread");
  }, 5000);
}
makeBread(receiveBread);
function receiveBread(bread) {
  console.log(bread);
}
console.log("makeBread Func Called");
