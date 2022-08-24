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
var initialsEntry = scoreEntry.querySelector("input").value;
var viewHighScoresScreen = document.querySelector(".highscores-screen");
var viewHighScoresButton = topBar.querySelector("button");
var returnButton = viewHighScoresScreen.querySelector("#return-button");
var highScoresList = viewHighScoresScreen.querySelector("#hs-list");
var questionHead = questionSection.querySelector("#question-head");

// Other variables

var quizWin = false;
var questionIndex = 0;

// Display questions
var quizQuestions = [
    {
        question: "Which of the following is an example of an array?",
        answers: [
             "var array = {}",
             "var array = ()",
             "var array = <>",
            "var array = []",
        ],
        correctAnswer: "var array = []",
    },
    {
        question: "Which DOM method is used to create a new HTML element",
        answers: [
             "document.createElement()",
             "document.newElement()",
             "document.element()",
            "document.spawnElement()",
        ],
        correctAnswer: "document.createElement()",
    },
    {
        question: "Which operator represents OR statements?",
        answers: [
            "&&",
            "||",
            "==",
            "()",
        ],
        correctAnswer: "||",
    },
    {
        question: "What does CSS stand for?",
        answers: [
            "Common Style Sheets",
            "Colorful Style Sheets",
            "Cascading Style Sheets",
            "Computer Style Sheets",
        ],
        correctAnswer: "Cascading Style Sheets",
    },
];

// Quiz start
function startQuiz() {
    quizWin = false;
    timerCount = 15;
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

    // For loops to loop through all info in array
    for (var i = 0; i < quizQuestions.length; i++) {
        // Appends question title only
        var userQuestion = quizQuestions[questionIndex].question;
        var userChoices = quizQuestions[questionIndex].answers;
        questionHead.textContent = userQuestion;
    }
    // New for each for question choices
    userChoices.forEach(function (newItem) {
        
        var listItem = document.createElement("li");
        
        listItem.textContent = newItem;
        questionSection.appendChild(questionHead);
        questionHead.appendChild(listItem);
        listItem.addEventListener("click", (compare));
    })
}

// Check answers
function compare(event) {
    var element = event.target;

    if (element.matches("li")) {

        var createDiv = document.createElement("div");
        createDiv.setAttribute("id", "createDiv");
        // Correct condition 
        if (element.textContent == question[questionIndex].correctAnswer) {
            score++;
            createDiv.textContent = "Correct! The answer is:  " + question[questionIndex].correctAnswer;
            // Correct condition 
        } else {
            // Will deduct -5 seconds off secondsLeft for wrong answers
            secondsLeft = secondsLeft - penalty;
            createDiv.textContent = "Wrong! The correct answer is:  " + question[questionIndex].correctAnswer;
        }

    }
    
    questionIndex++;

    if (questionIndex >= question.length) {
        
        quizComplete();
        createDiv.textContent = "End of quiz!" + " " + "You got  " + score + "/" + questions.length + " Correct!";
    } else {
        render(questionIndex);
    }
    questionSection.appendChild(createDiv);

}

// Quiz Complete function
function quizComplete() {
    quizIntro.setAttribute("style", "display: none");
    questionSection.setAttribute("style", "display: none");
    quizFinish.setAttribute("style", "display: block");
  
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
// scoreSubmitButton.addEventListener("click", addHighScore);