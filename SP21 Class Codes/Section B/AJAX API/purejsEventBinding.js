function sendAjaxRequest() {
  console.log("start Sending Ajax");
}

window.onload = function () {
  console.log("Doing Bindings");
  var btn = document.getElementById("ajaxBtn");
  btn.onclick = sendAjaxRequest;
};

console.log("start of js file");
