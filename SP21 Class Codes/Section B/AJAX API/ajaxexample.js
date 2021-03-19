function sendAjaxRequest() {
  console.log("start Sending Ajax");
  // $.get("https://usman-recipes.herokuapp.com/api/products", ajaxCmpleted);
  $.ajax({
    method: "GET",
    url: "https://usman-recipes.herokuapp.com/api/products",
    success: ajaxCmpleted,
  });
  console.log("Ajax Request Sent");
}

function ajaxCmpleted(result) {
  console.log("Response Received");
  console.log(result);
  $("#result").html("");
  for (var i = 0; i < result.length; i++) {
    var product = result[i];
    var productStr =
      "<div><h1>" +
      product.name +
      "</h1><p>" +
      product.description +
      "</p></div>";
    $("#result").append(productStr);
  }
}
$(function () {
  console.log("Binding");
  sendAjaxRequest();
  $("#btnTest").click(sendAjaxRequest);
  console.log("Binding Done");
});

console.log("start of js file");
