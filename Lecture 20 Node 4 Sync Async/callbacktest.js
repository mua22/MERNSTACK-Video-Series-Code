console.clear();
function makePizza(flavour, callback) {
  console.log("Order Received");
  console.log("Preparing Pizza");
  setTimeout(function() {
    callback(flavour + " Pizza");
  }, 1000);
}

function handlePizza(pizza) {
  console.log("Eating " + pizza);
}
makePizza("Tikka", handlePizza);
console.log("Pizza Ordered");
