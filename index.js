let choices = ["rock", "paper", "scissors"];

let humanScore = 0;
let computerScore = 0;

const getComputerChoice = () => {
  let randomChoice = Math.floor(Math.random() * choices.length);
  return choices[randomChoice];
};

const getHumanChoice = () => {
  let choice = prompt("Please choose rock, paper or scissors").toLowerCase();

  if (choices.includes(choice)) {
    return choice;
  } else {
    alert("Invalid choice. Please try again.");
    return getHumanChoice();
  }
};

const playRound = (humanChoice, computerChoice) => {
  if (
    humanChoice === "rock" && computerChoice === "scissors" ||
    humanChoice === "paper" && computerChoice === "rock" ||
    humanChoice === "scissors" && computerChoice === "paper"
  ) {
    humanScore++
    return `You win! ${humanChoice} beats ${computerChoice}.`;
  } else if (humanChoice === computerChoice) {
    return `It's a tie! You both chose ${humanChoice}.`
  } else {
    computerScore++
    return `You lose! ${computerChoice} beats ${humanChoice}.`;
  }
};

const playGame = () => {
  for (let i = 0; i < 5; i++) {
    const humanChoice = getHumanChoice();
    const computerChoice = getComputerChoice();
    const results = playRound(humanChoice, computerChoice);

    alert(results)
    console.log(results)
  }

  // Final score message
  if (humanScore > computerScore) {
    alert(`🏆 You win the game! Final score: Human ${humanScore} - Computer ${computerScore}`);
  } else if (humanScore < computerScore) {
    alert(`😵‍💫 You loose the game. Final score: Human ${humanScore} - Computer ${computerScore}`);
  } else {
    alert(`🤝 It's a tie! Final score: Human ${humanScore} - Computer ${computerScore}`)
  }
};

// Start the game
playGame();