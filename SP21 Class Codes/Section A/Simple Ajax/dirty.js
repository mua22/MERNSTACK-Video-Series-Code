$(function () {
  var btn = document.getElementById("myBtn");
  btn.onclick = btnClicked;
});
function btnClicked() {
  console.log("Ajax Request Started");
  $.get("readme.txt", ajaxReceived);
  console.log("Ajax Request Sent");
}

function ajaxReceived(result) {
  console.log("Ajax Response Received");
  console.log(result);
  $("#result").html(result);
  $("#result").removeClass("red");
  $("#result").addClass("black");
}
console.log("Hello from ajax demo file");
