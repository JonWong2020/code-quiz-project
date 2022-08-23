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
var highscoresScreen = document.querySelector(".highscores-screen");
var viewHighScoresButton = topBar.querySelector("button");

// Other variables
var quizWin = false

// Display questions
var quizQuestions = [
    {
        question: "Which of the following is an example of an array?",
        answers: {
            a: "var array = {}",
            b: "var array = ()",
            c: "var array = <>",
            d: "var array = []",
        },
        correctAnswer: "d",
    },
    {
        question: "Which DOM method is used to create a new HTML element",
        answers: {
            a: "document.createElement()",
            b: "document.newElement()",
            c: "document.element()",
            d: "document.spawnElement()",
        },
        correctAnswer: "a",
    },
    {
        question: "Which operator represents OR statements?",
        answers: {
            a: "&&",
            b: "||",
            c: "==",
            d: "()",
        },
        correctAnswer: "b",
    }
]

// Quiz start
function startQuiz() {
    quizWin = false;
    timerCount = 60;
    startQuizButton.disabled = true
    startTimer();
    displayQuiz();
    return;
}

// Display quiz
function displayQuiz() {
    quizIntro.setAttribute("style", "display: none");
    questionSection.setAttribute("style", "display:block");
}



// Quiz Complete function
function quizComplete() {
    quizIntro.setAttribute("style", "display: none");
    questionSection.setAttribute("style", "display:none");
    quizFinish.setAttribute("style", "display:block");
    if (initialsEntry = "" && scoreSubmitButton.addEventListener("click")) {
        alert("Please enter your initials");
    }
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
            }
        }
        if (timerCount === 0) {
            clearInterval(quizTimer);
            quizComplete();
        }
    }, 1000);
}

// Event listeners
startQuizButton.addEventListener("click", startQuiz);