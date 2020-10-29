// Define UI Vars
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

// load all event listeners 
loadEventListeners();

// Load all event listeners 
function loadEventListeners(){
    console.log('load event');
    //add task eveny
    form.addEventListener('submit', addTask);
    //remove task event
    taskList.addEventListener('click', removeTask);
    //Clear task event
    clearBtn.addEventListener('click', clearTasks);
    //Filter task
    filter.addEventListener('keyup', filterTasks);
}

// add task
function addTask(e) {
    if(taskInput.value ==='') {
        alert('add a task')
    }

    //create li element
    const li = document.createElement('li');
    //add class
    li.className = 'collection-item';
    //create text node and append to li
    li.appendChild(document.createTextNode(taskInput.value));
    //create new link element
    const link = document.createElement('a');
    //add class
    link.className = 'delete-item secondary-content';
    // add icon HTML 
    link.innerHTML = '<i class ="fa fa-remove"></i>';
    //append the link to li
    li.appendChild(link);

    // append li to ul
    taskList.appendChild(li);

    //clear input
    taskInput.value = '';
    console.log(taskList);



    e.preventDefault();
}

//remvoe task
function removeTask(e){
    if(e.target.parentElement.classList.contains('delete-item')) {
        if(confirm('Are You Sure?')) {
            e.target.parentElement.parentElement.remove();
        }
    }
}

// Clear Tasks
function clearTasks(){
    //taskList.innerHTML = '';

    //faster
    while(taskList.firstChild){
        taskList.removeChild(taskList.firstChild);
    }
}

//Filter tasks
function filterTasks(e){
    const text = e.target.value;
}