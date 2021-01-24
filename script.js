const rock = document.getElementById("rock-btn");
const paper = document.getElementById("paper-btn");
const scissors = document.getElementById("scissors-btn");
const computerScoreText = document.getElementById("computer-score");
const playerScoreText = document.getElementById("player-score");

let computerPoints = 0;
let playerPoints = 0;
let result

//EVENT LISTENERS

rock.addEventListener("click", function(){
    game("rock")
});
paper.addEventListener("click", function(){
    game("paper")
});
scissors.addEventListener("click", function(){
    game("scissors")
});

console.log(computerScore);
console.log(playerScore);

function game(playerSelection) {
    result = playRound(playerSelection, computerPlay());

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

function changeScore(score, player) {
    score = score + 1;
    if (player == "computer") {
        computerScoreText.innerHTML = "SCORE: " + score;
    }
    else (player == "player") {
        playerScoreText.innerHTML = "SCORE: " + score;
    }
    return;
}

//FUNCTIONS

//Generates a random choice between rock, paper and scissors for the computer
function computerPlay() {
    let rockPaperScissors = ["rock", "paper", "scissors"];
    computerSelection = rockPaperScissors[Math.floor(Math.random()*3)];
    console.log(computerSelection);
    return computerSelection;
}

//One round of the game
function playRound(playerSelection, computerSelection) {

    let gameDatabase = {
        rock: {win: "scissors", lose: "paper"},
        paper: {win: "rock", lose: "scissors"},
        scissors: {win: "paper", lose: "rock"}
    };

    if (gameDatabase[playerSelection].won == computerSelection) {
        console.log("win");
        return "You won"; 
    }
    else if (gameDatabase[playerSelection].lose == computerSelection) {
        console.log("lost");
        return "You lost"; 
    }
    else {
        console.log("tie");
        return "It's a tie";
    }
}

