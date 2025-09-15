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

console.log(getComputerChoice());