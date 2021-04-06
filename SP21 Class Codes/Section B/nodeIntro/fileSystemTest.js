var fs = require("fs");

var files = fs.readdir("./", fsCallBack);
console.log(files);
function fsCallBack(err, result) {
  console.log(result);
}
console.log("Code End");
