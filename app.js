const choosenMinutes = document.getElementById("inputedTime");
const startTimer = document.getElementById("timer-start");

const minutes = document.querySelector(".minutes");
const seconds = document.querySelector(".seconds");

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
  if (timerFlag){
    let myInterval = setInterval(updateSeconds, 1000);

    timerFlag = false;
    totalTime = 60 * Number(minutes.textContent);

    timerFlag = false;
    updateSeconds();
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



