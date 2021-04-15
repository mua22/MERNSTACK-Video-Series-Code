function makeBread(type) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      if (type == "garlic") resolve("Garlic Bread");
      else reject("sorry We only have Garlic Bread in menu");
    }, 5000);
  });
}
async function orderBread() {
  try {
    let bread = await makeBread("red chili");
    console.log(bread);
  } catch (err) {
    console.log(err);
  }
  console.log("makeBread Promis Called");
}

orderBread();
console.log("Code Ended");
