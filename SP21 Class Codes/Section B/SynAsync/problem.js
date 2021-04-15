function makeBread() {
  console.log("Making Bread");
  setTimeout(function () {
    console.log("Bread Made");
    return "Garlic Bread";
  }, 500);
}

let bread = makeBread();
console.log(bread);
