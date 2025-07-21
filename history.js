const displayButton = document.getElementById("display-history");
const clearButton = document.getElementById("clear-history");
const taskListContainer = document.getElementById("taskList");

taskListContainer.innerHTML = "All previous tasks will be displayed here";

displayButton.addEventListener("click", function() {
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    taskListContainer.innerHTML = "";
  
    if (tasks.length === 0) {
      taskListContainer.textContent = "No past tasks found.";
      return;
    }
  
    tasks.forEach(({ task, time }) => {
      const div = document.createElement("div");
      div.textContent = `📝 ${task} — ⏱️ ${time} minutes`;
      taskListContainer.appendChild(div);
    });
});
clearButton.addEventListener("click", function(){
    localStorage.clear();
    taskListContainer.textContent = "All Tasks cleared";
    
});