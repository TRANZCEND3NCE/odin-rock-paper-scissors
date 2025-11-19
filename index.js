let choices = ["rock", "paper", "scissors"];

let humanScore = 0;
let computerScore = 0;
let roundsPlayed = 0;
const maxRounds = 5;

const humanScoreResult = document.getElementById("humanScore");
const computerScoreResult = document.getElementById("computerScore");
const result = document.getElementById("result");
const restartBtn = document.getElementById("restart");

const getComputerChoice = () => {
  let randomChoice = Math.floor(Math.random() * choices.length);
  return choices[randomChoice];
};

const playRound = (humanChoice, computerChoice) => {
  if (
    humanChoice === "rock" && computerChoice === "scissors" ||
    humanChoice === "paper" && computerChoice === "rock" ||
    humanChoice === "scissors" && computerChoice === "paper"
  ) {
    humanScore++
    return `🏆 You win! ${humanChoice} beats ${computerChoice}.`;
  } else if (humanChoice === computerChoice) {
    return `🤝 It's a tie! You both chose ${humanChoice}.`
  } else {
    computerScore++
    return `😵‍💫 You lose! ${computerChoice} beats ${humanChoice}.`;
  }
};

const gameMessage = () => {
  if (humanScore > computerScore) {
    return `🏆 You win the game! Final score: Human ${humanScore} | Computer ${computerScore}`;
  } else if (humanScore < computerScore) {
    return `😵‍💫 You lose the game. Final score: Human ${humanScore} | Computer ${computerScore}`;
  } else {
    return `🤝 It's a tie! Final score: Human ${humanScore} | Computer ${computerScore}`
  }
};

// Button logic for selecting rock, paper, or scissors
document.querySelectorAll("button").forEach(button => {
  button.addEventListener("click", () => {
    if (roundsPlayed >= maxRounds) return;

    const humanChoice = button.dataset.choice;
    const computerChoice = getComputerChoice();

    const roundResult = playRound(humanChoice, computerChoice);
    roundsPlayed++;

    // Update Score Result
    humanScoreResult.textContent = humanScore;
    computerScoreResult.textContent = computerScore;

    //Show Result
    result.textContent = roundResult;

    if (roundsPlayed === maxRounds) {
      result.textContent = gameMessage();


      document.querySelector(".buttons").style.display = "none";
      restartBtn.style.display = "inline-block";
    }
  });
});

// Restart game
restartBtn.addEventListener("click", () => {
  humanScore = 0;
  computerScore = 0;
  roundsPlayed = 0;

  humanScoreResult.textContent = humanScore;
  computerScoreResult.textContent = computerScore;
  result.textContent = "Your Move 😁";

  document.querySelector(".buttons").style.display = "flex";
  restartBtn.style.display = "none";
});