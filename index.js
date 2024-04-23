let items = ["Rock", "Paper", "Scissors"];
let playerSelection = " ";
let computerSelection = " ";
let userScore = 0;
let computerScore = 0;
let tie = 0;

const rockButton = document.querySelector("#rockbutton");
const paperButton = document.querySelector("#paperbutton");
const scissorsButton = document.querySelector("#scissorsbutton");

rockButton.addEventListener("click", () => {
  playerSelection = "Rock";
  playRound();
});
paperButton.addEventListener("click", () => {
  playerSelection = "Paper";
  playRound();
});
scissorsButton.addEventListener("click", () => {
  playerSelection = "Scissors";
  playRound();
});

let getComputerChoice = (items) =>
  items[Math.floor(Math.random() * items.length)];

// input: playerSelection, computerSelection
// returns: 0 for tie, -1 for lose, 1 for win
function computeRoundResult(playerSelection, computerSelection) {
  if (
    (playerSelection === "Rock" && computerSelection === "Paper") ||
    (playerSelection === "Paper" && computerSelection === "Scissors") ||
    (playerSelection === "Scissors" && computerSelection === "Rock")
  ) {
    return -1;
  } else if (
    (playerSelection === "Rock" && computerSelection === "Scissors") ||
    (playerSelection === "Paper" && computerSelection === "Rock") ||
    (playerSelection === "Scissors" && computerSelection === "Paper")
  ) {
    return 1;
  } else if (
    (playerSelection === "Rock" && computerSelection === "Rock") ||
    (playerSelection === "Paper" && computerSelection === "Paper") ||
    (playerSelection === "Scissors" && computerSelection === "Scissors")
  ) {
    return 0;
  }
}

function playRound() {
  computerSelection = getComputerChoice(items);

  // increase user or computer scores based on wins, losses, or ties
  const round = computeRoundResult(playerSelection, computerSelection);
  let message = " ";
  if (round == 0) {
    tie++;
    message = `You Tied!`;
  } else if (round == 1) {
    userScore++;
    message = `You Win! ${playerSelection} beats ${computerSelection}.`;
  } else if (round == -1) {
    computerScore++;
    message = `You Lose! ${computerSelection} beats ${playerSelection}.`;
  }

  const score = document.querySelector("#score");
  score.innerHTML = `${message} <br><br> ${userScore}-${tie}-${computerScore}`;
  
  // after 5 rounds, declare a winner, display score
  if (userScore === 5) {
    score.textContent = `Game end: You won! ${userScore} - ${computerScore}`;
    userScore = 0;
    computerScore = 0;
    tie = 0;
  } else if (computerScore === 5) {
    score.textContent = `Game end: You lost! ${userScore} - ${computerScore}`;
    userScore = 0;
    computerScore = 0;
    tie = 0;
  } 
}


