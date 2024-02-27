/* Rock Paper Scissor. 
User selects rock, paper or scissor
Computer selects random 
the selections are compared
if equal show "it's a tie"
else show winner based on:
rock beats scissor
scissor beats paper
paper beats rock
depending on result show
"you win!" else "you lose!"
*/


function getComputerChoice() {
    const choices = ['Rock', 'Paper', 'Scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

// Test the function
console.log(getComputerChoice());

function playRound(playerSelection, computerSelection){
    //Convert inoput to all lowercase for insesitve comparison
    const playerChoice = playerSelection.toLowerCase();
    const computerChoice = computerSelection.toLowerCase();


if (playerChoice === computerChoice) {
    return "It's a tie!";
} else if (
    (playerChoice === 'rock' && computerChoice === 'scissor') ||
    (playerChoice === 'paper'&& computerChoice === 'rock') ||
    (playerChoice === 'scissor' && computerChoice === 'paper' )
) {
    return `You Win! ${playerSelection} beats ${computerSelection}`;
} else {
    return `You Lose! ${computerSelection} beats ${playerSelection}`;
}
}

function playGame(){
    let playerScore = 0;
    let computerScore = 0;

    for (let round = 1; round <=5; round++){
        const playerSelection = prompt("Round " + round + ": Enter your choice (Rock, Paper or Scissor):");

        const computerSelection = getComputerChoice();

        const roundResult = playRound(playerSelection, computerSelection);
        console.log("Round " + round + ": " + roundResult);
        if (roundResult.includes("win")) {
            playerScore++;
        } else if (roundResult.includes("Lose")){
            computerScore++;
        }
    }
    let winner;
    if (playerScore > computerScore){
        winnner = "You win!";
    } else if (playerScore < computerScore) {
        winner = "Your lose!";
    } else {
        winner = "It's a tie!";
    }
    console.log("Final Scores:");
    console.log("Player: " + playerScore);
    console.log("Computer: " + computerScore);
    console.log(winner);
}
playGame();
