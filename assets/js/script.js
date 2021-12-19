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



quizEl.style.display = 'none';
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
    answer1El.style.display = 'block';
    answer2El.style.display = 'block';
    answer3El.style.display = 'block';
    answer4El.style.display = 'block';
    
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
   
    answer1El.style.display ='none';
    answer2El.style.display ='none';
    answer3El.style.display ='none';
    answer4El.style.display ='none';
    stopFunction();
    questionEl.textContent = 'All done!';
    finalScoreEl.textContent = 'Your final score is ' + timeLeft;
    //initialsEl.textContent = 'Enter initials: ';
    formEl.style.display = 'flex    ';
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
            quizEl.style.display = 'block';
            correctEl.textContent = 'Correct!';
            count --;
            
        }
        else if (count > 0 & correctAnswer === false) {
                quizEl.style.display = 'block';
                wrongEl.textContent = 'Wrong!';
                count --;
        }
        else{
            correctEl.textContent = '';
            wrongEl.textContent = '';
            quizEl.style.display = 'none';
            clearInterval(answerInterval);
        }
    }, 1000);
    
};

//See if this is even working
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




  
