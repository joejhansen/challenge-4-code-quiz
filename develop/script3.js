var startBtn = document.querySelector("#startButton");
var highScoreBtn = document.querySelector("#highScoreLink")
var timerText = document.querySelector("#timerCount")
var buttonsArea = document.querySelector("#buttonsDiv")
var h1El = document.querySelector("#headerOneText")
var questionArea = document.querySelector("#pDescriptionText")
var questionAreaDiv = document.querySelector("#pDescriptionDiv")
var footerArea = document.querySelector('footer')
var footerTextArea = document.createElement('h2')
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

var timer = 100
var score = 0
var timerTimer
var questionIndex = 0
var allAnswered = false
var questionsAnswered = 0

submitHighScore.addEventListener('click', function(event){
    event.preventDefault();
    console.log("It's defaulting")
    var yourInitials = inputHighScore.value
    localStorage.setItem("intials", yourInitials)
})

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

highScoreBtn.addEventListener('click', function (event) {
    event.preventDefault();
    console.log("It's defaulting")
})

function endGame() {
    clearInterval(timerTimer);
    timerText.textContent = timer
    h1El.textContent = "Your score is : " + timer
    if (timer <= 0) {
        questionArea.textContent = "Sorry, you lose :("
    } else {
        questionArea.textContent = "Congratulations!"
    }
    console.log("That's all folks")
    while (buttonsArea.firstChild) {
        buttonsArea.removeChild(buttonsArea.firstChild);
    }
    questionAreaDiv.appendChild(formHighScore)
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
    var questionToDisplay = questions[questionIndex];
    h1El.textContent = questionToDisplay.titleText;
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
    buttonsArea.removeChild(startBtn)
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