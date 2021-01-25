const rock = document.getElementById("rock-btn");
const paper = document.getElementById("paper-btn");
const scissors = document.getElementById("scissors-btn");
const computerScoreText = document.getElementById("computer-score");
const playerScoreText = document.getElementById("player-score");
const finalResult = document.getElementById("result");

let computerPoints = 0;
let playerPoints = 0;


//EVENT LISTENERS

startGame();

//FUNCTIONS

function startRock(){
    game("rock");
    return;
}
function startPaper(){
    game("paper");
    return;
}
function startScissors(){
    game("scissors");
    return;
}

function finishGame() {
    if (computerPoints == 5 && playerPoints == 5) {
        finalResult.innerHTML = "GAME OVER. It's a tie!";
        removeClick();
    }
    else if (computerPoints == 5) {
        finalResult.innerHTML = "GAME OVER. You lost!";
        removeClick();
    }
    else if (playerPoints == 5) {
        finalResult.innerHTML = "GAME OVER. You won!";
        removeClick();
    }
}

function startGame() {
    rock.addEventListener("click", startRock);
    paper.addEventListener("click", startPaper);
    scissors.addEventListener("click", startScissors);
    return;
}

function removeClick() {
    rock.removeEventListener("click", startRock);
    paper.removeEventListener("click", startPaper);
    scissors.removeEventListener("click", startScissors);
    return;
}

//Calls the fucntions to play a round and to change the score and displays the final result

function game(playerSelection) {
    let result = playRound(playerSelection, computerPlay());

    if (result == 1) {
        playerPoints = changeScore(playerPoints, "player");
        resultText = "You won!";
    } 
    else if (result == -1) {
        computerPoints = changeScore(computerPoints, "computer");
        resultText = "You lost!";
    } 
    else {
        playerPoints = changeScore(playerPoints, "player");
        computerPoints = changeScore(computerPoints, "computer");
        resultText = "It's a tie!";
    }
    finalResult.innerHTML = resultText;
    finishGame();
    return;
}

//Increments the scores and changes the scoreboard

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

//Generates a random choice between rock, paper and scissors for the computer
function computerPlay() {
    let rockPaperScissors = ["rock", "paper", "scissors"];
    computerSelection = rockPaperScissors[Math.floor(Math.random()*3)];
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
        return 1; 
    }
    else if (gameDatabase[playerSelection].lose == computerSelection) {
        return -1; 
    }
    else {
        return 0;
    }
}