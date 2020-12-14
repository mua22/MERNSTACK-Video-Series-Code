console.log("Code starting");

promiseForIsbTravel("train")
  .then((s) => {
    console.log(s);
  })
  .catch((error) => {
    console.log(error);
  });

// function travelToIsb(callbackFunc) {
//   setTimeout(function () {
//     console.log("I am in  Islamabad");
//     callbackFunc("reached");
//   }, 5000);
// }

console.log("Code Ending");

function promiseForIsbTravel(method = "train") {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log("I am in  Islamabad");
      if (method == "train") reject("Train is cancelled");
      else resolve("reached");
    }, 5000);
  });
}
