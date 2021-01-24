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

let gameDatabase = {
    rock: {win: "scissors", lose: "paper"},
    paper: {win: "rock", lose: "scissors"},
    scissors: {win: "paper", lose: "rock"}
};

function playRound(playerSelection, computerSelection) {

    if (gameDatabase[playerSelection].won == computerSelection) {
        return "You won"; 
    }
    else if (gameDatabase[playerSelection].lose == computerSelection) {
        return "You lost"; 
    }
    else {
        return "It's a tie";
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
        } else if (result == "You lost") {
            computerScore = computerScore + 1;
        } else {
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