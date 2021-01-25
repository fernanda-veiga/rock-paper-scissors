const rock = document.getElementById("rock-btn");
const paper = document.getElementById("paper-btn");
const scissors = document.getElementById("scissors-btn");
const computerScoreText = document.getElementById("computer-score");
const playerScoreText = document.getElementById("player-score");
const finalResult = document.getElementById("result");

let computerPoints = 0;
let playerPoints = 0;


//EVENT LISTENERS

rock.addEventListener("click", function(){
    game("rock", playerPoints, computerPoints)
});
paper.addEventListener("click", function(){
    game("paper", playerPoints, computerPoints)
});
scissors.addEventListener("click", function(){
    game("scissors", playerPoints, computerPoints)
});

function game(playerSelection) {
    
    let result = playRound(playerSelection, computerPlay());

    if (result == "You won") {
        playerPoints = changeScore(playerPoints, "player");
    } 
    else if (result == "You lost") {
        computerPoints = changeScore(computerPoints, "computer");
    } 
    else {
        playerPoints = changeScore(playerPoints, "player");
        computerPoints = changeScore(computerPoints, "computer");
    }
    finalResult.innerHTML = result;
    console.log(computerPoints);
    console.log(playerPoints);
    return;
}

function changeScore(score, player) {
    score = score + 1;
    if (player == "computer") {
        computerScoreText.innerHTML = "SCORE: " + score;
    }
    else {
        playerScoreText.innerHTML = "SCORE: " + score;
    }
    return score;
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

    if (gameDatabase[playerSelection].win == computerSelection) {
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