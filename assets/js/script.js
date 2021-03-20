var timerElement = document.querySelector('.timer-count')
var startButton = document.querySelector('.start-button')

var timer;
var timerCount;

function startQuiz(){
    timerCount = 60;
    startButton.disabled = true;
    startTimer
};
// timer function
function startTimer() {
    
    timer = setInterval(function() {
      timerCount--;
      timerElement.textContent = timerCount;
      if (timerCount >= 0) {
        
        if (isWin && timerCount > 0) {
          
          clearInterval(timer);
          winGame();
        }
      }
      
      if (timerCount === 0) {
        
        clearInterval(timer);
        loseGame();
      }
    }, 1000);
  }
  

startButton.on('click', startQuiz);