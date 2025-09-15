let humanScore = 0;
let computerScore = 0;

// A FUNCTION THAT RETURNS COMPUTER CHOICE
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

// console.log(getComputerChoice());

// THE LOGIC TO GET THE HUMAN CHOICE
// SET THE HUMAN CHOICE TO LOWER CASE 
function getHumanChoice(){
    let userChoice = prompt("Choose Rock, Paper, or Scissors: ", "User Choice");
    return userChoice.toLowerCase();
}

// getHumanChoice();
console.log(getHumanChoice());