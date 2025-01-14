const inputTask = document.getElementById('inputTask');
const addTaskButton = document.getElementById('addTaskButton');
const taskList = document.getElementById('TaskList');


document.addEventListener('DOMContentLoaded', () => {
    const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    savedTasks.forEach(task => addTaskToDOM(task));
});


addTaskButton.addEventListener('click', () => {
    const task = inputTask.value.trim();
    if (task) {
        addTaskToDOM(task);
        saveTaskToStorage(task);
        inputTask.value = ''; 
    }
});

function addTaskToDOM(task) {
    const li = document.createElement('li');
    li.textContent = task;

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.style.marginLeft = '10px';
    deleteButton.addEventListener('click', () => {
        li.remove();
        removeTaskFromStorage(task);
    });

    li.appendChild(deleteButton);
    taskList.appendChild(li);
}


function saveTaskToStorage(task) {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
}


function removeTaskFromStorage(task) {
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks = tasks.filter(t => t !== task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
}
