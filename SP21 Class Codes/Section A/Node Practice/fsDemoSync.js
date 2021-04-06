var fs = require("fs");

let files = fs.readdirSync(".");
// code execution is stuck here untile files are read
console.log(files);
