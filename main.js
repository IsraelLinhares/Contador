let number = 0;
const p = document.getElementById("num");

function mais() {
  p.innerHTML = number++;
}
function menos() {
  p.innerHTML = --number;
}
function reset() {
  p.innerHTML = number = 0;
}
