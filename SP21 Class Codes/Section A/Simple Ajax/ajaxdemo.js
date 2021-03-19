$(function () {
  $("#myBtn").click(btnClicked);
});
function btnClicked() {
  $.get("readme.txt", ajaxReceived);
}

function ajaxReceived(result) {
  $("#result").html(result);
}
console.log("Hello from ajax demo file");
