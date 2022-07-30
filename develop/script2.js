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
        answerText: "Deli Or Market",
        isTrue: false,
    }, {
        answerText: "Document Object Model",
        isTrue: true,
    }]
}, {
    titleText: "Question 2",
    question: "Which option creates an empty array?",
    choices: [{
        answerText: "function array('');",
        isTrue: false,
    }, {
        answerText: "var array = { };",
        isTrue: false,
    }, {
        answerText: "var array;",
        isTrue: false,
    }, {
        answerText: "var array = [ ];",
        isTrue: true,
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
}]

highScoreBtn.addEventListener('click', function (event) {
    event.preventDefault();
})

// idk what I'm doing with this, i only know array.every
// function allAreEqual(object) {
//     return new set(Object.values(object)).size === 1;
// }

function startTimer() {
    startBtn.classList.add('hidden')
    timerTimer = setInterval(function () {
        if (timer > 0) {
            timer--
        } else {
            clearInterval(timerTimer)
            // endQuiz()
        }
        timerText.textContent = timer;
    }, 1000);
    displayQuestion()
}

function displayQuestion() {
    var questionToDisplay = questions[questionIndex];
    h1El.textContent = questionToDisplay.titleText;
    questionArea.textContent = questionToDisplay.question;
    for (var i = 0; i < questionToDisplay.choices.length; i++) {
        var choiceBtn = document.createElement('button');
        choiceBtn.classList.add('buttons')
        choiceBtn.classList.add('whiteText')
        buttonsArea.appendChild(choiceBtn);
    }
    for(var n=0; n <= questionToDisplay.choices.length; n++){
        var answerToDisplay = questionToDisplay.choices[n].answerText;
        console.log(answerToDisplay)
        buttonsArea.children[n].textContent = answerToDisplay;
    }
}

// function addButtons() {
//     buttonsArea.append(buttonOne);
//     buttonsArea.append(buttonTwo);
//     buttonsArea.append(buttonThree);
//     buttonsArea.append(buttonFour);
//     buttonOne.classList.remove('hidden')
//     buttonTwo.classList.remove('hidden')
//     buttonThree.classList.remove('hidden')
//     buttonFour.classList.remove('hidden')
//     return
// }
// function gameEndWin() {
//     console.log("End of game")
//     console.log("Your score is " + timer)
//     h1El.textContent = "You win!"
//     questionArea.textContent = "Your score is " + timer
//     buttonOne.classList.add('hidden')
//     buttonTwo.classList.add('hidden')
//     buttonThree.classList.add('hidden')
//     buttonFour.classList.add('hidden')
//     startBtn.classList.remove('hidden')
//     return
// }


// function questionThreeGo() {
//     h1El.textContent = questionThree.titleText
//     questionArea.textContent = questionThree.question;
//     buttonFour.textContent = questionThree.correct.answerText
//     buttonFour.classList.remove('notThis')
//     buttonFour.classList.add('thisOne');
//     buttonFour.classList.remove('incorrect')
//     buttonOne.textContent = questionThree.false1.answerText
//     buttonOne.classList.remove('thisOne')
//     buttonOne.classList.add('notThis');
//     buttonOne.classList.remove('incorrect')
//     buttonTwo.textContent = questionThree.false2.answerText
//     buttonTwo.classList.remove('thisOne')
//     buttonTwo.classList.add('notThis');
//     buttonTwo.classList.remove('incorrect')
//     buttonThree.textContent = questionThree.false3.answerText
//     buttonThree.classList.remove('thisOne')
//     buttonThree.classList.add('notThis');
//     buttonThree.classList.remove('incorrect')
//     buttonsArea.addEventListener('click', function (event) {
//         console.log(event)
//         if (event.target.matches('.thisOne')) {
//             score++
//             gameEndWin();
//             return
//         } else if (event.target.matches('.notThis')) {
//             event.target.classList.add('incorrect')
//             console.log("wrong");
//             console.log(allAnswered)
//         }
//     })
//     return
// }

// function questionTwoGo() {
//     h1El.textContent = questionTwo.titleText
//     questionArea.textContent = questionTwo.question;
//     buttonThree.textContent = questionTwo.correct.answerText
//     buttonThree.classList.remove('notThis')
//     buttonThree.classList.add('thisOne');
//     buttonThree.classList.remove('incorrect')
//     buttonOne.textContent = questionTwo.false1.answerText
//     buttonOne.classList.remove('thisOne')
//     buttonOne.classList.add('notThis');
//     buttonOne.classList.remove('incorrect')
//     buttonTwo.textContent = questionTwo.false2.answerText
//     buttonTwo.classList.remove('thisOne')
//     buttonTwo.classList.add('notThis');
//     buttonTwo.classList.remove('incorrect')
//     buttonFour.textContent = questionTwo.false3.answerText
//     buttonFour.classList.add('notThis');
//     buttonFour.classList.remove('incorrect')
//     buttonsArea.addEventListener('click', function (event) {
//         console.log(event)
//         if (event.target.matches('.thisOne')) {
//             score++
//             questionThreeGo();
//             return
//         } else if (event.target.matches('.notThis')) {
//             event.target.classList.add('incorrect')
//             console.log("wrong");
//             console.log(allAnswered)
//         }
//     })
//     return
// }

// function questionOneGo() {
//     h1El.textContent = questionOne.titleText
//     questionArea.textContent = questionOne.question;
//     buttonTwo.textContent = questionOne.correct.answerText
//     buttonTwo.classList.remove('notThis')
//     buttonTwo.classList.add('thisOne');
//     buttonOne.textContent = questionOne.false1.answerText
//     buttonOne.classList.remove('thisOne')
//     buttonOne.classList.add('notThis');
//     buttonThree.textContent = questionOne.false2.answerText
//     buttonThree.classList.remove('thisOne')
//     buttonThree.classList.add('notThis');
//     buttonFour.textContent = questionOne.false3.answerText
//     buttonFour.classList.remove('thisOne')
//     buttonFour.classList.add('notThis');
//     buttonsArea.addEventListener('click', function (event) {
//         console.log(event)
//         if (event.target.matches('.thisOne')) {
//             score++
//             questionTwoGo();
//             return
//         } else if (event.target.matches('.notThis')) {
//             event.target.classList.add('incorrect')
//             console.log("wrong");
//             timer = timer - 5;
//             console.log(allAnswered)
//             return
//         }
//     })
//     return
// }


// function getRandomQuestion() {

// }

function startGame() {
    //    score = 0
    startTimer();
    //    addButtons();
    //    questionOneGo();

    console.log(questions)
    return
}

startBtn.addEventListener('click', startGame);

// look up indexOf() for relative DOM stuff for the buttons
// use for loops to iterate the questions as li's into the questionsArea
// do makeTheButtons() then the questions() as different functions