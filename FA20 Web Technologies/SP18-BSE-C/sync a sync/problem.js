console.log("Code starting");
let status = travelToIsb();
function travelToIsb() {
  setTimeout(function () {
    console.log("I am in  Islamabad");
    return "reached";
  }, 1000);
}
console.log(status);
console.log("Code Ending");
