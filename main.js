var num1 = Math.ceil(Math.random() * 6);
document.querySelector(".img1").src = "./images/dice" + num1 + ".png";
var num2 = Math.ceil(Math.random() * 6);
document.querySelector(".img2").src = "./images/dice" + num2 + ".png";

if (num1 > num2) {
  document.querySelector("h1").innerHTML = "Player 1 won";
} else if (num1 == num2) {
  document.querySelector("h1").innerHTML = "Draw";
} else {
  document.querySelector("h1").innerHTML = "Player 2 won";
}
