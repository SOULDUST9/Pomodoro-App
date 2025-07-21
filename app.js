const choosenMinutes = document.getElementById("inputedTime");
const startTimer = document.getElementById("timer-start");
const choosenTask = document.getElementById("inputedTask");
const showHistory = document.getElementById("display-history");

const minutes = document.querySelector(".minutes");
const seconds = document.querySelector(".seconds");
const currentTask = document.querySelector(".currentTask");

let totalTime;
let timerFlag = true;

choosenMinutes.addEventListener("input", function () {
  if (timerFlag){
    const value = Number(choosenMinutes.value);

    if (value < 1 || value > 60) {
      alert("Please enter a valid number of minutes between 1 and 60.");
      return;
    }
  
    let strValue = "";
  
    if (value < 10) {
      strValue = "0" + value;
    } else {
      strValue = value.toString();
    }
  
  
    minutes.textContent = strValue;
    seconds.textContent = "00";
  }else {
    alert("Timer has already started wait for it to finish.");
    return;
  }
});


startTimer.addEventListener("click", function(){
  const task = choosenTask.value;
  if (task == ''){
    alert("Please fill in both fields!");
    return;
  }else if (timerFlag){
    let myInterval = setInterval(updateSeconds, 1000);

    currentTask.textContent = task;
    timerFlag = false;
    totalTime = 60 * Number(minutes.textContent);

    timerFlag = false;
    addTask();
    updateSeconds();
  }else {
    alert("Please wait for timer to finish before adding a new task!");
    return;
  }
  
  

    
});

function updateSeconds(){
        
    if (totalTime == -1){
        timerFlag = true; 
        clearInterval(myInterval);
    }
    let currentMin = Math.floor(totalTime/60);
    let currentSec = totalTime % 60;

    let strMinValue = "";

    if (currentMin < 10) {
        strMinValue = "0" + currentMin;
    } else {
        strMinValue = currentMin.toString();
    }

    let strSecValue = "";

    if (currentSec < 10) {
        strSecValue = "0" + currentSec;
    } else {
        strSecValue = currentSec.toString();
    }

    minutes.textContent = strMinValue;
    seconds.textContent = strSecValue;

    totalTime--;
    
}


function addTask(){
  const task = choosenTask.value;
  const time = choosenMinutes.value;

  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.push({ task, time });
  localStorage.setItem("tasks", JSON.stringify(tasks));

  alert("Task added!");

}

