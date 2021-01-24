//FUNCTIONS

function playerPlay() {
    let playerSelection = window.prompt("Rock, paper or scissors?");
    playerSelection = playerSelection.toLowerCase();
    return playerSelection;
}

function computerPlay() {
    let rockPaperScissors = ["rock", "paper", "scissors"];
    computerSelection = rockPaperScissors[Math.floor(Math.random()*3)];
    return computerSelection;
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection == "rock") {
        if (computerSelection == "rock") {
            return "It's a tie";
        } else if (computerSelection == "paper") {
            return "The computer won";
        } else {
            return "You won";
        }
    } else if (playerSelection == "paper") {
        if (computerSelection == "rock") {
            return "You won";
        } else if (computerSelection == "paper") {
            return "It's a tie";
        } else {
            return "The computer won";
        }
    } else if (playerSelection == "scissors") {
        if (computerSelection == "rock") {
            return "The computer won";
        } else if (computerSelection == "paper") {
            return "You won";
        } else {
            return "It's a tie";
        }
    } 
}

function game() {
    let computerScore = 0;
    let playerScore = 0;
    for (let i=0; i<5; i++) {
        playerSelection = playerPlay();
        computerSelection = computerPlay();
        result = playRound(playerSelection, computerSelection);

        if (result == "You won") {
            playerScore = playerScore + 1;
        } else if (result == "The computer won") {
            computerScore = computerScore + 1;
        } else (result == "It's a tie") {
            playerScore = playerScore + 1;
            computerScore = computerScore + 1;
        }
    }
    
    if (playerScore > computerScore) {
        return "You won";
    } else if (playerScore < computerScore) {
        return "You lost";
    } else {
        return "It's a tie";
    }
}