const choices = ["rock", "paper", "scissors"];
let score = 0;

function getComputerChoice(){
    return choices[Math.floor(Math.random()*3)]
}

function game(){
    
    const playerSelection = prompt("Rock, Paper or Scissors?").toLowerCase();
    const computerSelection = getComputerChoice();

    console.log(playerSelection, computerSelection);

    if(!choices.includes(playerSelection)){
        alert("You need to choose rock, paper or scissors!")
    } else {
        if(playerSelection.toLowerCase() === computerSelection){
            alert("It's a draw")
        }
        else if (playerSelection.toLowerCase() === "rock" && computerSelection === "paper"){
            alert("You lose! Paper beats Rock")
        }
        else if (playerSelection.toLowerCase() === "paper" && computerSelection === "scissors"){
            alert("You lose! Scissors beats Paper")
        }
        else if (playerSelection.toLowerCase() === "scissors" && computerSelection === "rock"){
            alert("You lose! Rock beats Scissors")
        } else {
            score++;    
            alert(`You won! ${playerSelection} beats ${computerSelection}`)
        }

    }
}

let i = 0;

while(i < 5){
    game();
    i++;
}
alert(`You won ${score} out of ${i} tries!`)