$(function () {
  $("#myBtn").click(function () {
    $.get("readme.txt", function (result) {
      $("#result").html(result);
    });
  });
});
