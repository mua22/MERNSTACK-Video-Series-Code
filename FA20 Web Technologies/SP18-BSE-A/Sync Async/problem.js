console.log("My First line");
let c = makeCoffee();

function makeCoffee() {
  // lets assume this func take 500 ms to execute
  setTimeout(function () {
    console.log("Making Coffee");
    return "Capichino";
  }, 500);
}
console.log(c);
console.log("My Last line");
