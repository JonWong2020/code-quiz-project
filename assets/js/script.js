// Query Selectors

var startQuizButton = document.querySelector("#start-quiz-button");
var quizIntro = document.querySelector(".quiz-intro");
var questionSection = document.querySelector(".question-section");
var topBar = document.querySelector(".top-bar");
var timerDisplay = topBar.querySelector("p");
var answerSection = document.querySelector("ul");
var quizFinish = document.querySelector(".quiz-finish-section");
var main = document.querySelector("main");
var scoreEntry = document.querySelector("#score-entry");
var scoreSubmitButton = scoreEntry.querySelector("button");
var initialsEntry = scoreEntry.querySelector("input");
var viewHighScoresScreen = document.querySelector(".highscores-screen");
var viewHighScoresButton = topBar.querySelector("button");
var returnButton = viewHighScoresScreen.querySelector("#returnbutton");

// Other variables

var quizWin = false

// Display questions
var quizQuestions = [
    {
        question: "Which of the following is an example of an array?",
        answers: {
            choiceA: "var array = {}",
            choiceB: "var array = ()",
            choiceC: "var array = <>",
            choiceD: "var array = []",
        },
        correctAnswer: "d",
    },
    {
        question: "Which DOM method is used to create a new HTML element",
        answers: {
            choiceA: "document.createElement()",
            choiceB: "document.newElement()",
            choiceC: "document.element()",
            choiceD: "document.spawnElement()",
        },
        correctAnswer: "a",
    },
    {
        question: "Which operator represents OR statements?",
        answers: {
            choiceA: "&&",
            choiceB: "||",
            choiceC: "==",
            choiceD: "()",
        },
        correctAnswer: "b",
    },
    {
        question: "What does CSS stand for?",
        answers: {
            choiceA: "Common Style Sheets",
            choiceB: "Colorful Style Sheets",
            choiceC: "Cascading Style Sheets",
            choiceD: "Computer Style Sheets",
        },
        correctAnswer: "c",
    },
]

// Quiz start
function startQuiz() {
    quizWin = false;
    timerCount = 60;
    // viewHighScoresButton.disabled = true
    startTimer();
    displayQuiz();
    return;
}

// Display intro
function displayIntro() {
    quizIntro.setAttribute("style", "display: block");
    questionSection.setAttribute("style", "display: none");
    quizFinish.setAttribute("style", "display: none");
    viewHighScoresScreen.setAttribute("style", "display: none");
    // viewHighScoresButton.enabled = true; 
}

// Display quiz
function displayQuiz() {
    quizIntro.setAttribute("style", "display: none");
    questionSection.setAttribute("style", "display: block");
    
}


// Quiz Complete function
function quizComplete() {
    quizIntro.setAttribute("style", "display: none");
    questionSection.setAttribute("style", "display: none");
    quizFinish.setAttribute("style", "display: block");
    // if (initialsEntry = "" && scoreSubmitButton.addEventListener("click")) {
    //     alert("Please enter your initials");
    // }
}

// Timer function
function startTimer() {

    var quizTimer = setInterval(function() {
        timerCount--
        timerDisplay.textContent = timerCount
        if (timerCount >= 0) {
            if (quizWin && timerCount > 0) {
                clearInterval(quizTimer);
                quizComplete();
                startQuizButton.enabled = true;
                viewHighScoresButton.enabled = true;
            }
        }
        if (timerCount === 0) {
            clearInterval(quizTimer);
            quizComplete();
            startQuizButton.enabled = true;
            viewHighScoresButton.enabled = true;
        }
    }, 1000);
}

// View highscores section
function displayHighScores() {
    quizIntro.setAttribute("style", "display: none");
    questionSection.setAttribute("style", "display: none");
    quizFinish.setAttribute("style", "display: none");
    viewHighScoresScreen.setAttribute("style", "display: block");
}

// Event listeners
startQuizButton.addEventListener("click", startQuiz);
viewHighScoresButton.addEventListener("click", displayHighScores);
returnButton.addEventListener("click", displayIntro);
scoreSubmitButton.addEventListener("click", displayIntro);