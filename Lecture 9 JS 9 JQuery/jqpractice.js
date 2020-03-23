$(function() {
  //jq eill execute this function after page load
  // so do your bindings here
  $("#addButton").click(handleBtnClick);
  //   $("#todos li").click(removeMe);
  $("#todos").on("click", "li", removeMe);
});
function handleBtnClick() {
  var newTodo = $("#newTodo").val();
  if (!newTodo) {
    $("#newTodo").addClass("error");
    return;
  }
  $("#newTodo").removeClass("error");
  $("#newTodo").val("");
  $("#todos").append("<li>" + newTodo + "</li>");
  //   $("#todos li").click(removeMe);
}

function removeMe() {
  $(this).fadeOut();
  // .remove();
}
