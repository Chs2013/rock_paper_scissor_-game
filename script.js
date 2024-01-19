var you;var comp;

var choices = ["rock", "paper", "scissors"];

window.onload = function() {
    for (let i = 0; i < 3; i++) {
        let choice = document.createElement("img");
        choice.id = choices[i];
        choice.src = choices[i] + ".png";
        choice.addEventListener("click", selectChoice);
        document.getElementById("choices").append(choice);
    }
}

function selectChoice() {
    you = this.id;
    document.getElementById("your-choice").src = you + ".png";

    //random for oppponent
    comp = choices[Math.floor(Math.random() * 3)]; 
    document.getElementById("comp-choice").src = comp + ".png";

    //check for winner
    if (you === comp) {
        document.getElementById("res").innerHTML="<h2>it's a tie</h2>";
       } else if (
        (you === "rock" && comp === "scissors") ||
        (you === "paper" && comp === "rock") ||
        (you === "scissors" && comp === "paper")
       ) {
        document.getElementById("res").innerHTML="<h2>You won!!<h2>";
       } else {
        document.getElementById("res").innerHTML="<h2>Computer won<h2>";
       }

}
