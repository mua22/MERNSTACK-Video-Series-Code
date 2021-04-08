const fs = require("fs");
let files = fs.readdir(".", callback);
function callback(error, result) {
  console.log(result);
}
console.log(files);
console.log("code ended");
