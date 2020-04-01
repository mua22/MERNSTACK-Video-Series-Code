function makePizza(flavour) {
  return new Promise((resolve, reject) => {
    if (flavour == "Fajita") reject("Fajita is out of stock");
    else
      setTimeout(function() {
        console.log("Preparing Pizza");
        resolve(flavour + " Pizza");
      }, 1000);
  });
}

makePizza("Fajita1")
  .then(message => {
    console.log(message);
  })
  .catch(message => {
    console.log(message);
  });
//1 pending
//2 resolved
//3 rejected
