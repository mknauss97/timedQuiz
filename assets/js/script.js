var questions = [
  {
    title: "commonly used data types do not include:",
    choices: ["strings", "booleans", "alerts", "numbers"],
    correctAnswer: 2
  },
  {
    title: "The condition in an If / else statement is enclosed within ___.",
    choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
    correctAnswer: 2
  },
  {
    title: "Arrays in JavaScript can be used to store _____.",
    choices: ["numbers and strings", "other arrays", "booleans", "all of the above"],
    correctAnswer: 3
  },
  {
    title: "String values must be enclosed within ____ when being assigned to variables.",
    choices: ["commas", "curly brackets", "quotes", "parentheses"],
    correctAnswer: 2
  },
  {
    title: "A very useful tool used during development and debugging for printing content to the debugger is:",
    choices: ["JavaScript", "terminal / bash", "for loops", "console.log"],
    correctAnswer: 3
  }
]
var timerElement = document.querySelector('.timer-count');
var startButton = document.querySelector('.start-button');
var questionH = document.querySelector('.questionCurrent');
var buttonPlacement = document.querySelector('#butts');
var highscores = document.querySelector('#scores');
var timerCount =75;
var scoreCount = 0;
var playerArray;
var currentQuestion = [];
var response = document.querySelector('#response');
var buttonEl1 = document.querySelector('#button1');
var buttonEl2 = document.querySelector('#button2');
var buttonEl3 = document.querySelector('#button3');
var buttonEl4 = document.querySelector('#button4');
var buttonArray =[];
var initalCollect = document.querySelector('#gameOver')
var finalScore = document.querySelector('#finalScore')
buttonArray.push(buttonEl1)
buttonArray.push(buttonEl2)
buttonArray.push(buttonEl3)
buttonArray.push(buttonEl4)
console.log(buttonArray)
var timer = 75;
function startTimer() {
  document.getElementById('home-screen').style.display = "none";
  document.getElementById('quiz-card').style.display = "inline-block"
  // Sets timer
  timer = setInterval(function () {
    
    timerCount--;
    console.log(timerCount)
    timerElement.textContent = timerCount;
    
    
    // Tests if time has run out
    if (timerCount === 0) {
      // Clears interval
      clearInterval(timer);
      collectInitials();

    }
  }, 1000);
  askQuestions();
}

var finalQuestion = questions.length - 1;
var currentQuestion = 0
var correct = ("");
console.log(currentQuestion)
console.log(buttonArray)
function askQuestions() {
  // var askTitle = document.createElement('h1');
   questionH.textContent = questions[currentQuestion].title;
  //  questionH.append(askTitle);
 
  for (var i = 0; i < buttonArray.length; i++) {
   buttonArray[i].textContent=questions[currentQuestion].choices[i];
    console.log("iteration " + i )
  }
};

function checkAnswer(answer) {
  if (answer===questions[currentQuestion].correctAnswer) {
    response.textContent = "Correct"
  }
  else {
    response.textContent = "Incorrect"
    timerCount-=10;
  }

  if (currentQuestion < finalQuestion) {
    currentQuestion++;
    askQuestions()
  }
  else {
    clearInterval(timer)
    collectInitials();
  }
  
}
buttonEl1.addEventListener("click",function(){
  checkAnswer(0)
})
buttonEl2.addEventListener("click",function(){
  checkAnswer(1)
})
buttonEl3.addEventListener("click",function(){
  checkAnswer(2)
})
buttonEl4.addEventListener("click",function(){
  checkAnswer(3)
})
console.log(timerCount)
function collectInitials() {
  finalScore.textContent = "Your Final Score is: " + timerCount;
  document.getElementById('quiz-card').style.display = 'none';
  document.getElementById('gameOver').style.display = 'inline-block';
}

function highNoon(event) {
  event.prevenDefault();

  var playerData = {
    score: timerCount,
    initials: document.getElementById("form-input").value
  }
  playerArray.push(playerData);
  window.localStorage.setItem("")
  window.localStorage.setItem("result", JSON.stringify(playerData));
  window.location.href = "scores.html";
}


startButton.addEventListener("click", startTimer);
