var body = document.body;
var infoEl = document.querySelector("#intro");
var question1El = document.querySelector("#question1");
var question2El = document.querySelector("#question2");
var startQuiz = document.querySelector('#start-quiz');
var countEl = document.querySelector('#time');



var setCounterText =function(){
    countEl.textContent = count;
};

startQuiz.addEventListener('click', function(){
    count =70;
    setCounterText();
    infoEl.style.display = 'none';
    question1El.style.display = 'inline';
    //this is how data was replaced in taskinator, need to figure out how to replace above text with new text document.querySelector("input[name='task-name']").value = "";
   // h2El.textContent = 'Commonly used data types DO not Include:';
    //pEl.remove();
   // startQuiz.remove();
   
    //btnAnswer1.innerHTML = "1. string"; 
    //btnAnswer2.innerHTML = "2. booleans"; 
    //btnAnswer3.innerHTML = "3. alerts"; 
    //btnAnswer4.innerHTML = "4. numbers";   
    //appendButtons();
    //formatButtons();
    
    //do an if else and event listners to the buttons to if they click the right one go to next q, else wrong answer and =tinen taken away
   
});



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
