var body = document.body;
var questionEl = document.getElementById('question');
var answer1El = document.getElementById('btnAnswer1');
var answer2El = document.getElementById('btnAnswer2');
var answer3El = document.getElementById('btnAnswer3');
var answer4El = document.getElementById('btnAnswer4');
var correctEl = document.getElementById('correct');
var wrongEl = document.getElementById('wrong');
var correct2El = document.getElementById('correct2');
var wrong2El = document.getElementById('wrong2');
var finalScoreEl = document.getElementById('final-score');
var initialsEl = document.getElementById('initials');
var formEl = document.getElementById('initial-form');
var submitEl = document.getElementById('end');
var btnEl = document.getElementsByClassName('btn');
var infoEl = document.querySelector("#intro");
var startQuizEl = document.querySelector('#start-quiz');
var timerEl = document.getElementById('time');
var correctAnswer = "";
var quizEl = document.getElementById('right-wrong');

var timeLeft = 75;



startQuizEl.addEventListener('click', function(){
    infoEl.style.display = 'none';
    timer();
    question1();  
});

var timer = function(){
    

    var timeInterval = setInterval(function(){
        if (timeLeft > 0){
            timerEl.textContent = 'Time: ' + timeLeft;
            timeLeft --;
        }

        else if (timeLeft <= 0){
            end();
            clearInterval(timeInterval);
            timerEl.textContent = 'Time: 0';   
        }

        
        //else if ({
            //var endTime = timeLeft
            //clearInterval(timeInterval);
            //timerEl.textContent = 'Time: ' + timeLeft;
            
       // }
       
    }, 1000);
};

var stopFunction = function() {
    clearInterval(timer);
    timerEl.textContent = 'Time: '; + timeLeft;
};


var question1 = function() {
   
    
    questionEl.textContent = 'Commonly used data types DO Not Include:';
    answer1El.textContent = '1. strings';
    answer2El.textContent = '2. booleans';
    answer3El.textContent = '3. alerts';
    answer4El.textContent = '4. numbers';

    answer1El.addEventListener('click', function(){
        correctAnswer = false;
        clearInterval(timer);
        timeLeft -= 10;
        question2(); 
        timer();    
       
    });
    answer2El.addEventListener('click', function(){
        correctAnswer = false;
        question2();
        return correctAnswer;
        
    });
    answer3El.addEventListener('click', function(){
        correctAnswer = true;
        question2();
    });
    answer4El.addEventListener('click', function(){
        correctAnswer = false;
        question2();
        return correctAnswer;
    });
};



var question2 = function() {
    questionEl.textContent = 'The condition in an if/else statement is enclosed ________________.';
    answer1El.textContent = '1. quotes';
    answer2El.textContent = '2. curly brackets';
    answer3El.textContent = '3. parenthesis';
    answer4El.textContent = '4. square brackets';
    
    
       
    answer1El.addEventListener('click', function(){
        correctAnswer = false;
        
        question3();
        return correctAnswer;
        
    });
    answer2El.addEventListener('click', function(){
        correctAnswer = false;
        question3();
        return correctAnswer;
    });
    answer3El.addEventListener('click', function(){
        correctAnswer = true;
        question3();
    });
    answer4El.addEventListener('click', function(){
        correctAnswer = false;
        question3();
        return correctAnswer;
    });
    answerResponse();
    
};

var question3 = function() {
    questionEl.textContent = 'Arrays in JavaScript can be used to store ________________.';
    answer1El.textContent = '1. numbers and strings';
    answer2El.textContent = '2. other arrays';
    answer3El.textContent = '3. booleans';
    answer4El.textContent = '4. all of the above';
    
    answer1El.addEventListener('click', function(){
        correctAnswer = false;
        question4();
        return correctAnswer;
    });
    answer2El.addEventListener('click', function(){
        correctAnswer = false;
        question4();
        return correctAnswer;
    });
    answer3El.addEventListener('click', function(){
        correctAnswer = false;
        question4();
        return correctAnswer;
    });
    answer4El.addEventListener('click', function(){
        correctAnswer = true;
        question4();
    });
    answerResponse();
};

var question4 = function() {
    questionEl.textContent = 'String values must be enclosed within _______________ when being assigned to variables.';
    answer1El.textContent = '1. commas';
    answer2El.textContent = '2. curly brackets';
    answer3El.textContent = '3. quotes';
    answer4El.textContent = '4. parenthesis';
  
    answer1El.addEventListener('click', function(){
        correctAnswer = false;
        question5();
        return correctAnswer
    });
    answer2El.addEventListener('click', function(){
        correctAnswer = false;
        question5();
        return correctAnswer;
    });
    answer3El.addEventListener('click', function(){
        correctAnswer = false;
        question5();
        return correctAnswer;
    });
    answer4El.addEventListener('click', function(){
        correctAnswer = true;
        question5();
    });
    answerResponse();
};

var question5 = function() {
    questionEl.textContent = 'A very useful tool used during development and debugging for printing content to the debugger is:';
    answer1El.textContent = '1. JavaScript';
    answer2El.textContent = '2. terminal/bash';
    answer3El.textContent = '3. for loops';
    answer4El.textContent = '4. console.log';
  
    answer1El.addEventListener('click', function(){
        correctAnswer = false;
        end();
        return correctAnswer;
    });
    answer2El.addEventListener('click', function(){
        correctAnswer = false;
        end();
        return correctAnswer;
    });
    answer3El.addEventListener('click', function(){
        correctAnswer = false;
        end();
        return correctAnswer;
    });
    answer4El.addEventListener('click', function(){
        correctAnswer = true;
        end();
    });
    answerResponse();
   
};




//need to fix the timer removal here I want the timer to show 0, and I think maybe use the html for the score stuff and hide it in css and just show it in thsi function
var end = function(){
    questionEl.style.display ='none';
    answer1El.style.display ='none';
    answer2El.style.display ='none';
    answer3El.style.display ='none';
    answer4El.style.display ='none';
    stopFunction();
    questionEl.textContent = 'All done!';
    finalScoreEl.textContent = 'Your final score is ' + timeLeft;
    initialsEl.textContent = 'Enter initials: ';
    formEl.style.display = 'block';
    answerResponse();
    return true;
    

   
    //this is not showing up in the right place
    //answerResponse();
    
//Don't think this works
/*
    answerResponse();
    timerEl.textContent = '0';
      //use clearinterval() to stop the timer
    clearInterval(timer);
      //call the displaymessage() function
    displayMessage()
    */
    
};

var answerResponse = function(){
    var count = 2;
    var answerInterval = setInterval(function(){
       
        if (count > 0 & correctAnswer === true){
            correctEl.style.display = 'block';
            correctEl.textContent = 'Correct!';
            count --;
            
        }
        else if (count > 0 & correctAnswer === false) {
                wrongEl.style.display = 'block';
                wrongEl.textContent = 'Wrong!';
                count --;
        }
        else{
            correctEl.textContent = '';
            wrongEl.textContent = '';
            //quizEl.style.display = '';
         
            clearInterval(answerInterval);
           
        }
        
    }, 1000);
    
};


var initialFormHandler = function (event) {
    event.preventDefault();
    var initialNameInput = document.querySelector("input[name='user-initials']").value;
    
  
    // check if inputs are empty (validate)
    if (!initialNameInput) {
      alert("You need to fill out the initial form!");
      return false;

      btnEl.addEventListener
    }
    var taskButtonHandler = function (event) {
        // get target element from event
        var targetEl = event.target;
    
        if (targetEl.matches(".delete-btn")) {
          var taskId = targetEl.getAttribute("data-task-id");
          deleteTask(taskId);
        }
      };
  };

  
//NEED to get the end to work and the timer to work, and need to store score

/*

var doneEl = document.querySelector("#done");
var finalScoreEl = document.getElementById('final-score');

var correctAnswer=false;

var countdown = function(){
    var count =40;
    startQuiz.addEventListener('click', function(){
        var counter = setInterval(function(){
            if (count > 0){
                timerEl.textContent = 'Time: ' + count;
                count --;
            }
            else if (count <= 0){
                end();
            }
        }, 1000);

        infoEl.style.display = 'none';
        question1El.style.display='block';
    });
//question1
};

var q1 = function(){
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
};

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
        count =- 10; 
    }
correctAnswer=false;
};
//Question2
var q2 = function(){
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
};
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
        count =- 10; 
    }
correctAnswer = false;
};

//question 3
var q3 = function(){
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
};

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
        count =- 10;
    }
correctAnswer = false;
};

//question 4
var q4 = function(){
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
};
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
        count =- 10;
    }
correctAnswer = false;
};

//question 5
var q5 = function(){
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
}
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
        count =- 10;
        //add local storage or function for local storage
        //add function for data input if its not initials
    }
correctAnswer = false;
};

var end = function(){
    doneEl.style.display = 'block';
    finalScoreEl.textContent = 'Your final score is' + count;
    //Need to get the p element + count
    //add local storage or function for local storage
    //add function for data input if its not initials
};





//timed quize starting with 75 seconds, if you get it wrong it takes off an additional 10 seconds



//timed quiz on JavaScript fundamentals that stores high scores







//WHEN I answer a question incorrectly
//THEN 10 seconds is subtracted from the clock


//WHEN all questions are answered or the timer reaches 0
//THEN the game is over


//WHEN the game is over
//THEN I can save my initials and score
countdown();
q1();
q2();
q3();
q4();
q5();
*/