//GET TASK FROM INPUT
function get_todos() {
    var todos = new Array;  //instatiate an empty array
    var todos_str = localStorage.getItem('todo'); //Pull the tast that was saved in the web browser memory
    if (todos_str !== null) {   //If the input is not null, then JSON will parse comminicate with the web browser to make the task a JS object.
        todos = JSON.parse(todos_str);
    }
    return todos;
}

//ADD INPUTED TASK TO get_todos FUNCTION ARRAY
function add() {
    var task= document.getElementById('task').value; //Create a variable using the value of a 'task'
    var todos = get_todos(); 
    todos.push(task);   //Add a new task to the end of the array
    localStorage.setItem('todo', JSON.stringify(todos));    //Convert the task input to a JSON string
    document.getElementById("task").value = "";
    show();             //Create an undefined function
    return false;
}

//KEEP THE TASK PERMANENTLY DISPLAYED ON THE SCREEN
function show() {
    var todos = get_todos();    //Set the retrieved task as a variable
    var html = '<ul>'; //Set up each task as an unordered list
    for (var i=0; i < todos.length; i++) {
        html += '<li>' + todos[i] + '<button class="remove"' + i + '"> &nbsp;x&nbsp; </button></li>';
    };
    html += '</ul>';
    document.getElementById('todos').innerHTML = html; //Display the task as a list

    var buttons = document.getElementsByClassName('remove');
    for (var i=0; i < buttons.length; i++) {   
        buttons[i].addEventListener('click', remove); //Remove the completed task when the "checkbox" is clicked.
    }
}

document.getElementById('add').addEventListener('click', add); //Display the inputed task when the "Add Item" button is clicked.

show(); //Keep the inputs displayed permanently on the screen.

//REMOVE TASK WHEN COMPLETED (CHECKED OFF)
function remove() {
    var id = this.getAttribute('id');
    var todos = get_todos();
    todos.splice(id, 1);
    localStorage.setItem('todo', JSON.stringify(todos));
    show(); //Look in the show() for how to display a removed item on the screen.

    return false;
}