function makeBread(type) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      if (type == "garlic") resolve("Garlic Bread");
      else reject("sorry We only have Garlic Bread in menu");
    }, 500);
  });
}

makeBread("chilli")
  .then(function (bread) {
    console.log(bread);
  })
  .catch((error) => {
    console.log(error);
  });
console.log(makeBread);
console.log("makeBread Promis Called");
