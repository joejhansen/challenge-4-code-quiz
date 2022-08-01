// this took a while

// fetching elements
var highScoreArea = document.querySelector("#highScoreDiv")
var startBtn = document.querySelector("#startButton");
var highScoreBtn = document.querySelector("#highScoreLink")
var timerText = document.querySelector("#timerCount")
var buttonsArea = document.querySelector("#buttonsDiv")
var h1El = document.querySelector("#headerOneText")
var questionArea = document.querySelector("#pDescriptionText")
var questionAreaDiv = document.querySelector("#pDescriptionDiv")
var footerArea = document.querySelector('footer')
var footerTextArea = document.createElement('h2')
// this is everything to do with inputting high scores
var formHighScore = document.createElement('form')
var inputHighScore = document.createElement('input')
inputHighScore.setAttribute("type", "text")
inputHighScore.setAttribute("id", "initials")
var submitHighScore = document.createElement('input')
submitHighScore.setAttribute("type", "submit")
submitHighScore.setAttribute("value", "Submit Your Initials")
submitHighScore.setAttribute('class','buttons')
submitHighScore.classList.add('whiteText')
submitHighScore.setAttribute("id","submitBtn")
formHighScore.appendChild(inputHighScore)
formHighScore.appendChild(submitHighScore)

// setting up an empty array for the highscores
var highScores = []
// more global variables
var pushThisHighScore
var yourScore
var yourScoreStringified
var yourScoreParsed
var yourInitials
// the timer count
var timer = 100
// 
// var score = 0
var timerTimer
var questionIndex = 0
var allAnswered = false
var questionsAnswered = 0

var questions = [{
    titleText: "Question 1",
    question: "What does DOM stand for?",
    choices: [{
        answerText: "Direct Object Modifier",
        isTrue: false,
    }, {
        answerText: "Delinear Orientation Method",
        isTrue: false,
    }, {
        answerText: "Document Object Model",
        isTrue: true,
    }, {
        answerText: "Deli or Market",
        isTrue: false,
    }]
}, {
    titleText: "Question 2",
    question: "Which option creates an empty array?",
    choices: [{
        answerText: "var array = [ ];",
        isTrue: true,
    }, {
        answerText: "var array = { };",
        isTrue: false,
    }, {
        answerText: "var array;",
        isTrue: false,
    }, {
        answerText: "function array('');",
        isTrue: false,
    }]
}, {
    titleText: "Question 3",
    question: "Where and in which element should you link your javascript in HTML?",
    choices: [{
        answerText: "Immediately after the <html> tag",
        isTrue: false,
    }, {
        answerText: "Anywhere, it doesn't matter",
        isTrue: false,
    }, {
        answerText: "At the beginning of the <body> tag",
        isTrue: false,
    },
    {
        answerText: "At the very end of the <body> tag",
        isTrue: true,
    }]
}, {
    titleText: "Question 4",
    question: "How would you call a variable labeled variableName in css?",
    choices: [{
        answerText: "var variableName",
        isTrue: false,
    }, {
        answerText: "var(--variableName)",
        isTrue: true,
    }, {
        answerText: "variableName",
        isTrue: false,
    },
    {
        answerText: "variableName();",
        isTrue: false,
    }]
}]

submitHighScore.addEventListener('click', function(event){
    event.preventDefault();
    console.log("It's defaulting");
    yourInitials = inputHighScore.value.trim();
    yourScore = yourInitials.toUpperCase() + ": " + timer;
    highScores.push(yourScore);
    yourScoreStringified = JSON.stringify(highScores);
    console.log(yourScoreStringified);
    questionAreaDiv.removeChild(formHighScore);
    localStorage.setItem("highScores",yourScoreStringified)
    highScoreArea.appendChild(highScoreBtn)
})

function showHighScores(){
    highScoreArea.removeChild(highScoreBtn)
    highScoreArea.appendChild(startBtn)
    // i assume this works because of type coercion
    while (buttonsArea.firstChild) {
        buttonsArea.removeChild(buttonsArea.firstChild);
    }
    h1El.textContent = "High Scores"
    questionArea.textContent = "View scores below"
    for (i = 0; i < highScores.length; i++){
        var highScoreEl = document.createElement('h2')
        highScoreEl.textContent = highScores[i];
        buttonsArea.appendChild(highScoreEl)
    }
}

highScoreBtn.addEventListener('click', function (event) {
    event.preventDefault();
    showHighScores();
    
})

function endGame() {
    clearInterval(timerTimer);
    timerText.textContent = timer
    h1El.textContent = "Your score is : " + timer
    if (timer <= 0) {
        timerText.textContent = 0
        questionArea.textContent = "Sorry, you lose :("
    } else {
        questionArea.textContent = "Congratulations!"
        questionAreaDiv.appendChild(formHighScore)
    }
    console.log("That's all folks")
    while (buttonsArea.firstChild) {
        buttonsArea.removeChild(buttonsArea.firstChild);
    }
    buttonsArea.appendChild(startBtn)
}

// starts the timer
function startTimer() {
    
    timerTimer = setInterval(function () {
        if (timer > 0) {
            timer--
        } else {
            clearInterval(timerTimer)
            endGame();
            // endQuiz()
        }
        timerText.textContent = timer;
    }, 1000);
}

function displayQuestion() {
    // get the index starting at 0 of which question to grab, put it in an easy to read var
    var questionToDisplay = questions[questionIndex];
    // put the titletext in the h1 element
    h1El.textContent = questionToDisplay.titleText;
    // show the question
    questionArea.textContent = questionToDisplay.question;
    for (var i = 0; i < questionToDisplay.choices.length; i++) {
        var choiceBtn = document.createElement('button');
        if (questionToDisplay.choices[i].isTrue) {
            choiceBtn.classList.add('thisOne')
        } else {
            choiceBtn.classList.add('notThis')
        }
        choiceBtn.classList.add('buttons')
        choiceBtn.classList.add('whiteText')
        choiceBtn.textContent = questionToDisplay.choices[i].answerText
        buttonsArea.appendChild(choiceBtn);
    }
    questionIndex++
}

// the bulk of the game
function startGame() {
    // if we've already completed the game and there are more than 1 children in the questionsAreaDiv
    if (questionAreaDiv.childElementCount > 1){
        // we remove the form
        questionAreaDiv.removeChild(formHighScore)
    }
    // otherwise we remove the start button which we know is there.
    while (buttonsArea.firstChild){
        buttonsArea.removeChild(buttonsArea.firstChild)
    }
    while (highScoreArea.firstChild){
        highScoreArea.removeChild(highScoreArea.firstChild)
    }
    timer = 100
    questionIndex = 0
    startTimer();
    displayQuestion();
    return
}



// event listener for starting the game
startBtn.addEventListener('mouseup', startGame);

// event listener for questions
buttonsArea.addEventListener('mouseup', function (event) {
    // if it's the correct one
    if (event.target.matches(".thisOne")) {
        // if we still have questions left
        if (questionIndex < questions.length) {
            // we remove children for as long as there are children in buttonsArea
            while (buttonsArea.firstChild) {
                buttonsArea.removeChild(buttonsArea.firstChild);
            }
            displayQuestion();
        // else the questionIndex will be longer than there are questions and we end the game
        } else {
            endGame();
        }
    // else if you target the incorrect one
    } else if (event.target.matches(".notThis")) {
        timer = timer - 5
        // we turn it red
        event.target.classList.add("incorrect")
    }

})

// get the scores if there are scores
function init(){
    yourScoreParsed = JSON.parse(localStorage.getItem('highScores'));
    if (yourScoreParsed !== null){
        highScores = yourScoreParsed
    }
    console.log(JSON.stringify(yourScoreParsed))
}
init();