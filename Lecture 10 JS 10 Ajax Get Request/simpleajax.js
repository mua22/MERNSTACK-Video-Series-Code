$(function() {
  $("#load").click(function() {
    $.get("students.txt", function(response) {
      $("#result").empty();
      $("#result").append(response);
    });
  });
});
