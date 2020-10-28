// Define UI Vars
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

// load all event listeners 
loadEventListenrs();

// Load all event listeners 
function loadEventListenrs();{
    //add task eveny
    form.addEventListener('sumbit', addTask)
}

// add task
function addTask(e) {
    if(taskInput.value ==='') {
        alert('add a task')
    }

    //create li element
    const li = document.createElement('li');
    //add class
    li.className = 'collection-item'



    e.preventDefault();
}