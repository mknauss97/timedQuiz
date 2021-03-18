var timerElement = $('.timer-count')
var startButton = $('.start-button')

var timer;
var timerCount;

function startQuiz(){
    timerCount = 60;
    // startButton.disabled = true;
    startTimer
};

function startTimer() {
    timer = setInterval(function() {
        timerCount--;
        timerElement.textContent = timerCount;

        if(timerElement > 0 && isWin) {
            clearInterval(timer);
            // endGame();
        }
        if(timerCount === 0) {
            clearInterval(timer);
            // endGame();
        }
    },60000)
}

startButton.on('click', startQuiz);