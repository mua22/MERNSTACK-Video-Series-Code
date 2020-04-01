console.clear();
var studendts = ["Usman", "Ali", "Noman"];
// let searchedStudents = studendts.find(findAli);
// studendts.sort();
studendts.splice(1, 1, ...["Zahid", "Anwar"]);
studendts.sort(customSort);
console.log(studendts);

let rates = [2, 5, 10];
let newRates = rates.map(function(r) {
  return r * 2;
});
console.log(newRates);
function customSort(a, b) {
  if (b > a) return -1;
  else return 1;
}
function findAli(std) {
  if (std == "ali") return true;
  else return false;
}
