const btn1 = document.querySelector('#btn1');
const btn2 = document.querySelector('#btn2');
const btn3 = document.querySelector('#btn3');

const div = document.createElement('div');



btn1.addEventListener('click', () => console.log(playRound(btn1.value, computerPlay())));

function computerPlay() {
    number = Math.floor(Math.random() * 3);
    return pickWeapon(number);
}

function pickWeapon(number) {
    switch(number) {
        case 0:
            return "Rock"; 
        case 1:
            return "Paper";
        case 2:
            return "Scissors";
        default:
            return "I give up."
    }   
}

function playRound(playerSelection, computerSelection) {
    let player = playerSelection.toLowerCase();
    console.log(player);
    let computer = computerSelection.toLowerCase();
    console.log(computer);
    switch(true) {
        case player == computer:
            return "It's a tie!";
            break;
        case player == "rock" && computer == "scissors":
            return "Player wins! Rock beats Scissors!";
            break;
        case player == "rock" && computer == "paper":
            return "Computer wins! Paper beats Rock!";
            break; 
        case player == "scissors" && computer == "rock":
            return "Computer wins! Rock beats Paper!";
            break;
        case player == "scissors" && computer == "paper":
            return "Player wins! Scissors beat Paper!";
            break;
        case player == "paper" && computer == "rock":
            return "Player wins! Paper beats rock!";
            break;
        case player == "paper" && computer == "scissors":
            return "Computer wins! Scissors beats Paper!";
            break;
    }
}

function game() {
    for (i = 0; i < 5; i++) {
        let window = prompt("Rock, paper, or scissors?");
        console.log("Playing round " + (i+1) + " out of 5");
        console.log(playRound(window, computerPlay()));
    }
    return "Game Over";
}