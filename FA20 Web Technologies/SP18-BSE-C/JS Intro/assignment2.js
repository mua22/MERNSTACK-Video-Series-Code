function bindAddButton() {
  var addBtn = document.getElementById("add");
  console.log(addBtn);
  addBtn.onclick = handleAddBtnClick;
}

//bindAddButton will be loaded exactly at the moment when html is ready
window.onload = bindAddButton;

// this will call bindAddButton after 500 mili seconds
//this is a bad way as we have no gurantee when will the page will be loaded
// setTimeout(bindAddButton, 500);

function handleAddBtnClick() {
  //   alert("Add button is clicked");
  var carb = document.getElementById("carb");
  var carbValue = carb.value;
  console.log("Carbohydrates value " + carbValue);
}
