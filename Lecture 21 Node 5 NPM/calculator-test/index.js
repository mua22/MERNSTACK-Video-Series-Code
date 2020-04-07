const { add, subtract } = require("usman-calculator");
const _ = require("underscore");
const fs = require("fs");
const os = require("os"); //this is how we call built in modules
console.log(os.freemem());
console.log(add(10, 5));
const res = _.contains([1, 5, 7, 9], 9);
console.log(res);
