
var taskInput = document.getElementById("taskInput");
var addButton = document.getElementById("addButton");
var taskList = document.getElementById("taskList");

function createTaskItem(taskText) {
    
    var li = document.createElement("li");
    li.className = "task-item";
    var checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    var span = document.createElement("span");
    span.className = "task-text";
    span.textContent = taskText;
    var deleteButton = document.createElement("button");
    deleteButton.className = "delete-button";
    deleteButton.innerHTML = "&times;";
    deleteButton.onclick = function () { return li.remove(); };
    
    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(deleteButton);
    return li;
}

addButton.addEventListener("click", function () {
    if (taskInput.value.trim() !== "") {
        var taskItem = createTaskItem(taskInput.value);
        taskList.appendChild(taskItem);
        taskInput.value = ""; 
    }
});

taskInput.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
        addButton.click();
    }
});
