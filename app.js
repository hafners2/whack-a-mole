const squares = document.querySelectorAll('.square')
const mole = document.querySelector('mole')
let score = document.querySelector('#score')
let timeLeft = document.querySelector('#time-left')
let result = 0;
let hitPosition;
let timerId = null;
let currentTime = 60;

let lowScore = new Audio('lowScore.mp3');
let highScore = new Audio('highScore.mp3')


let countdownTimerId = setInterval(countdown, 1000)
score.innerHTML = result;

function placeMole() {
    squares.forEach(square => {
        square.classList.remove('mole')
    })
    let randPosition = squares[Math.floor(Math.random() * 9)]
    randPosition.classList.add('mole')

    hitPosition = randPosition.id;
}

squares.forEach(square => {
    square.addEventListener('mousedown', () => {
        if(square.id == hitPosition) {
            result++
            score.innerHTML = result
            hitPosition = null
        }
    })

})

function moveMole() {
    timerId = setInterval(placeMole, 800)
}

function countdown() {
    currentTime--
    timeLeft.innerHTML = currentTime


    if(currentTime == 0) {
        clearInterval(countdownTimerId)
        clearInterval(timerId)
        if(result > 30) {
            alert("You're too good! Your final score is " + result + "!")
            highScore.play()
        } else if (result <= 30) {
            lowScore.play()
            alert('Too slow! Your final score is ' + result + '!')
        }
    }
}

moveMole()