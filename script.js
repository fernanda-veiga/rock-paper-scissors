const rock = document.getElementById("rock-btn")
const paper = document.getElementById("paper-btn")
const scissors = document.getElementById("scissors-btn")

//EVENT LISTENER

rock.addEventListener("click", computerPlay);
paper.addEventListener("click", computerPlay);
scissors.addEventListener("click", computerPlay);

//FUNCTIONS

//Generates a random choice between rock, paper and scissors for the computer
function computerPlay() {
    let rockPaperScissors = ["rock", "paper", "scissors"];
    computerSelection = rockPaperScissors[Math.floor(Math.random()*3)];
    console.log(computerSelection);
    return computerSelection;
}

function playRound(playerSelection, computerSelection) {

    let gameDatabase = {
        rock: {win: "scissors", lose: "paper"},
        paper: {win: "rock", lose: "scissors"},
        scissors: {win: "paper", lose: "rock"}
    };

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


        let result = playRound(playerPlay(), computerPlay());

        if (result == "You won") {
            playerScore = playerScore + 1;
        } 
        else if (result == "You lost") {
            computerScore = computerScore + 1;
        } 
        else {
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