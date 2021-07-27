const btn1 = document.querySelector('#btn1');
const btn2 = document.querySelector('#btn2');
const btn3 = document.querySelector('#btn3');
const reset = document.querySelector('#reset');
let playerScore = 0;
let computerScore = 0;

const container = document.querySelector('#container');

const pscore = document.createElement('div');
pscore.setAttribute('id', 'pscore');
pscore.textContent = `Player: ${playerScore}`
container.appendChild(pscore);

const cscore = document.createElement('div');
cscore.setAttribute('id', 'cscore');
cscore.textContent = `Computer: ${computerScore}`;
container.appendChild(cscore);

const winner = document.createElement('div');
winner.setAttribute('id', 'winner');
winner.textContent = "Play to see who will reach 5 points first."
container.appendChild(winner);

const round = document.createElement('div');
round.setAttribute('id', 'round');
container.appendChild(round);

btn1.addEventListener('click', () => playRound(btn1.value, computerPlay()));
btn2.addEventListener('click', () => playRound(btn2.value, computerPlay()));
btn3.addEventListener('click', () => playRound(btn3.value, computerPlay()));
reset.addEventListener('click', () => resetGame());


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
            round.textContent = "It's a tie!";
            break;
        case player == "rock" && computer == "scissors":
            round.textContent =  "Player wins! Rock beats Scissors!";
            updateScore(true);
            break;
        case player == "rock" && computer == "paper":
            round.textContent =  "Computer wins! Paper beats Rock!";
            updateScore(false);
            break; 
        case player == "scissors" && computer == "rock":
            round.textContent =  "Computer wins! Rock beats Paper!";
            updateScore(false);
            break;
        case player == "scissors" && computer == "paper":
            round.textContent =  "Player wins! Scissors beat Paper!";
            updateScore(true);
            break;
        case player == "paper" && computer == "rock":
            round.textContent =  "Player wins! Paper beats rock!";
            updateScore(true);
            break;
        case player == "paper" && computer == "scissors":
            round.textContent =  "Computer wins! Scissors beats Paper!";
            updateScore(false);
            break;
    }
}

function updateScore(isPlayer) {
    if (isPlayer) {
        playerScore++;
        pscore.textContent = `Player: ${playerScore}`;
    } else {
        computerScore++;
        cscore.textContent = `Computer: ${computerScore}`;
    }
    checkScore();
}

function checkScore() {
    if (playerScore == 5) {
        winner.textContent = "Player has reached 5 points first!"
    } else if (computerScore == 5) {
        winner.textContent = "Computer has reached 5 points first!"
    }
}

function resetGame() {
    playerScore = 0;
    computerScore = 0;
    pscore.textContent = `Player: ${playerScore}`;
    cscore.textContent = `Player: ${playerScore}`;
    round.textContent = "New Game has started."
    winner.textContent = "Play to see who will reach 5 points first."
}