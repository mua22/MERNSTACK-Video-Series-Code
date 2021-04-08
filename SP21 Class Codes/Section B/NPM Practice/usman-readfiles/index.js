// var lodash = require("lodash");
// var a = [1, 2, 3];
// var result = lodash.difference(a, [2, 3]);
// console.log(result);

function sayHi() {
  console.log("Hello From Usman patched");
}
function sayGreetings() {
  console.log("Greetings From Usman");
}
module.exports.sayHi = sayHi;
module.exports.sayGreetings = sayGreetings;
