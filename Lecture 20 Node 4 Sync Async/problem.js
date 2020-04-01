function makePizza(flavour) {
  setTimeout(function() {
    console.log("Preparing Pizza");
    return "prepared " + flavour + " Pizza";
  }, 1000);
  return "Order Received " + flavour + " Pizza";
}

console.log(makePizza("Tikka"));
