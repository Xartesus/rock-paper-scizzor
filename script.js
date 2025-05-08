function playGame() {
  let humanScore = 0,
    computerScore = 0;

  function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3);

    if (randomNumber == 0) {
      return "rock";
    } else if (randomNumber == 1) {
      return "paper";
    } else {
      return "scissors";
    }
  }

  function getHumanChoice() {
    let choice = prompt(
      "Enter your choice: rock, paper, or scissors"
    ).toLowerCase();
    return choice;
  }

  function playRound(humanChoice, computerChoice) {
    if (
      (humanChoice === "rock" && computerChoice === "scissors") ||
      (humanChoice === "paper" && computerChoice === "rock") ||
      (humanChoice === "scissors" && computerChoice === "paper")
    ) {
      humanScore++;
      console.log("You Win!");
    } else if (
      (humanChoice === "rock" && computerChoice === "paper") ||
      (humanChoice === "paper" && computerChoice === "scissors") ||
      (humanChoice === "scissors" && computerChoice === "rock")
    ) {
      computerScore++;
      console.log("You Lose!");
    } else {
      console.log("It's a tie");
    }
  }

  for (let i = 0; i < 5; i++) {
    const humanChoice = getHumanChoice();
    const computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
  }

  if (humanScore > computerScore) {
    console.log("You Win This Game!");
  } else if (humanScore < computerScore) {
    console.log("You Lose This Game!");
  } else {
    console.log("It's a tie overall!");
  }
}
