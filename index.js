let choices = ["rock", "paper", "scissors"];

let humanScore = 0;
let computerScore = 0;

const getComputerChoice = () => {
  let randomChoice = Math.floor(Math.random() * choices.length);
  return choices[randomChoice];
};

const getHumanChoice = () => {
  let choice = prompt("Please choose rock, paper or scissors").toLowerCase().trim();

  if (choices.includes(choice)) {
    return choice;
  } else {
    alert("Invalid choice. Please try again.");
    return getHumanChoice();
  }
};

const playRound = () => {
  
}