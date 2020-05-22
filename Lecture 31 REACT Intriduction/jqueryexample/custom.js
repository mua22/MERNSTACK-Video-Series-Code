let persons = ["Zahid", "Muneed", "Ali"];
function testSort() {
  persons.sort();
  populatePersons();
}
function populatePersons() {
  $("#persons").html("");
  for (let i = 0; i < persons.length; i++) {
    $("#persons").append("<li>" + persons[i] + "</li>");
  }
}
$(function () {
  populatePersons();
});
