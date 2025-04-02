const addTaskElement = document.getElementById("addTask");
const addButton = document.getElementById("addButton");
const TasksGroup = document.getElementById("Tasks-group");

const putTask = (task) => {
    addTaskElement.value = '';
    const taskElementContainer = document.createElement("div");

    if (taskElementContainer) {
        taskElementContainer.id = "taskElementContainer";
        TasksGroup.appendChild(taskElementContainer);
    }

    const taskElement = document.createElement("p");
    const checkElement = document.createElement("input");
    checkElement.type = "checkbox";
    checkElement.id = "checkElement";
    const deleteElement = document.createElement("p");
    deleteElement.innerHTML = "X";
    deleteElement.id = "X-Element";
    
    if (taskElement && taskElementContainer) {
        taskElement.id="task-Element";
        taskElement.innerHTML = task;
        taskElementContainer.appendChild(checkElement);
        taskElementContainer.appendChild(taskElement);
        taskElementContainer.appendChild(deleteElement);
    }  

    if (checkElement) {
        checkElement.addEventListener("click", function (e) {
        const divsTasks = document.querySelectorAll("#taskElementContainer");
    
            divsTasks.forEach((div, idx) => {
                const allCheckButtons = div.querySelectorAll("#checkElement");
                const allTaskElement = div.querySelectorAll("#task-Element")
    
                allCheckButtons.forEach((buttons, idx) => { 
                    if (buttons.checked == true) {
                    allTaskElement[idx].style.textDecoration = "line-through";
                    allTaskElement[idx].style.opacity = 0.2;
                    } 

                    else if (buttons.checked == false) {
                    allTaskElement[idx].style.textDecoration = "none";
                    allTaskElement[idx].style.opacity = 1;
                    }
            })
        })
        })
        }
    
    deleteElement.addEventListener("click", (e) => {
        const taskContainer = e.target.closest("#taskElementContainer");

        if (taskContainer) taskContainer.remove();
    })
}

if (addButton) addButton.style.outline = "none";

if (addTaskElement && addButton) {
    
    addTaskElement.addEventListener("blur", function () {
        addButton.style.outline = "none";
    });
    
    addButton.addEventListener("click", function () {
        if (addTaskElement.value.trim().length > 0) {
            putTask(addTaskElement.value.trim());
        }
        
    });

    addTaskElement.addEventListener("keydown", function  (e) {
        if (e.key === "Enter" && e.target.value.trim().length > 0) {
            putTask(e.target.value.trim());
        }
    });
}












