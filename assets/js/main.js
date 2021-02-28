const number5 = document.getElementById('number5');
const number10 = document.getElementById('number10');
const number15 = document.getElementById('number15');
const number20 = document.getElementById('number20');
const rock = document.getElementById('rock')
const paper = document.getElementById('paper')
const scissors = document.getElementById('scissors')
let round = document.getElementById('round')
let roundTotal = document.getElementById('roundTotal')
let roundContainer = document.getElementById('round-container')
let message = document.getElementById('message')
let userScore = document.getElementById('userScore')
let computerScore = document.getElementById('computerScore')
userScore = 0
computerScore = 0



let user;
let total;
let counting = 0;
let handSign = ['rock', 'paper', 'scissors']


//Choose rounds
function chooseRound() {

    if (number5.checked) {
        total = 5
    } else if (number10.checked) {
        total = 10
    } else if (number15.checked) {
        total = 15
    } else if (number20.checked) {
        total = 20
    }

}
//let chosenRounds = chooseRound()

//Computer Choice
function computerChoice() {
    return Math.floor(Math.random() * Math.floor(3));
}


//User choice
rock.addEventListener('click', (e) => {
    play("rock")

});

paper.addEventListener('click', (e) => {
    play("paper")

});

scissors.addEventListener('click', (e) => {
    play("scissors")

});



//comparing the choices 
function compare(userChoice, computerChoice) {
    switch (userChoice + computerChoice) {
        case 'rockrock':
        case 'paperpaper':
        case 'scissorsscissors':
            return 'draw';
        case 'rockpaper':
        case 'scissorsrock':
        case 'paperscissors':
            return 'lose'
        case 'paperrock':
        case 'rockscissors':
        case 'scissorspaper':
            return 'win'
    }
}

let play = (choice) => {
    if (counting < total) {
        counting++
        let computer = handSign[computerChoice()]
        console.log(compare(choice, computer))
        round.innerHTML = counting


    } else {
        console.log("restart")
    }

}

function whoWins(userChoice, computerChoice) {
    if (userScore < computerScore) {
        message.innerHTML("You lost! Never give up!")
        console.log(computerScore++)
    } else if (userScore > computerScore) {
        message.innerHTML("You won me!!!! Congrats.")
        console.log(userScore++)
    } else {
        message.innerHTML("It's a draw! We must keep trying!")
    }
}


function start() {
    document.getElementById("container").style.display = "block";
    roundContainer.style.display = "block"
    roundTotal.innerHTML = total

}
function reload() {
    window.location.reload();
}




