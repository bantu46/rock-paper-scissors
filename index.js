let humanScore = 0;
let computerScore = 0;
let input = prompt("Choose Rock, Paper, or Scissors", "User Choice");
let computerChoice = getComputerChoice();
let humanChoice = getHumanChoice(input);
let result = checkWinner(humanChoice, computerChoice);

// A FUNCTION THAT GETS THE PLAYER INPUT

function getHumanChoice(input){
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


// A FUNCTION TO PLAY THE GAME FIVE TIMES


function game(){
    for (let i = 0; i < 5; i++){
        let input = prompt("Choose Rock, Paper, or Scissors", "User Choice");
        let humanChoice = getHumanChoice(input);
        let computerChoice = getComputerChoice();
        let result = checkWinner(humanChoice, computerChoice);
    
        console.log(`Round ${i + 1}:`)
        console.log("Player choice: " + humanChoice);
        console.log("Computer choice: " + computerChoice);
        displayWinner(result, humanChoice, computerChoice);
        console.log("---------------------------------------");
        
    }
    console.log("Final Scores:");
    console.log(`Player: ${humanScore}`);
    console.log(`Computer: ${computerScore}`);

    if (humanScore > computerScore){
        console.log("You won the game!");
    } else if (humanScore < computerScore) {
        console.log("You lost the game!");
    } else {
        console.log("The game is a tie!")
    }
}

game();

