function btnClicked() {
  console.log("You just clicked a button");
  var result = document.getElementById("result");
  result.innerHTML = "WOW You just clicked the button";
}

function bindMyButton() {
  var myBtn = document.getElementById("myBtn");
  console.log(myBtn);
  myBtn.onclick = btnClicked;
}

window.onload = bindMyButton;
// setTimeout(bindMyButton, 50);
