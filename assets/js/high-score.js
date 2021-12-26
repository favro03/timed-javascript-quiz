var body  = document.body;
var listItemEl = document.getElementById("list");
var clearScoresEl = document.getElementById("clear");
var li = document.createElement("li");

var loadScores = function(){
    var getScores = localStorage.getItem("initials");
    //console.log('getScores: ', JSON.parse(getScores));
    li.textContent = (JSON.parse(getScores));
    listItemEl.appendChild(li);
};

var deleteScores = function(){
    clearScoresEl.addEventListener('click', function() {
        localStorage.clear();
        listItemEl.style.display="none";
    });
};

loadScores();
deleteScores();