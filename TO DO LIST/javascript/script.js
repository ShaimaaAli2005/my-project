// Function to add a new task to the list
function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskText = taskInput.value.trim();

    // Check if the input field is empty
    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    const taskList = document.getElementById("taskList");

    // Create a new list item with task text and action buttons
    const listItem = document.createElement("li");
    listItem.className = "list-group-item task-item d-flex justify-content-between align-items-center";
    
    listItem.innerHTML = 
        `<span class="task-title">${taskText}</span>
        <div>
            <button class="action-btn edit-btn" onclick="editTask(this)">
                <i class="fa-solid fa-pen"></i>
            </button>
            <button class="action-btn delete-btn" onclick="deleteTask(this)">
                <i class="fa-solid fa-trash"></i>
            </button>
        </div>`
    ;

    // Append the new task to the list and clear the input field
    taskList.appendChild(listItem);
    taskInput.value = "";
}

// Function to edit an existing task using a prompt box
function editTask(button) {
    const listItem = button.closest("li");
    const taskSpan = listItem.querySelector(".task-title");
    const currentText = taskSpan.textContent;

    const newText = prompt("Edit Task:", currentText);
    
    if (newText !== null && newText.trim() !== "") {
        taskSpan.textContent = newText.trim();
    }
}

// Function to remove a task from the list
function deleteTask(button) {
    const listItem = button.closest("li");
    listItem.remove();
}