travelToIsb();

async function travelToIsb() {
  console.log("Code starting");

  try {
    let status = await promiseForIsbTravel("train");
    console.log(status);
  } catch (err) {
    console.log(err);
  }

  console.log("Code Ending");
}

function promiseForIsbTravel(method = "train") {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log("I am in  Islamabad");
      if (method == "train") reject("Train is cancelled");
      else resolve("reached");
    }, 5000);
  });
}
