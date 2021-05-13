function computerPlay() {
    number = Math.floor(Math.random() * 3);
    return pickWeapon(number);
}

function pickWeapon(number) {
    switch(number) {
        case 0:
            return "Rock."; 
        case 1:
            return "Paper.";
        case 2:
            return "Scissors.";
        default:
            return "I give up."
    }   
}

function playRound(playerSelection, computerSelection) {
    let player = playerSelection.toLowerCase();
    let computer = computerSelection.toLowerCase();
    switch(player, computer) {
        default: 
            return "It's a tie!";
        case player == "rock" && computer == "scissors":
            return "Player wins! Rock beats Scissors!";
        case player == "rock" && computer == "paper":
            return "Computer wins! Paper beats Rock!"; 
    }
}