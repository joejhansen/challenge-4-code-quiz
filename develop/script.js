var startBtn = document.querySelector("#startButton");
var highScoreBtn = document.querySelector("#highScoreLink")
var timerText = document.querySelector("#timerCount")
var buttonsArea = document.querySelector("#buttonsDiv")
var h1El = document.querySelector("#headerOneText")
var questionArea = document.querySelector("#pDescriptionText")
var timer = 0

var questionOne = {
    question: "This is the first question?",
    false1: {
        answerText: "answerfalseOne",
        isTrue: false,
    },
    false2: {
        answerText: "answerflasetwo",
        isTrue: false,
    },
    false3: {
        answerText: "answerfalsethree",
        isTrue: false,
    },
    correct: {
        answerText: "This is the right one!",
        isTrue: true,
    }
}


var questionTwo = {
    question: "This is the second question?",
    false1: {
        answerText: "answerfalseOne",
        isTrue: false,
    },
    false2: {
        answerText: "answerflasetwo",
        isTrue: false,
    },
    false3: {
        answerText: "answerfalsethree",
        isTrue: false,
    },
    correct: {
        answerText: "This is the right one!",
        isTrue: true,
    }
}


var questionThree = {
    question: "This is the third question?",
    false1: {
        answerText: "answerfalseOne",
        isTrue: false,
    },
    false2: {
        answerText: "answerflasetwo",
        isTrue: false,
    },
    false3: {
        answerText: "answerfalsethree",
        isTrue: false,
    },
    correct: {
        answerText: "This is the right one!",
        isTrue: true,
    }
}
var allAnswered
var allTheQuestions

var buttonOne = document.createElement("div")
buttonOne.setAttribute("class", "buttons whiteText")
var buttonTwo = document.createElement("div")
buttonTwo.setAttribute("class", "buttons whiteText")
var buttonThree = document.createElement("div")
buttonThree.setAttribute("class", "buttons whiteText")
var buttonFour = document.createElement("div")
buttonFour.setAttribute("class", "buttons whiteText")

highScoreBtn.addEventListener('click', function (event) {
    event.preventDefault();
})



function startTimer() {
    startBtn.setAttribute("class", "hidden")
    var timerTimer = setInterval(function () {
        timer++;
        timerText.textContent = timer;
        if (allAnswered) {
            clearInterval(timerTimer);
            return
        };
    }, 1000);

}

function addButtons() {
    h1El.textContent = "Question 1"
    questionArea.textContent = questionOne.question;
    buttonsArea.append(buttonOne);
    buttonOne.textContent = "These"
    buttonsArea.append(buttonTwo);
    buttonTwo.textContent = "are"
    buttonsArea.append(buttonThree);
    buttonThree.textContent = "the"
    buttonsArea.append(buttonFour);
    buttonFour.textContent = "answers"
}

function getRandomQuestion() {

}

function startGame() {
    startTimer();
    addButtons();
    console.log(questionOne)
}

startBtn.addEventListener('click', startGame);