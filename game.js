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
let playerScore = 0;
let computerScore = 0;
const buttons = document.querySelectorAll('input');

// Get computer's choice
function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    return choices[Math.floor(Math.random() * choices.length)];
}

// Disable buttons after game completion
function disableButtons() {
    buttons.forEach(elem => {
        elem.disabled = true;
    });
}

// Play a single round of the game
function playRound(playerSelection) {
    playerSelection = playerSelection.toLowerCase();
    let computerSelection = getComputerChoice();
    let result = "";

    if ((playerSelection === 'rock' && computerSelection === 'scissors') ||
        (playerSelection === 'scissors' && computerSelection === 'paper') ||
        (playerSelection === 'paper' && computerSelection === 'rock')) {

        playerScore++; // Increment player score
        result = 'You win! ' + playerSelection + ' beats ' + computerSelection;
    } else if (playerSelection === computerSelection) {
        result = 'It\'s a tie. You both chose ' + playerSelection;
    } else {
        computerScore++; // Increment computer score
        result = 'You lose! ' + computerSelection + ' beats ' + playerSelection;
    }

    // Update scores
    result += "<br><br>Player score: " + playerScore + "<br>Computer score: " + computerScore;

    // Check for game completion
    if (playerScore === 5 || computerScore === 5) {
        if (playerScore === 5) {
            result += '<br><br>You won the game!'; // Player won
        } else {
            result += '<br><br>Computer won the game!'; // Computer won
        }
        disableButtons(); // Disable buttons
    }

    // Update result display
    document.getElementById('result').innerHTML = result;
}

// Add event listeners to buttons
buttons.forEach(button => {
    button.addEventListener('click', function() {
        playRound(button.value);
    });
});

// Reload button functionality
document.addEventListener("DOMContentLoaded", function() {
    // Get the reload button element
    var reloadButton = document.getElementById("reloadButton");

    // Add click event listener to the reload button
    reloadButton.addEventListener("click", function() {
        // Reload the page
        location.reload();
    });
});