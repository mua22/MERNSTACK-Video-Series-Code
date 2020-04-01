var name = "Usman";
let age = 60;
const salary = 100;
// const salary = 10; // you cannot do this
var name = "Usman1"; //var can be declared again
// let age = 61; // you cant do this
age = 61; // you can do this
function updateVariables(name, age) {
  name = "Noman";
  age = 100;
}
updateVariables(name, age);
console.log(name);
console.log(age);
