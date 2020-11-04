console.log("My First line");

let makeCoffee = new Promise((resolve, reject) => {
  let timeOut = 500;
  setTimeout(() => {
    if (timeOut < 500) {
      reject("Error in Making Coffee");
    } else resolve("Capichino");
  }, timeOut);
});

makeCoffee
  .then(function (c) {
    console.log(c);
  })
  .catch(function (err) {
    console.log(err);
  });

console.log("My Last line");
