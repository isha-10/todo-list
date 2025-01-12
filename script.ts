
const taskInput = document.getElementById("taskInput") as HTMLInputElement;
const addButton = document.getElementById("addButton") as HTMLButtonElement;
const taskList = document.getElementById("taskList") as HTMLUListElement;


function createTaskItem(taskText: string): HTMLLIElement {
    
    const li = document.createElement("li");
    li.className = "task-item";

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    
    const span = document.createElement("span");
    span.className = "task-text";
    span.textContent = taskText;

    const deleteButton = document.createElement("button");
    deleteButton.className = "delete-button";
    deleteButton.innerHTML = "&times;";
    deleteButton.onclick = () => li.remove();


    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(deleteButton);

    return li;
}

addButton.addEventListener("click", () => {
    if (taskInput.value.trim() !== "") {
        const taskItem = createTaskItem(taskInput.value);
        taskList.appendChild(taskItem);
        taskInput.value = ""; 
    }
});


taskInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        addButton.click();
    }
});
