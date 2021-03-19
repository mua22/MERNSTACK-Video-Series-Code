function doBindings() {
  var btn = document.getElementById("myBtn");
  btn.onclick = btnClicked;
}
window.onload = doBindings;
function btnClicked() {
  console.log("Button Clicked");
}
console.log("Hello from ajax demo file");
