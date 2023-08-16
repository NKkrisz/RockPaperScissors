const buttons = document.querySelectorAll("button")

for(const button of buttons){
    button.addEventListener("click", function () {
        playRound(button.id)
    }
)}

const choices = ["rock", "paper", "scissors"];


let playerScore = 0;
let computerScore = 0;
let drawCounter = 0;

const result = document.querySelector(".result")
const scores = document.querySelector(".scores")
const draws = document.querySelector(".draws")
result.innerText = "Game hasn't started yet"
scores.innerText = `Player's score: ${playerScore} \n Computer's score: ${computerScore}`
draws.innerText = `Number of draws: ${drawCounter}`

function playRound(playerSelection){
    const computerSelection = choices[Math.floor(Math.random()*3)];
    draws.innerText = `Number of draws: ${drawCounter}`

    if(playerSelection === computerSelection){
        drawCounter++;
        result.innerText = "It's a draw...";
        draws.innerText = `Number of draws: ${drawCounter}`
    }
    else if (playerSelection === "rock" && computerSelection === "paper"){
        result.innerText = "You lose! Paper beats Rock";
        computerScore++;
    }
    else if (playerSelection === "paper" && computerSelection === "scissors"){
        result.innerText = "You lose! Scissors beats Paper";
        computerScore++;
    }
    else if (playerSelection === "scissors" && computerSelection === "rock"){
        result.innerText = "You lose! Rock beats Scissors";
        computerScore++;
    } else {
        result.innerText = `You won! ${capitalize(playerSelection)} beats ${capitalize(computerSelection)}`;
        playerScore++;
    }

    scores.innerText = `Player's score: ${playerScore} \n Computer's score: ${computerScore}`

    if(playerScore === 5 || computerScore === 5){
        playerScore > computerScore ? 
        result.innerText = " Player won!" :
        result.innerText = " Computer won!"
        
        playerScore = 0;
        computerScore = 0;
        drawCounter = 0;
        return;
    }
}

function capitalize(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
}