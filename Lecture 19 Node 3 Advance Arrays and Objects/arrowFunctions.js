function test(name) {
  if (name == "Ali") return true;
  else return false; //this can also be writtes as name=="Ali" ? true: false;
}
const testa = name => (name == "Ali" ? true : false); //this is a function with an input name

console.clear();
console.log(testa("Ali1"));
console.log(6 == 6 ? "WOW" : "Hello");
console.log(5 < 6 && "This is SOme Test");
