var startBtn = document.querySelector("#startButton");
var highScoreBtn = document.querySelector("#highScoreLink")
var timerText = document.querySelector("#timerCount")
var buttonsArea = document.querySelector("#buttonsDiv")
var h1El = document.querySelector("#headerOneText")
var questionArea = document.querySelector("#pDescriptionText")
var footerArea = document.querySelector('footer')
var footerTextArea = document.createElement('h2')
var timer = 100
var score = 0

var questionOne = {
    titleText: "Question 1",
    question: "What does DOM stand for?",
    false1: {
        answerText: "Direct Object Modifier",
        isTrue: false,
    },
    false2: {
        answerText: "Delinear Orientation Method",
        isTrue: false,
    },
    false3: {
        answerText: "Deli Or Market",
        isTrue: false,
    },
    correct: {
        answerText: "Document Object Model",
        isTrue: true,
    }
}


var questionTwo = {
    titleText: "Question 2",
    question: "Which option creates an empty array?",
    false1: {
        answerText: "function array('');",
        isTrue: false,
    },
    false2: {
        answerText: "var array = { };",
        isTrue: false,
    },
    false3: {
        answerText: "var array;",
        isTrue: false,
    },
    correct: {
        answerText: "var array = [ ];",
        isTrue: true,
    }
}


var questionThree = {
    titleText: "Question 3",
    question: "Where and in which element should you link your javascript in HTML?",
    false1: {
        answerText: "Immediately after the <html> tag",
        isTrue: false,
    },
    false2: {
        answerText: "Anywhere, it doesn't matter",
        isTrue: false,
    },
    false3: {
        answerText: "At the beginning of the <body> tag",
        isTrue: false,
    },
    correct: {
        answerText: "At the very end of the <body> tag",
        isTrue: true,
    }
}
var allAnswered = false

var allTheQuestions = {
    questionOne,
    questionTwo,
    questionThree,
}


var buttonOne = document.createElement("li")
buttonOne.setAttribute("class", "buttons whiteText")
var buttonTwo = document.createElement("li")
buttonTwo.setAttribute("class", "buttons whiteText")
var buttonThree = document.createElement("li")
buttonThree.setAttribute("class", "buttons whiteText")
var buttonFour = document.createElement("li")
buttonFour.setAttribute("class", "buttons whiteText")

allTheButtons = {
    buttonOne,
    buttonTwo,
    buttonThree,
    buttonFour,
}

highScoreBtn.addEventListener('click', function (event) {
    event.preventDefault();
})

// idk what I'm doing with this, i only know array.every
function allAreEqual(object) {
    return new set(Object.values(object)).size === 1;
}

var timerTimer

function startTimer() {
    timer = 100
    startBtn.classList.add('hidden')
    timerTimer = setInterval(function () {
        if (score > 3) {
            clearInterval(timerTimer);
        } else if (timer < 1) {
            clearInterval(timerTimer);
            h1El.textContent = "You Lose!"
            questionArea.textContent = "Sorry"
            buttonOne.classList.add('hidden')
            buttonTwo.classList.add('hidden')
            buttonThree.classList.add('hidden')
            buttonFour.classList.add('hidden')
            startBtn.classList.remove('hidden')
        };
        timer--;
        timerText.textContent = timer;
    }, 1000);

}

function addButtons() {
    buttonsArea.append(buttonOne);
    buttonsArea.append(buttonTwo);
    buttonsArea.append(buttonThree);
    buttonsArea.append(buttonFour);
    buttonOne.classList.remove('hidden')
    buttonTwo.classList.remove('hidden')
    buttonThree.classList.remove('hidden')
    buttonFour.classList.remove('hidden')
    return
}
function gameEndWin() {
    console.log("End of game")
    console.log("Your score is " + timer)
    h1El.textContent = "You win!"
    questionArea.textContent = "Your score is " + timer
    buttonOne.classList.add('hidden')
    buttonTwo.classList.add('hidden')
    buttonThree.classList.add('hidden')
    buttonFour.classList.add('hidden')
    startBtn.classList.remove('hidden')
    return
}


function questionThreeGo() {
    h1El.textContent = questionThree.titleText
    questionArea.textContent = questionThree.question;
    buttonFour.textContent = questionThree.correct.answerText
    buttonFour.classList.remove('notThis')
    buttonFour.classList.add('thisOne');
    buttonFour.classList.remove('incorrect')
    buttonOne.textContent = questionThree.false1.answerText
    buttonOne.classList.remove('thisOne')
    buttonOne.classList.add('notThis');
    buttonOne.classList.remove('incorrect')
    buttonTwo.textContent = questionThree.false2.answerText
    buttonTwo.classList.remove('thisOne')
    buttonTwo.classList.add('notThis');
    buttonTwo.classList.remove('incorrect')
    buttonThree.textContent = questionThree.false3.answerText
    buttonThree.classList.remove('thisOne')
    buttonThree.classList.add('notThis');
    buttonThree.classList.remove('incorrect')
    buttonsArea.addEventListener('click', function (event) {
        console.log(event)
        if (event.target.matches('.thisOne')) {
            score++
            gameEndWin();
            return
        } else if (event.target.matches('.notThis')) {
            event.target.classList.add('incorrect')
            console.log("wrong");
            console.log(allAnswered)
        }
    })
    return
}

function questionTwoGo() {
    h1El.textContent = questionTwo.titleText
    questionArea.textContent = questionTwo.question;
    buttonThree.textContent = questionTwo.correct.answerText
    buttonThree.classList.remove('notThis')
    buttonThree.classList.add('thisOne');
    buttonThree.classList.remove('incorrect')
    buttonOne.textContent = questionTwo.false1.answerText
    buttonOne.classList.remove('thisOne')
    buttonOne.classList.add('notThis');
    buttonOne.classList.remove('incorrect')
    buttonTwo.textContent = questionTwo.false2.answerText
    buttonTwo.classList.remove('thisOne')
    buttonTwo.classList.add('notThis');
    buttonTwo.classList.remove('incorrect')
    buttonFour.textContent = questionTwo.false3.answerText
    buttonFour.classList.add('notThis');
    buttonFour.classList.remove('incorrect')
    buttonsArea.addEventListener('click', function (event) {
        console.log(event)
        if (event.target.matches('.thisOne')) {
            score++
            questionThreeGo();
            return
        } else if (event.target.matches('.notThis')) {
            event.target.classList.add('incorrect')
            console.log("wrong");
            console.log(allAnswered)
        }
    })
    return
}

function questionOneGo() {
    h1El.textContent = questionOne.titleText
    questionArea.textContent = questionOne.question;
    buttonTwo.textContent = questionOne.correct.answerText
    buttonTwo.classList.remove('notThis')
    buttonTwo.classList.add('thisOne');
    buttonOne.textContent = questionOne.false1.answerText
    buttonOne.classList.remove('thisOne')
    buttonOne.classList.add('notThis');
    buttonThree.textContent = questionOne.false2.answerText
    buttonThree.classList.remove('thisOne')
    buttonThree.classList.add('notThis');
    buttonFour.textContent = questionOne.false3.answerText
    buttonFour.classList.remove('thisOne')
    buttonFour.classList.add('notThis');
    buttonsArea.addEventListener('click', function (event) {
        console.log(event)
        if (event.target.matches('.thisOne')) {
            score++
            questionTwoGo();
            return
        } else if (event.target.matches('.notThis')) {
            event.target.classList.add('incorrect')
            console.log("wrong");
            timer = timer - 5;
            console.log(allAnswered)
            return
        }
    })
    return
}


// function getRandomQuestion() {

// }

function startGame() {
    score = 0
    startTimer();
    addButtons();
    questionOneGo();
    console.log(questionOne)
    return
}

startBtn.addEventListener('click', startGame);

// look up indexOf() for relative DOM stuff for the buttons
// use for loops to iterate the questions as li's into the questionsArea
// do makeTheButtons() then the questions() as different functions