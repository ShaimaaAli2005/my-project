var PlayerOneChoice = "Rock";
var PlayerTwoChoice = "Scissors";

if (PlayerOneChoice === PlayerTwoChoice) {
    console.log("It's a tie!");
} else if (
    (PlayerOneChoice === "Rock" && PlayerTwoChoice === "Scissors") ||
    (PlayerOneChoice === "Paper" && PlayerTwoChoice === "Rock") ||
    (PlayerOneChoice === "Scissors" && PlayerTwoChoice === "Paper")
) {
    console.log("Player One wins!");
} else {
    console.log("Player Two wins!");
}