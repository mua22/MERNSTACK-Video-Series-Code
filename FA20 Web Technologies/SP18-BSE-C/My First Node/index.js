console.log("This will be printed in command prompt");

function square(x) {
  return x * x;
}
let marks = [56, 32, 89, 2, 6];
// let filteredMarks = marks.filter(testFilter);
let filteredMarks = marks.filter((a) => a > 10);
console.log(filteredMarks);
function testFilter(a) {
  return a < 10;
}
console.log(marks);
let suareArrow = (x, jh) => {
  return x * x;
};

var y = suareArrow(45);
console.log(y);
