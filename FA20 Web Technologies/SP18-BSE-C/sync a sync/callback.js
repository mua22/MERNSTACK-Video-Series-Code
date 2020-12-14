console.log("Code starting");
let status = travelToIsb(reachedInIslamabad);

//this is my callback function
function reachedInIslamabad(status) {
  console.log(status);
}
function travelToIsb(callbackFunc) {
  setTimeout(function () {
    console.log("I am in  Islamabad");
    callbackFunc("reached");
  }, 5000);
}

console.log("Code Ending");
