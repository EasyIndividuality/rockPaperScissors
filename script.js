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

let humanScore = 0;
let computerScore = 0;

function playRound() {
	let humanChoice = getHumanChoice();
	let computerChoice = getComputerChoice();

	if (computerChoice === "rock" && humanChoice === "rock") {
		isATie();
	} else if (computerChoice === "rock" && humanChoice === "paper") {
		youWin(computerChoice, humanChoice);
	} else if (computerChoice === "rock" && humanChoice === "scissors") {
		youLose(computerChoice, humanChoice);
	} else if (computerChoice === "paper" && humanChoice === "rock") {
		youLose(computerChoice, humanChoice);
	} else if (computerChoice === "paper" && humanChoice === "paper") {
		isATie();
	} else if (computerChoice === "paper" && humanChoice === "scissors") {
		youWin(computerChoice, humanChoice);
	} else if (computerChoice === "scissors" && humanChoice === "rock") {
		youWin(computerChoice, humanChoice);
	} else if (computerChoice === "scissors" && humanChoice === "paper") {
		youLose(computerChoice, humanChoice);
	} else if (computerChoice === "scissors" && humanChoice === "scissors") {
		isATie();
	}
}

playRound();

function youWin(cpu, p1) {
	console.log(`You Win! : ${p1} beats ${cpu}`);
	humanScore++;
}
function youLose(cpu, p1) {
	console.log(`You LOSE! : ${cpu} beats ${p1}`);
	computerScore++;
}
function isATie() {
	console.log("It's a TIE : Try again");
}
