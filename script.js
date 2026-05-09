function getComputerChoice() {
  const randomNumber = Math.random();
  if (randomNumber <= 1 / 3) {
    return "rock";
  } else if (randomNumber <= 2 / 3) {
    return "paper";
  } else {
    return "scissors";
  }
}

function getHumanChoice() {
  const userChoice = prompt("What's Your Choice (rock, paper, scissors) ?");
  return userChoice.toLocaleLowerCase();
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
  humanChoice = getHumanChoice();
  computerChoice = getComputerChoice();

  if (computerChoice === "rock" && humanChoice === "rock") {
    console.log("It's a TIE : Try again");
  } else if (computerChoice === "rock" && humanChoice === "paper") {
    console.log("You Win! : Paper beats Rock");
    humanChoice++;
  } else if (computerChoice === "rock" && humanChoice === "scissors") {
    console.log("You LOSE! : Rock beats Scissors");
    computerScore++;
  }
}

playRound();
