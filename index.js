const choices = ["rock", "paper", "scissor"];
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");
const playerScoreDisplay = document.getElementById("playerScoreDisplay");
const computerScoreDisplay = document.getElementById("computerScoreDisplay");

let playerScore = 0;
let computerScore = 0;

function playGame(playerChoice) {
  const computerChoice = choices[Math.floor(Math.random() * 3)];
  result = "";

  if (playerChoice === computerChoice) {
    result = "Its A TIE!";
  } else {
    switch (playerChoice) {
      case "rock":
        result = computerChoice === "scissor" ? "you win" : "you lose";
        break;

      case "paper":
        result = computerChoice === "rock" ? "you win" : "you lose";
        break;

      case "scissor":
        result = computerChoice === "paper" ? "you win" : "you lose";
        break;
    }
  }
  //change the text content

  playerDisplay.textContent = `player: ${playerChoice}`;
  computerDisplay.textContent = `computer: ${computerChoice}`;
  resultDisplay.textContent = result;

  //reset  the green and red color

  resultDisplay.classList.remove("greentext", "redtext","black");

  //change  the text color of result

  switch (result) {
    case "you win":
      resultDisplay.classList.add("greentext");
      playerScore++; //increament the player score
      playerScoreDisplay.textContent = playerScore;
      break;
    case "you lose":
      resultDisplay.classList.add("redtext");
      computerScore++; //increament the computer score
      computerScoreDisplay.textContent = computerScore;
      break;

     case "Its A TIE!":
      resultDisplay.classList.add("black")
  }
}
