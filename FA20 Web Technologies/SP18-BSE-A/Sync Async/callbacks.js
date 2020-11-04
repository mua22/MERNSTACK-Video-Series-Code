console.log("My First line");
makeCoffee(coffeeReceived);

function makeCoffee(callback) {
  // lets assume this func take 500 ms to execute
  setTimeout(function () {
    console.log("Making Coffee");
    callback("Capichino");
  }, 500);
}

//this is a callback function
function coffeeReceived(c) {
  console.log(c);
}

console.log("My Last line");
