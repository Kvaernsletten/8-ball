let app = document.getElementById('app');
let answerText = 8;
let answerList = [

    "I don't know",
    "Maybe later",
    "Yes",
    "Of course!",
    "Probably not..",
    "Definitely not!",
    "Hopefully...",
    "Look within yourself for the answer",
    "Nope",
    "Never in a million years!",
    "Possibly?",
    
]
let randomNumber;
let previousRandomNumber;




updateView();
function updateView() {
    app.innerHTML = /*HTML*/ `
        <div class="outer circle shapeborder" onclick="getAnswer()">
        <div class="inner circle shapeborder">${answerText}</div>
        </div>
    `;
}

function getAnswer(){

    randomNumber = Math.floor(Math.random() * 11);
    if(randomNumber == previousRandomNumber){
        getAnswer();
    }
    previousRandomNumber = randomNumber;
    answerText = answerList[randomNumber]
    updateView();
}