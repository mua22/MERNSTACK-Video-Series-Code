var func = function printString(str) {
  console.log(str);
};
var funcAlert = function alertString(str) {
  alert(str);
};
// console.log(typeof func);
// console.log(func);
// func("My test");

function testMyFunc(f) {
  console.log(f);
  f("F is called from inside testMyFunc");
}

testMyFunc(func);
