//Get player's input and make it lower case

let playerSelection = window.prompt("Rock, paper or scissors?");
playerSelection = playerSelection.toLowerCase();

//FUNCTIONS

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
    //use playRound inside
    //play 5 round game and report winner or loser at the end
}