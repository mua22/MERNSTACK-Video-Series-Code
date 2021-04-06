var fs = require("fs");
let files = fs.readdir("./", callback);
// code execution will not block here
function callback(error, result) {
  console.log(result);
}
console.log("Code Ended");
