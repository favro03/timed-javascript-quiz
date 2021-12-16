var body = document.body;
var infoEl = document.querySelector("#intro");
var question1El = document.querySelector("#question1");
var question2El = document.querySelector("#question2");
var question3El = document.querySelector("#question3");
var question4El = document.querySelector('#question4');
var question5El = document.querySelector('#question5');

var doneEl = document.querySelector("#done");

var startQuiz = document.querySelector('#start-quiz');
var countEl = document.querySelector('#time');

var btnQ1Answer1=document.querySelector('#btnQ1Answer1');
var btnQ1Answer2=document.querySelector('#btnQ1Answer2');
var btnQ1Answer3=document.querySelector('#btnQ1Answer3');
var btnQ1Answer4=document.querySelector('#btnQ1Answer4');

var btnQ2Answer1=document.querySelector('#btnQ2Answer1');
var btnQ2Answer2=document.querySelector('#btnQ2Answer2');
var btnQ2Answer3=document.querySelector('#btnQ2Answer3');
var btnQ2Answer4=document.querySelector('#btnQ2Answer4');

var btnQ3Answer1=document.querySelector('#btnQ3Answer1');
var btnQ3Answer2=document.querySelector('#btnQ3Answer2');
var btnQ3Answer3=document.querySelector('#btnQ3Answer3');
var btnQ3Answer4=document.querySelector('#btnQ3Answer4');

var btnQ4Answer1=document.querySelector('#btnQ4Answer1');
var btnQ4Answer2=document.querySelector('#btnQ4Answer2');
var btnQ4Answer3=document.querySelector('#btnQ4Answer3');
var btnQ4Answer4=document.querySelector('#btnQ4Answer4');

var btnQ5Answer1=document.querySelector('#btnQ5Answer1');
var btnQ5Answer2=document.querySelector('#btnQ5Answer2');
var btnQ5Answer3=document.querySelector('#btnQ5Answer3');
var btnQ5Answer4=document.querySelector('#btnQ5Answer4');

var correct1El = document.querySelector('#correct');
var wrong1El = document.querySelector('#wrong');

var correct2El = document.querySelector('#correct2');
var wrong2El = document.querySelector('#wrong2');

var correct3El = document.querySelector('#correct3');
var wrong3El = document.querySelector('#wrong3');

var correct4El = document.querySelector('#correct4');
var wrong4El = document.querySelector('#wrong4');

var correct5El = document.querySelector('#correct5');
var wrong5El = document.querySelector('#wrong5');

var correctAnswer=false;


var setCounterText =function(){
    countEl.textContent = count;
};
var counter = function(){
//create a count down function?  or this be a for loop or while loop??? need to think about this
};

startQuiz.addEventListener('click', function(){
    count =75;
    setCounterText();
    infoEl.style.display = 'none';
    question1El.style.display='block';
   

    //if #btnQ1Answer3 clicked (event listner hide question1EL and display Question 2 and #correct1)
});
//question1

btnQ1Answer1.addEventListener('click', function(){
    question1();
});
btnQ1Answer2.addEventListener('click', function(){ 
    question1();
});
btnQ1Answer3.addEventListener('click', function(){
    correctAnswer = true;
    question1();
});
btnQ1Answer4.addEventListener('click', function(){
    question1();
});

var question1 = function(){
    if (correctAnswer === true){
        question1El.style.display ='none';
        question2El.style.display ='block';
        correct1El.style.display = 'block';
    }
    else {
        question1El.style.display ='none';
        question2El.style.display ='block';
        wrong1El.style.display = 'block';
       
    }
correctAnswer=false;
};
//Question2

btnQ2Answer1.addEventListener('click', function(){
    question2();
});
btnQ2Answer2.addEventListener('click', function(){ 
    question2();
});
btnQ2Answer3.addEventListener('click', function(){
    correctAnswer = true;
    question2();
});
btnQ2Answer4.addEventListener('click', function(){
    question2();
});

var question2 = function(){
    if (correctAnswer === true){
        question2El.style.display ='none';
        question3El.style.display = 'block';
        correct1El.style.display = 'none';
        wrong1El.style.display = 'none';
        correct2El.style.display = 'block';
        
       
    }
    else {
        question2El.style.display ='none';
        question3El.style.display = 'block';
        wrong1El.style.display = 'none';
        correct1El.style.display = 'none';
        wrong2El.style.display = 'block';
       
    }
correctAnswer = false;
};

//question 3
btnQ3Answer1.addEventListener('click', function(){
    question3();
});
btnQ3Answer2.addEventListener('click', function(){ 
    question3();
});
btnQ3Answer3.addEventListener('click', function(){
    
    question3();
});
btnQ3Answer4.addEventListener('click', function(){
    correctAnswer = true;
    question3();
});

var question3 = function(){
    if (correctAnswer === true){
        question3El.style.display ='none';
        question4El.style.display = 'block';
        correct2El.style.display = 'none';
        wrong2El.style.display = 'none';
        correct3El.style.display = 'block';
        
       
    }
    else {
        question3El.style.display ='none';
        question4El.style.display = 'block';
        wrong2El.style.display = 'none';
        correct2El.style.display = 'none';
        wrong3El.style.display = 'block';
       
    }
correctAnswer = false;
};

//question 4
btnQ4Answer1.addEventListener('click', function(){
    question4();
});
btnQ4Answer2.addEventListener('click', function(){ 
    question4();
});
btnQ4Answer3.addEventListener('click', function(){
    question4();
});
btnQ4Answer4.addEventListener('click', function(){
    correctAnswer = true;
    question4();
});

var question4 = function(){
    if (correctAnswer === true){
        question4El.style.display ='none';
        question5El.style.display = 'block';
        correct3El.style.display = 'none';
        wrong3El.style.display = 'none';
        correct4El.style.display = 'block';
        
       
    }
    else {
        question4El.style.display ='none';
        question5El.style.display = 'block';
        wrong3El.style.display = 'none';
        correct3El.style.display = 'none';
        wrong4El.style.display = 'block';
       
    }
correctAnswer = false;
};

//question 5
btnQ5Answer1.addEventListener('click', function(){
    question5();
});
btnQ5Answer2.addEventListener('click', function(){ 
    question5();
});
btnQ5Answer3.addEventListener('click', function(){
    question5();
});
btnQ5Answer4.addEventListener('click', function(){
    correctAnswer = true;
    question5();
});

var question5 = function(){
    if (correctAnswer === true){
        question5El.style.display ='none';
        doneEl.style.display = 'block';
        correct4El.style.display = 'none';
        wrong4El.style.display = 'none';
        correct5El.style.display = 'block';
        
       
    }
    else {
        question5El.style.display ='none';
        doneEl.style.display = 'block';
        wrong4El.style.display = 'none';
        correct4El.style.display = 'none';
        wrong5El.style.display = 'block';
       
    }
correctAnswer = false;
};





//timed quize starting with 75 seconds, if you get it wrong it takes off an additional 10 seconds



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
