console.log("My First line");

let makeCoffee = () =>
  new Promise((resolve, reject) => {
    let timeOut = 500;
    setTimeout(() => {
      if (timeOut < 500) {
        reject("Error in Making Coffee");
      } else resolve("Capichino");
    }, timeOut);
  });

async function orderCoffee() {
  let c = await makeCoffee();
  console.log(c);
  console.log("My Last line");
}
orderCoffee();
