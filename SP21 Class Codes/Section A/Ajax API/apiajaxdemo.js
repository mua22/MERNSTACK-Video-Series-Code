$(function () {
  //   $("#myBtn").click(sendAjax);
  sendAjax();
});
function sendAjax() {
  $("#result").html("Loading ...");
  $.get("https://usman-recipes.herokuapp.com/api/recipes", ajaxReceived);
}
function ajaxReceived(result) {
  $("#result").html("");
  for (var i = 0; i < result.length; i++) {
    var rec = result[i];
    $("#result").append("<h1>" + rec.title + "</h1><p>" + rec.body + "</p>");
  }
  console.log(result);
}
