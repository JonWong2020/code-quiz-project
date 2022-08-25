// Query Selectors

var startQuizButton = document.querySelector("#start-quiz-button");
var quizIntro = document.querySelector(".quiz-intro");
var questionSection = document.querySelector(".question-section");
var topBar = document.querySelector(".top-bar");
var timerDisplay = topBar.querySelector("p");
var answerSection = document.querySelector("ul");
var quizFinish = document.querySelector(".quiz-finish-section");
var scoreEntry = document.querySelector("#score-entry");
var scoreSubmitButton = scoreEntry.querySelector("button");
var initialsEntry = scoreEntry.querySelector("#initials");
var viewHighScoresScreen = document.querySelector(".highscores-screen");
var viewHighScoresButton = topBar.querySelector("button");
var returnButton = viewHighScoresScreen.querySelector("#return-button");
var highScoresList = viewHighScoresScreen.querySelector("#hs-list");
var questionHead = questionSection.querySelector("#question-head");
var finalScore = quizFinish.querySelector("#final-score");
var resetHighScores = document.querySelector("#reset-hs");

// Other variables

var questionIndex = 0;
var timeLeft = 46;
var holdInterval = 0;
var penalty = 10;
var score = 0;

// Display questions
var quizQuestions = [
    {
        question: "Which of the following is an example of an array?",
        answers: [
             "var array = { }",
             "var array = ( )",
             "var array = < >",
            "var array = [ ]",
        ],
        correctAnswer: "var array = [ ]",
    },
    {
        question: "Which DOM method is used to create a new HTML element",
        answers: [
             "document.createElement ( )",
             "document.newElement ( )",
             "document.element ( )",
            "document.spawnElement ( )",
        ],
        correctAnswer: "document.createElement ( )",
    },
    {
        question: "Which operator represents OR statements?",
        answers: [
            "& &",
            "| |",
            "= =",
            "( )",
        ],
        correctAnswer: "| |",
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

// Display intro function
function displayIntro() {
    quizIntro.setAttribute("style", "display: block");
    questionSection.setAttribute("style", "display: none");
    quizFinish.setAttribute("style", "display: none");
    viewHighScoresScreen.setAttribute("style", "display: none");
    location.reload();
    return;
}

// Quiz start & Timer function event
startQuizButton.addEventListener("click", function startTimer() {

    if (holdInterval === 0) {
        holdInterval =  setInterval(function() {
        timeLeft--;
        timerDisplay.textContent = timeLeft;
        if (timeLeft <= 0) {
           clearInterval(holdInterval);
            quizComplete();
            }   

        }, 1000);
    }
    displayQuiz();
});

// Display quiz function
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
        listItem.addEventListener("click", compare);
    })
}

// Check answers function
function compare(event) {
    var element = event.target;
    // Records score and applies time penalty 
    if (element.matches("li")) {
        if (element.textContent == quizQuestions[questionIndex].correctAnswer) {
            score++;
        } else {
            timeLeft = timeLeft - penalty;
        }
    };

    questionIndex++;
    // Check if quiz finished or not
    if (questionIndex >= quizQuestions.length) {
        quizComplete();
    } else {
        displayQuiz();
    };
}

// Quiz Complete function
function quizComplete() {
    quizIntro.setAttribute("style", "display: none");
    questionSection.setAttribute("style", "display: none");
    quizFinish.setAttribute("style", "display: block");
    
    var timeRemaining = timeLeft

    if (timeLeft >= 0) {
        var timeRemaining = timeLeft;
        clearInterval(holdInterval);
        finalScore.textContent = "Your Score: " + timeRemaining;
    }
  
}

// Logging scores on submit event
scoreSubmitButton.addEventListener("click", function() {
    initialsEntry.textContent = "";

    var initials = initialsEntry.value;

    if (initials === null) {

        console.log("No value logged!");

    } else {
        var finalScore = {
            initials: initials,
            score: timeLeft
        }
        console.log(finalScore);
        var allScores = localStorage.getItem("allScores");
        if (allScores === null) {
            allScores = [];
        } else {
            allScores = JSON.parse(allScores);
        }
        allScores.push(finalScore);
        var newScore = JSON.stringify(allScores);
        localStorage.setItem("allScores", newScore);
        
        displayHighScores();
    }
});

// View highscores section function
function displayHighScores() {
    quizIntro.setAttribute("style", "display: none");
    questionSection.setAttribute("style", "display: none");
    quizFinish.setAttribute("style", "display: none");
    viewHighScoresScreen.setAttribute("style", "display: block");
    
    var allScores = localStorage.getItem("allScores");
    allScores = JSON.parse(allScores);

    if (allScores !== null) {

    for (var x = 0; x < allScores.length; x++) {

        var createLi = document.createElement("li");
        createLi.textContent = allScores[x].initials + " " + allScores[x].score;
        highScoresList.appendChild(createLi);

    }
}

// Clear highscores
resetHighScores.addEventListener("click", function() {
    localStorage.clear();
    highScoresList.textContent = ""
});
}

// Event listeners
viewHighScoresButton.addEventListener("click", displayHighScores);
returnButton.addEventListener("click", displayIntro);
