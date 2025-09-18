let humanScore = 0;
let computerScore = 0;
let input = prompt("Choose Rock, Paper, or Scissors", "User Choice");
let computerChoice = getComputerChoice();
let humanChoice = getHumanChoice();
let result = checkWinner(humanChoice, computerChoice);

// A FUNCTION THAT GETS THE PLAYER INPUT

function getHumanChoice(){
    return input.toLowerCase();
}

// A FUNCTION THAT RETURNS A RANDOM COMPUTER CHOICE

function getComputerChoice(){
    let choice = Math.floor(Math.random() * 3);
    
    if (choice === 0){
        return "rock";
    } else if (choice === 1){
        return "paper";
    } else {
        return "scissors";
    }   
}

// LOGIC TO DETERMINE THE WINNER OF ONE ROUND, 
// AND UPDATES THE SCORE OF THE WINNER OF THE ROUND

function checkWinner(humanChoice, computerChoice){
    
    if (humanChoice === computerChoice){
        return "Tie";
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") || 
        (humanChoice === "paper" && computerChoice === "rock") || 
        (humanChoice === "scissors" && computerChoice === "paper")
    ){  
        humanScore++; 
        return "Player";
    } else {
        computerScore++;
        return "Computer";
    } 
}


// FUNCTION THAT DISPLAYS A MESSAGE OF THE WINNER

function displayWinner(winner, humanChoice, computerChoice){
    if (winner === "Tie"){
        console.log("It is a tie.")
    } else if (winner === "Player"){
        console.log(`You win! ${humanChoice} beats ${computerChoice}.`)
    } else {
        console.log(`You lose! ${computerChoice} beats ${humanChoice}.`)
    }
}

// A FUNCTION THAT PLAYS A SINGLE ROUND

function playRound(humanChoice, computerChoice){
    
    console.log("Player choice: " + humanChoice);
    console.log("Computer choice: " + computerChoice);
    displayWinner(result, humanChoice, computerChoice);
    console.log("Scores:");
    console.log("Player: " + humanScore);
    console.log("Computer: " + computerScore);
}

function game(){
   
    playRound(humanChoice, computerChoice);

}

game();

