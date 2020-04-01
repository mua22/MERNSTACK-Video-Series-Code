const fs = require("fs");
console.log("Reading File");
// let data = fs.readFileSync("mytxtfile.txt", "utf8");
let data = fs.readFile("mytxtfile.txt", "utf8", (err, data) => {
  console.log(data);
});

console.log("Read FIle");
