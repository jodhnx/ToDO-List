
function deleteTask(event) {
    event.target.parentElement.remove();
    saveTasks();
  }

  function toggleTask(event) {
    event.target.classList.toggle("completed");
  }


// Aufgabe
function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskList = document.getElementById("taskList");
  
    if (taskInput.value.trim() !== "") {
      var li = document.createElement("li");
      var deleteButton = document.createElement("button");
      var taskText = document.createTextNode(taskInput.value);
  
      li.appendChild(taskText);
      li.appendChild(deleteButton);
      taskList.appendChild(li);
  
      deleteButton.textContent = "Delete";
      deleteButton.addEventListener("click", deleteTask);
      li.addEventListener("click", toggleTask);
  
      saveTasks();
  
      taskInput.value = "";
    }
  }

  function saveTasks() {
    var tasks = [];
    var taskList = document.getElementById("taskList").getElementsByTagName("li");
    for (var i = 0; i < taskList.length; i++) {
      tasks.push(taskList[i].textContent);
    }
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }
  



function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskList = document.getElementById("taskList");
  
    if (taskInput.value.trim() !== "") {
      var li = document.createElement("li");
      var deleteButton = document.createElement("button");
      var taskText = document.createTextNode(taskInput.value);
  
      li.appendChild(taskText);
      li.appendChild(deleteButton);
      taskList.appendChild(li);
  
      deleteButton.textContent = "Delete";
      deleteButton.className = "delete-btn";
      deleteButton.addEventListener("click", deleteTask);
      li.addEventListener("click", toggleTask);
  
      saveTasks();
  
      taskInput.value = "";
    }
  }
  

  function addDueDate(event) {
    var dueDate = prompt("Enter due date (YYYY-MM-DD):");
    if (dueDate !== null && dueDate !== "") {
      event.target.dataset.dueDate = dueDate;
      saveTasks();
    }
  }
  
 
  function addPriority(event) {
    var priority = prompt("Enter priority (High, Medium, Low):");
    if (priority !== null && priority !== "") {
      event.target.dataset.priority = priority;
      saveTasks();
    }
  }
  

  window.onload = function () {
    loadTasks();
  };
  

  function loadTasks() {
    var tasks = JSON.parse(localStorage.getItem("tasks"));
    var taskList = document.getElementById("taskList");
    if (tasks) {
      for (var i = 0; i < tasks.length; i++) {
        var li = document.createElement("li");
        var deleteButton = document.createElement("button");
  
        li.textContent = tasks[i];
        li.appendChild(deleteButton);
        taskList.appendChild(li);
  
        deleteButton.textContent = "Delete";
        deleteButton.className = "delete-btn";
        deleteButton.addEventListener("click", deleteTask);
        li.addEventListener("click", toggleTask);
        li.addEventListener("contextmenu", addDueDate);
        li.addEventListener("dblclick", addPriority); 
      }
    }
  }
  


  
