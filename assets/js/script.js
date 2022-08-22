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

// Timer function
function startTimer() {
    timerCount = 60;

    var quizTimer = setInterval(function() {
        timerCount--
        timerDisplay.textContent = timerCount

        if (timerCount === 00) {
            clearInterval(quizTimer);
        }
    }, 1000);
}

// Display quiz
function displayQuiz()

// Quiz start
function startQuiz() {
    startTimer();
    return;
}

// Event listeners
startQuizButton.addEventListener("click", startQuiz);