let items = ["Rock", "Paper", "Scissors"];
let getComputerChoice = (items) =>
  items[Math.floor(Math.random() * items.length)];

// input: playerSelection, computerSelection
// returns: 0 for tie, -1 for lose, 1 for win
function playRound(playerSelection, computerSelection) {
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

function playGame() {
  let userScore = 0;
  let computerScore = 0;
  let tie = 0;

  // call playRound function to play 5 rounds
  // increase user or computer scores based on wins, losses, or ties
  for (let i = 0; i < 5; i++) {
    let playerSelection = prompt("Rock, Paper, Scissors?");
    if (playerSelection == undefined) {
      return;
    }
    playerSelection =
      playerSelection.charAt(0).toUpperCase() +
      playerSelection.slice(1).toLowerCase();
    const computerSelection = getComputerChoice(items);

    const round = playRound(playerSelection, computerSelection);
    let message = "";
    if (round == 0) {
      tie++;
      message = `You Tied!`;
    } else if (round == 1) {
      userScore++;
      message = `You Win! ${playerSelection} beats ${computerSelection}.`;
    } else if (round == -1) {
      computerScore++;
      message = `You Lose! ${computerSelection} beats ${playerSelection}.`;
    } else {
      i--; // restart round if user input is invalid
      message = `Invalid Input. Try again`;
    }

    alert(message + ` ${userScore}-${tie}-${computerScore}`);
  }

  // after 5 rounds, declare a winner, display score
  if (userScore > computerScore) {
    alert(`Game end: You won! ${userScore} - ${computerScore}`);
  } else if (userScore == computerScore) {
    alert(`Game end: You tied! ${userScore} - ${computerScore}`);
  } else {
    alert(`Game end: You lost! ${userScore} - ${computerScore}`);
  }
}

playGame();
