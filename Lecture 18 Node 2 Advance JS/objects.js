let x = 5;
let y = 15;
let point = {
  x: 10,
  y: 25
};
console.log(point);
point.x = 11;
point.z = 90;
point["t"] = "some value";
console.log(point);
console.log(point["x"]);
