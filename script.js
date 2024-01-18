const playButton = document.getElementById("play");
const userChoice = document.getElementById("userChoice");
const displayUserChoice = document.getElementById("displayUserChoice");
const displayComputerChoice = document.getElementById("displayComputerChoice");
const result = document.getElementById("result");

const choices = ["rock", "paper", "scissors"];

playButton.addEventListener("click", () => {
  // Get the user's choice
  const userPick = userChoice.value;

  // Generate the computer's choice randomly
  const computerPick = choices[Math.floor(Math.random() * choices.length)];

  // Display both choices
  displayUserChoice.textContent = userPick;
  displayComputerChoice.textContent = computerPick;

  // Determine the winner
  const winner = determineWinner(userPick, computerPick);

  // Display the result
  result.textContent = winner;
});

function determineWinner(choice1, choice2) {
  if (choice1 === choice2) {
    return "It's a tie!";
  } else if (
    (choice1 === "rock" && choice2 === "scissors") ||
    (choice1 === "paper" && choice2 === "rock") ||
    (choice1 === "scissors" && choice2 === "paper")
  ) {s
    return "You win!";
  } else {
    return "Computer wins!";
  }
}
