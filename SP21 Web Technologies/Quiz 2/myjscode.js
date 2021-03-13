$(function () {
  $("#myForm").submit(handleFormSubmit);
});

function handleFormSubmit(e) {
  alert("Form is being submitted");

  e.preventDefault();
}
