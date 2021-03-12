const diceOne = document.querySelector(".img1");
const diceTwo = document.querySelector(".img2");
const result = document.querySelector("h1");

function randomNum() {
  return Math.floor(Math.random() * 6) + 1;
}

let diceRollOne = randomNum(); 
let diceRollTwo = randomNum();

diceOne.src = `images/dice${diceRollOne}.png`;
diceTwo.src = `images/dice${diceRollTwo}.png`;

if (diceRollOne > diceRollTwo){
  result.textContent = "Player 1 Wins!";
} else if (diceRollTwo > diceRollOne) {
  result.textContent = "Player 2 Wins!";
} else {
  result.textContent = "Draw";
}