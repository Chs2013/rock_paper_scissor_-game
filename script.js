const playButton = document.getElementById("play");
const playAgainButton = document.getElementById("playAgain");
const choicesContainer = document.querySelector(".choices");
const choiceButtons = document.querySelectorAll(".choice");
const displayUserChoice = document.getElementById("displayUserChoice");
const displayComputerChoice = document.getElementById("displayComputerChoice");
const result = document.getElementById("result");

playButton.addEventListener("click", () => {
  // Hide play button and show choices
  playButton.style.display = "none";
  choicesContainer.style.display = "block";
  playAgainButton.style.display = "none"; // Hide play again button
  result.textContent = ""; // Clear previous result

  // Enable all choice buttons
  choiceButtons.forEach(button => button.disabled = false);
});

choiceButtons.forEach((button) => {
  button.addEventListener("click", () => {
    // Get the user's choice
    const userPick = button.getAttribute("data-value");

    // Disable other choice buttons
    choiceButtons.forEach(b => {
      if (b !== button) {
        b.disabled = true;
      }
    });

    // Display the chosen button
    displayUserChoice.innerHTML = "";
    const userChoiceButton = document.createElement("button");
    userChoiceButton.textContent = userPick;
    displayUserChoice.appendChild(userChoiceButton);

    // Generate the computer's choice randomly
    const choices = ["rock", "paper", "scissors"];
    const computerPick = choices[Math.floor(Math.random() * choices.length)];

    // Display both choices
    displayComputerChoice.textContent = computerPick;

    // Determine the winner
    const winner = determineWinner(userPick, computerPick);

    // Display the result
    result.textContent = winner;

    // Show play again button
    playAgainButton.style.display = "block";
  });
});

playAgainButton.addEventListener("click", () => {
  // Reset the game
  playButton.style.display = "block";
  choicesContainer.style.display = "none";
  displayUserChoice.innerHTML = "";
  displayComputerChoice.textContent = "";
  playAgainButton.style.display = "none";
  result.textContent = "";

  // Enable all choice buttons
  choiceButtons.forEach(button => button.disabled = false);
});

function determineWinner(choice1, choice2) {
 if (choice1 === choice2) {
  return "It's a tie!";
 } else if (
  (choice1 === "rock" && choice2 === "scissors") ||
  (choice1 === "paper" && choice2 === "rock") ||
  (choice1 === "scissors" && choice2 === "paper")
 ) {
  return "You win!";
 } else {
  return "Computer wins!";
 }
}
