const rock = document.getElementById("rock-btn");
const paper = document.getElementById("paper-btn");
const scissors = document.getElementById("scissors-btn");
const computerScoreText = document.getElementById("computer-points");
const playerScoreText = document.getElementById("player-points");
const finalResult = document.getElementById("result");
const computerSelectionImg = document.getElementById("computer-choice");
const playerSelectionImg = document.getElementById("player-choice")

let playerSelection = "";
let computerSelection = "";
let computerPoints = 0;
let playerPoints = 0;

startGame();

//Buttons working

function startGame() {
    rock.addEventListener("click", buttonRock);
    paper.addEventListener("click", buttonPaper);
    scissors.addEventListener("click", buttonScissors);
    return;
}

//Get player selection and run the game

function buttonRock(){
    playerSelection = "rock";
    game(playerSelection);
    return;
}
function buttonPaper(){
    playerSelection = "paper";
    game(playerSelection);
    return;
}
function buttonScissors(){
    playerSelection = "scissors";
    game(playerSelection);
    return;
}

//Play the game

function game(playerSelection) {
    //Store a value for the computer choice
    computerSelection = computerPlay()

    //Play a round
    let result = playRound(playerSelection, computerSelection);
    
    //Display text according to the result
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
    changeImage()
    finalResult.innerHTML = resultText;
    finishGame();
    return;
}

//Checks if one of the players have 5 points and, if yes, the buttons stop working

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

//Removes the event listeners

function removeClick() {
    rock.removeEventListener("click", buttonRock);
    paper.removeEventListener("click", buttonPaper);
    scissors.removeEventListener("click", buttonScissors);
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

//Displays an image of the current selection for the player and the computer

function changeImage() {
    //Change player selection image
    if (playerSelection == "rock") {
        playerSelectionImg.innerHTML = '<i class="far fa-hand-rock"></i>';
    } 
    else if (playerSelection == "paper") {
        playerSelectionImg.innerHTML = '<i class="far fa-hand-paper"></i>';
    } 
    else {
        playerSelectionImg.innerHTML = '<i class="far fa-hand-scissors"></i>';
    } 

    //Change computer selection image
    if (computerSelection == "rock") {
        computerSelectionImg.innerHTML = '<i class="far fa-hand-rock"></i>';
    } 
    else if (computerSelection == "paper") {
        computerSelectionImg.innerHTML = '<i class="far fa-hand-paper"></i>';
    } 
    else {
        computerSelectionImg.innerHTML = '<i class="far fa-hand-scissors"></i>';
    } 
}