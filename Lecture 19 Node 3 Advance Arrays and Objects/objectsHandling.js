console.clear();
const address = {
  title: "Liberty Market",
  location: "Lahore"
};
function printAddress(title, location) {
  console.log(title + " is located in " + location);
}
console.log(address);
const { title, location } = address;

printAddress(title, location);

console.log(title);
