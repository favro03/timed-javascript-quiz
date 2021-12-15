var body = document.body;
var div = document.div;
var h2El = document.createElement("h2");
var pEl = document.createElement("p");
var p2El = document.createElement("p");
var p3El = document.createElement("p");
var startQuiz = document.querySelector('#start-quiz');
var countEl = document.querySelector('#time');
var question1El=document.createElement("h2");



h2El.textContent = "Coding Quiz Challenge";
body.appendChild(h2El);

pEl.textContent = 'Try to answer the following code related questions within the time limit.';
p2El.textContent = 'Keep in mind that incorrect answers will penalize your score';
p3El.textContent = 'time by ten seconds!';
body.appendChild(pEl);
body.appendChild(p2El);
body.appendChild(p3El);

function setCounterText(){
    countEl.textContent = count;
};

startQuiz.addEventListener('click', function(){
    count =70;
    setCounterText();
    //this is how data was replaced in taskinator, need to figure out how to replace above text with new text document.querySelector("input[name='task-name']").value = "";
    question1El.textContent = 'Commonly used data types DO not Include:';
    body.appendChild(question1El);

})






//Need an ordered list for the answers



//timed quiz on JavaScript fundamentals that stores high scores

//WHEN I click the start button
//THEN a timer starts at 75 and I am presented with a question


//WHEN I answer a question
//THEN I am presented with another question


//WHEN I answer a question incorrectly
//THEN 10 seconds is subtracted from the clock


//WHEN all questions are answered or the timer reaches 0
//THEN the game is over


//WHEN the game is over
//THEN I can save my initials and score
