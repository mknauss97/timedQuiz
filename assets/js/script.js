var questions = [
  {
    title: "commonly used data types do not include:",
    choices:["strings", "booleans", "alerts", "numbers"],
    answer:"alerts"
  },
  {
    title: "The condition in an If / else statement is enclosed within ___.",
    choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
    answer: "parentheses"
  },
  {
    title: "Arrays in JavaScript can be used to store _____.",
    choices: ["numbers and strings", "other arrays", "booleans", "all of the above"],
    answer: "all of the above"
  },
  {
    title: "String values must be enclosed within ____ when being assigned to variables.",
    choices: ["commas", "curly brackets", "quotes", "parentheses"],
    answer: "quotes"
  },
  {
    title: "A very useful tool used during development and debugging for printing content to the debugger is:",
    choices: ["JavaScript", "terminal / bash", "for loops", "console.log"],
    answer: "console.log"
  }
]
var timerElement = document.querySelector('#timer-count')
var startButton = document.querySelector('.start-button')
var questionH = document.querySelector('#question')
var answerA = document.querySelector('answerA')
var answerB = document.querySelector('answerB')
var answerC = document.querySelector('answerC')
var answerD = document.querySelector('answerD')
var timerCount;
var scoreCount;
var currentQuestion = [];




var timer = 75;
function startTimer() {
  // Sets timer
  timer = setInterval(function() {
    timerCount --;
    timerElement.textContent = timerCount;
    if (timerCount >= 0) {
      // Tests if win condition is met
      if (isWin && timerCount > 0) {
        // Clears interval and stops timer
        clearInterval(timer);
     
      }
    }
    // Tests if time has run out
    if (timerCount === 0) {
      // Clears interval
      clearInterval(timer);
      
    }
  }, 1000);
  askQuestions();
}

var finalQuestion = questions.length -1;
var currentQuestion = questions[0]
var incorrect = ("");
var correct = ("");
console.log(currentQuestion)
function askQuestions() {
  for (var i = 0; i <questions.length; i++) {
    var choices = document.createElement('button')
    choices.textContent=currentQuestion.choices[i]
    questionH.append(choices)
  }
};

startButton.addEventListener("click", startTimer);
