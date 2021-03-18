function sendAjaxRequest() {
  console.log("start Sending Ajax");
  $.get("/readme.txt", ajaxCmpleted);
  console.log("Ajax Request Sent");
}

function ajaxCmpleted(result) {
  console.log(result);
  $("#result").html(result);
}
$(function () {
  console.log("Binding");
  $("#ajaxBtn").click(sendAjaxRequest);
});

console.log("start of js file");
