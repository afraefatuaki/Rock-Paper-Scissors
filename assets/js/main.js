const rock = document.getElementById("rock")
const paper = document.getElementById("paper")
const scissors = document.getElementById("scissors")
const radio = document.getElementsByName('radio')
const result = document.getElementById('result')
const container = document.getElementById('container')
const roundContainer = document.getElementById('round-container')
const round = document.getElementById('round')
const roundTotalDiv = document.getElementById('round-total')
const userScoreDiv = document.getElementById('user-score')
const computerScoreDiv = document.getElementById('computer-score')
const choices = document.querySelectorAll('.choice')
let roundTotal = 5
let counter = 0
let userScore = 0
let computerScore = 0

choices.forEach(choice => choice.addEventListener('click', (e) => game(e.path[1].id)))
// rock.addEventListener('click', () => {
//     game('rock');
// })
// paper.addEventListener('click', () => {
//     game('paper');
// })
// scissors.addEventListener('click', () => {
//     game('scissors');
// })

let getComputerChoice = () => ['rock', 'paper', 'scissors'][Math.floor(Math.random() * 3)]
//console.log(getComputerChoice())

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

let getScore = text => text == 'win' ? userScore++ : text == 'lose' ? computerScore++ : null
let getGeneralScore = (userScore, computerScore) => userScore > computerScore ? '!!you win' : userScore < computerScore ? '!!LOOOOOSer' : "!!It's a draw"

radio.forEach(elt => elt.addEventListener('click', () => roundTotal = elt.value))

let game = (userChoice) => {
    container.style.display = 'none'
    roundContainer.style.display = 'block'
    roundTotalDiv.innerHTML = roundTotal
    let computerChoice = getComputerChoice()
    console.log({ counter, userChoice, computerChoice })
    if (counter < roundTotal) {
        counter++
        round.innerHTML = counter
        result.innerHTML = compare(userChoice, computerChoice)
        getScore(compare(userChoice, computerChoice))
        userScoreDiv.innerHTML = userScore
        computerScoreDiv.innerHTML = computerScore
        console.log({ userScore, computerScore })
    }
    if (counter == roundTotal) {
        console.log('result')
        result.innerHTML = getGeneralScore(userScore, computerScore)
    }
}

var start = millis();

mouseClicked = function () {
    // Restart the program whenever the user clicks the mouse
    Program.restart();
};

draw = function () {
    background(255, 255, 255);
    fill(0, 0, 0);
    textAlign(CENTER, CENTER);
    text("This program has been running for " + ((millis() - start) / 1000).toFixed(2) + " seconds.", 200, 200);
};





