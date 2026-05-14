document.addEventListener("DOMContentLoaded", playGame);
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
	return userChoice.trim().toLocaleLowerCase();
}

let roundCount = 0;
let humanScore = 0;
let computerScore = 0;

function playRound() {
	let humanChoice = getHumanChoice();
	let computerChoice = getComputerChoice();

	if (computerChoice === "rock" && humanChoice === "rock") {
		isATie();
		playGame();
	} else if (computerChoice === "rock" && humanChoice === "paper") {
		youWin(computerChoice, humanChoice);
		playGame();
	} else if (computerChoice === "rock" && humanChoice === "scissors") {
		youLose(computerChoice, humanChoice);
		playGame();
	} else if (computerChoice === "paper" && humanChoice === "rock") {
		youLose(computerChoice, humanChoice);
		playGame();
	} else if (computerChoice === "paper" && humanChoice === "paper") {
		isATie();
		playGame();
	} else if (computerChoice === "paper" && humanChoice === "scissors") {
		youWin(computerChoice, humanChoice);
		playGame();
	} else if (computerChoice === "scissors" && humanChoice === "rock") {
		youWin(computerChoice, humanChoice);
		playGame();
	} else if (computerChoice === "scissors" && humanChoice === "paper") {
		youLose(computerChoice, humanChoice);
		playGame();
	} else if (computerChoice === "scissors" && humanChoice === "scissors") {
		isATie();
		playGame();
	}
}

function playGame() {
	if (roundCount < 5) {
		playRound();
	} else {
		if (humanScore > computerScore) {
			alert("YOU WIN!")
		}else if(computerScore > humanScore){
			alert("YOU LOSE!")
		}else if(humanScore === computerScore){
		alert("DRAW!")}
	}
}

function youWin(cpu, p1) {
	console.log(`You Win! : ${p1} beats ${cpu}`);
	humanScore++;
	roundCount++;
}
function youLose(cpu, p1) {
	console.log(`You LOSE! : ${cpu} beats ${p1}`);
	computerScore++;
	roundCount++;
}
function isATie() {
	console.log("It's a TIE : Try again");
	roundCount++;
}
