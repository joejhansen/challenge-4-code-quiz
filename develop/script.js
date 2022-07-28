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
var questionOneCorrect
var questionTwoCorrect
var questionThreeCorrect

var buttonOne = document.createElement("li")
buttonOne.setAttribute("class", "buttons thisOne whiteText")
var buttonTwo = document.createElement("li")
buttonTwo.setAttribute("class", "buttons whiteText")
var buttonThree = document.createElement("li")
buttonThree.setAttribute("class", "buttons whiteText")
var buttonFour = document.createElement("li")
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

function questionTwoGo(){
    h1El.textContent = "Question 2"
    questionArea.textContent = questionOne.question;
    buttonsArea.append(buttonOne);
    buttonOne.textContent = questionOne.correct.answerText
    buttonsArea.append(buttonTwo);
    buttonTwo.textContent = questionOne.false1.answerText
    buttonsArea.append(buttonThree);
    buttonThree.textContent = questionOne.false2.answerText
    buttonsArea.append(buttonFour);
    buttonFour.textContent = questionTwo.false3.answerText
}

function questionOneGo() {
    h1El.textContent = "Question 1"
    questionArea.textContent = questionOne.question;
    buttonsArea.append(buttonOne);
    buttonOne.textContent = questionOne.correct.answerText
    buttonsArea.append(buttonTwo);
    buttonTwo.textContent = questionOne.false1.answerText
    buttonsArea.append(buttonThree);
    buttonThree.textContent = questionOne.false2.answerText
    buttonsArea.append(buttonFour);
    buttonFour.textContent = questionTwo.false3.answerText
    buttonsArea.addEventListener('click',function(event){
        console.log(event)
        if(event.target.matches('.thisOne')){
            questionTwoGo();
        }else{
            console.log("Wrong!")
            timer = timer + 5
            return
        }
    })
}



// function getRandomQuestion() {

// }

function startGame() {
    startTimer();
    questionOneGo();
    console.log(questionOne)
}

startBtn.addEventListener('click', startGame);

