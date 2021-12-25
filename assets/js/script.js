var body = document.body;
var questionEl = document.getElementById('question');
var finalScoreEl = document.getElementById('final-score');
var done = document.getElementById('done');

var formEl = document.getElementById('initial-form');

var btnEl = document.getElementsByClassName('btn');
var infoEl = document.querySelector("#intro");
var startQuizEl = document.querySelector('#start-quiz');
var timerEl = document.getElementById('time');

var listItemEl = document.getElementById('list');
var input = document.getElementById('score-button');
var userInput = document.getElementById('initials');




//var deleteButton = document.getElementById('clear');
var initialInput = document.querySelector("input[name='initials']");



var timeLeft = 75;
var stopTime = 0;
var subtractTen = 10;

var q1Answer1 = document.createElement("button");
var q1Answer2 = document.createElement("button");
var q1Answer3 = document.createElement("button");
var q1Answer4 = document.createElement("button");

var q2Answer1 = document.createElement("button");
var q2Answer2 = document.createElement("button");
var q2Answer3 = document.createElement("button");
var q2Answer4 = document.createElement("button");

var q3Answer1 = document.createElement("button");
var q3Answer2 = document.createElement("button");
var q3Answer3 = document.createElement("button");
var q3Answer4 = document.createElement("button");

var q4Answer1 = document.createElement("button");
var q4Answer2 = document.createElement("button");
var q4Answer3 = document.createElement("button");
var q4Answer4 = document.createElement("button");

var q5Answer1 = document.createElement("button");
var q5Answer2 = document.createElement("button");
var q5Answer3 = document.createElement("button");
var q5Answer4 = document.createElement("button");

var form = document.createElement("FORM");

//var highScoreTitle = document.createElement("h2");

//listEl goes directly to the Ordered list, 
//should be able to create an element in the list by id




// when you click the button the quiz starts
startQuizEl.addEventListener('click', function(){
    infoEl.style.display = 'none';
    timer();
    question1();  
});

//Timer functions start, stop and add 10 seconds
var timeInterval = setInterval(function(){});
var timer = function(){
    timeInterval = setInterval(function(){
        if (timeLeft > 0){
            timerEl.textContent = 'Time: ' + timeLeft;
            timeLeft --;
        }
        else if (timeLeft <= 0){
            endQuiz();
            rightOrWrongEl.remove();
            q1Answer1.remove();
            q1Answer2.remove();
            q1Answer3.remove();
            q1Answer4.remove();

            q2Answer1.remove();
            q2Answer2.remove();
            q2Answer3.remove();
            q2Answer4.remove();

            q3Answer1.remove();
            q3Answer2.remove();
            q3Answer3.remove();
            q3Answer4.remove();

            q4Answer1.remove();
            q4Answer2.remove();
            q4Answer3.remove();
            q4Answer4.remove();

            q5Answer1.remove();
            q5Answer2.remove();
            q5Answer3.remove();
            q5Answer4.remove();

            timerEl.textContent = 'Time: 0';   
        }      
    }, 1000);
};

var stopTimer = function() {
    clearInterval(timeInterval);
    timerEl.textContent = "Time: " + timeLeft;   
};

var subtractTenFromTimer = function() {
    clearInterval(timeInterval);
    timeLeft = timeLeft - subtractTen;
    timer(); 
};

//Questions
//Question 1
var question1 = function() {
    questionEl.textContent = 'Commonly used data types DO Not Include:';
   
    q1Answer1.innerHTML = "1. strings";
    q1Answer1.className = 'btn';
    document.body.appendChild(q1Answer1);
    q1Answer1.addEventListener('click', function(){
        correctAnswer = false;
        subtractTenFromTimer();
        question2();
        q1Answer1.remove();
        q1Answer2.remove();
        q1Answer3.remove();
        q1Answer4.remove();
        return correctAnswer;
    });
 
    q1Answer2.innerHTML = "2. booleans";
    q1Answer2.className = 'btn';
    document.body.appendChild(q1Answer2);
    q1Answer2.addEventListener('click', function(){
        correctAnswer = false;
        subtractTenFromTimer();
        question2();
        q1Answer1.remove();
        q1Answer2.remove();
        q1Answer3.remove();
        q1Answer4.remove();
        return correctAnswer;
    });

    q1Answer3.innerHTML = "3. alerts";
    q1Answer3.className = 'btn';
    document.body.appendChild(q1Answer3);
    q1Answer3.addEventListener('click', function(){
        correctAnswer = true;
        question2();
        q1Answer1.remove();
        q1Answer2.remove();
        q1Answer3.remove();
        q1Answer4.remove();
        return correctAnswer;
    });

    q1Answer4.innerHTML = "4. numbers";
    q1Answer4.className = 'btn';
    document.body.appendChild(q1Answer4);
    q1Answer4.addEventListener('click', function(){
        correctAnswer = false;
        subtractTenFromTimer();
        question2();
        q1Answer1.remove();
        q1Answer2.remove();
        q1Answer3.remove();
        q1Answer4.remove();
        return correctAnswer;
    });
};

//question 2
var question2 = function() {  
    questionEl.textContent = 'The condition in an if/else statement is enclosed ________________.';
    
    q2Answer1.innerHTML = "1. quotes";
    q2Answer1.className = 'btn';
    document.body.appendChild(q2Answer1);
    q2Answer1.addEventListener('click', function(){
        correctAnswer = false;
        subtractTenFromTimer();
        question3();
        q2Answer1.remove();
        q2Answer2.remove();
        q2Answer3.remove();
        q2Answer4.remove();
        return correctAnswer;
    });

    q2Answer2.innerHTML = "2. curly brackets";
    q2Answer2.className = 'btn';
    document.body.appendChild(q2Answer2);
    q2Answer2.addEventListener('click', function(){
        correctAnswer = false;
        subtractTenFromTimer();
        question3();
        q2Answer1.remove();
        q2Answer2.remove();
        q2Answer3.remove();
        q2Answer4.remove();
        return correctAnswer;
    });

    q2Answer3.innerHTML = "3. parenthesis";
    q2Answer3.className = 'btn';
    document.body.appendChild(q2Answer3);
    q2Answer3.addEventListener('click', function(){
        correctAnswer = true;
        question3();
        q2Answer1.remove();
        q2Answer2.remove();
        q2Answer3.remove();
        q2Answer4.remove();
        return correctAnswer;
    });

    q2Answer4.innerHTML = "4. square brackets";
    q2Answer4.className = 'btn';
    document.body.appendChild(q2Answer4);
    q2Answer4.addEventListener('click', function(){
        correctAnswer = false;
        subtractTenFromTimer();
        question3();
        q2Answer1.remove();
        q2Answer2.remove();
        q2Answer3.remove();
        q2Answer4.remove();
        return correctAnswer;
    });
    answerResponse();
};

//question 3
var question3 = function() {
    rightOrWrongEl.remove();
    questionEl.textContent = 'Arrays in JavaScript can be used to store ________________.';

    q3Answer1.innerHTML = "1. numbers and strings";
    q3Answer1.className = 'btn';
    document.body.appendChild(q3Answer1);
    q3Answer1.addEventListener('click', function(){
        correctAnswer = false;
        subtractTenFromTimer();
        question4();
        q3Answer1.remove();
        q3Answer2.remove();
        q3Answer3.remove();
        q3Answer4.remove();
        return correctAnswer;
    });

    q3Answer2.innerHTML = "2. other arrays";
    q3Answer2.className = 'btn';
    document.body.appendChild(q3Answer2);
    q3Answer2.addEventListener('click', function(){
        correctAnswer = false;
        subtractTenFromTimer();
        question4();
        q3Answer1.remove();
        q3Answer2.remove();
        q3Answer3.remove();
        q3Answer4.remove();
        return correctAnswer;
    });

    q3Answer3.innerHTML = "3. booleans";
    q3Answer3.className = 'btn';
    document.body.appendChild(q3Answer3);
    q3Answer3.addEventListener('click', function(){
        correctAnswer = false;
        subtractTenFromTimer();
        question4();
        q3Answer1.remove();
        q3Answer2.remove();
        q3Answer3.remove();
        q3Answer4.remove();
        return correctAnswer;
    });

    q3Answer4.innerHTML = "4. all of the above";
    q3Answer4.className = 'btn';
    document.body.appendChild(q3Answer4);
    q3Answer4.addEventListener('click', function(){
        correctAnswer = true;
        question4();
        q3Answer1.remove();
        q3Answer2.remove();
        q3Answer3.remove();
        q3Answer4.remove();
        return correctAnswer;
    });
    answerResponse();  
};

//question 4
var question4 = function() { 
    questionEl.textContent = 'String values must be enclosed within _______________ when being assigned to variables.';
    
    q4Answer1.innerHTML = "1. commas";
    q4Answer1.className = 'btn';
    document.body.appendChild(q4Answer1);
    q4Answer1.addEventListener('click', function(){
        correctAnswer = false;
        subtractTenFromTimer();
        question5();
        q4Answer1.remove();
        q4Answer2.remove();
        q4Answer3.remove();
        q4Answer4.remove();
        return correctAnswer;
    });

    q4Answer2.innerHTML = "2. curly brackets";
    q4Answer2.className = 'btn';
    document.body.appendChild(q4Answer2);
    q4Answer2.addEventListener('click', function(){
        correctAnswer = false;
        subtractTenFromTimer();
        question5();
        q4Answer1.remove();
        q4Answer2.remove();
        q4Answer3.remove();
        q4Answer4.remove();
        return correctAnswer;
    });

    q4Answer3.innerHTML = "3. quotes";
    q4Answer3.className = 'btn';
    document.body.appendChild(q4Answer3);
    q4Answer3.addEventListener('click', function(){
        correctAnswer = true;
        question5();
        q4Answer1.remove();
        q4Answer2.remove();
        q4Answer3.remove();
        q4Answer4.remove();
        return correctAnswer;
    });

    q4Answer4.innerHTML = "4. parenthesis";
    q4Answer4.className = 'btn';
    document.body.appendChild(q4Answer4);
    q4Answer4.addEventListener('click', function(){
        correctAnswer = false;
        subtractTenFromTimer();
        question5();
        q4Answer1.remove();
        q4Answer2.remove();
        q4Answer3.remove();
        q4Answer4.remove();
        return correctAnswer;
    });
    answerResponse();
};

//question 5
var question5 = function() {
    
    questionEl.textContent = 'A very useful tool used during development and debugging for printing content to the debugger is:';
    
    q5Answer1.innerHTML = "1. JavaScript";
    q5Answer1.className = 'btn';
    document.body.appendChild(q5Answer1);
    q5Answer1.addEventListener('click', function(){
        correctAnswer = false;
        subtractTenFromTimer();
        endQuiz();
        q5Answer1.remove();
        q5Answer2.remove();
        q5Answer3.remove();
        q5Answer4.remove();
        return correctAnswer;
    });

    q5Answer2.innerHTML = "2. terminal/bash";
    q5Answer2.className = 'btn';
    document.body.appendChild(q5Answer2);
    q5Answer2.addEventListener('click', function(){
        correctAnswer = false;
        subtractTenFromTimer();
        endQuiz();
        q5Answer1.remove();
        q5Answer2.remove();
        q5Answer3.remove();
        q5Answer4.remove();
        return correctAnswer;
    });

    q5Answer3.innerHTML = "3. for loops";
    q5Answer3.className = 'btn';
    document.body.appendChild(q5Answer3);
    q5Answer3.addEventListener('click', function(){
        correctAnswer = false;
        subtractTenFromTimer();
        endQuiz();
        q5Answer1.remove();
        q5Answer2.remove();
        q5Answer3.remove();
        q5Answer4.remove();
        return correctAnswer;
    });

    q5Answer4.innerHTML = "4. console.log";
    q5Answer4.className = 'btn';
    document.body.appendChild(q5Answer4);
    q5Answer4.addEventListener('click', function(){
        correctAnswer = true;
        endQuiz();
        q5Answer1.remove();
        q5Answer2.remove();
        q5Answer3.remove();
        q5Answer4.remove(); 
        return correctAnswer;
    });
    answerResponse();
};
var finalScoreMessage = document.createElement("p");
//Quiz ends
var scores = [];    
var users= {};

var endQuiz = function(){
    q5Answer1.remove();
    q5Answer2.remove();
    q5Answer3.remove();
    q5Answer4.remove(); 
    rightOrWrongEl.remove();
    stopTimer()
    questionEl.textContent = 'All done!';
    finalScoreEl.textContent = "Your final score is " + timeLeft;
    formEl.style.display = 'flex';
    
    answerResponse();
   
};
var input = document.getElementsByTagName('input').value;
console.log(input);

var userObj = {
    initials: initialInput,
    score: timeLeft
}



    
    // set new submission to local storage 
   // localStorage.setItem("scores", JSON.stringify(scores));
   // console.log(scores);
    
 



//start new

//End new  

//display if the question is answered correctly or not
var rightOrWrongEl = document.createElement("h3");
var answerResponse = function(){
    rightOrWrongEl.id = 'right-wrong'

    if (correctAnswer === true){
        rightOrWrongEl.textContent = "Correct!"
        document.body.appendChild(rightOrWrongEl);
    }
    else if (correctAnswer === false) {
        rightOrWrongEl.textContent = "Wrong!"
        document.body.appendChild(rightOrWrongEl);
    }    
};

//WHAT I WANT TO DO
  
  
    
    //initial object is saved to a array
    //the array is stored in local storage
    //get the array from local storage
    //for loop though the array and print to the high score page
    //click on the clear all button and clear the high scores(delete array)

  
var saveScores = function(){
    

    // Put the object into storage
    localStorage.setItem('scores', JSON.stringify(scores));
    
    // Retrieve the object from storage
    var retrievedObject = localStorage.getItem('scores');

    console.log('retrievedObject: ', JSON.parse(retrievedObject));
    
};        
    




  /*
  //get high score
  var getHighScore = function() {
    var highScore = localStorage.getItem("user");
    var listItemEl = document.createElement("li");
    listItemEl.className = "list";
    listItemEl.textContent = highScore;
    listItemEl.appendChild(taskInfoEl);
  
  
   
  
  
  
    // save tasks to localStorage
   
  
    
  };
  
  

//Working on getting initials and putting them on screen


    
    
    var user = {
        name: initialInput,
        score: timeLeft
    };
  
    createHighScore(taskDataObj);
    
  };

  var createHighScore = function(taskDataObj) {
    var listItemEl = document.createElement("li");
    listItemEl.className = "list";
    listItemEl.appendChild(taskInfoEl);
  
  
   
  
    tasks.push(taskDataObj);
  
    // save tasks to localStorage
    saveTasks();
  
    
  };
  var taskDataObj=[];
  */