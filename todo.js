const input = document.querySelector('#todo');
const ul = document.querySelector('ul');

const todo = [];

//render todo
function renderTodo() {
    ul.innerHTML = ''
    for (let i = 0; i < todo.length; i++) {
        ul.innerHTML += `<li>${todo[i]}
        <Button id="deletebtn" onclick="deleteTodo(${i})">Delete</button>
        <button id="Editbtn" onclick="editTodo(${i})">Edit</button>
        </li>`
    }
}

//add todo
function addTodo() {
    todo.push(input.value);
    console.log(todo);
    input.value = ''
    renderTodo()
}

//delete todo
function deleteTodo(index) {
    todo.splice(index, 1);
    renderTodo()
}

//edit todo
function editTodo(index) {
    const editedValue = prompt('enter new value' , todo[index]);
    todo.splice(index , 1 , editedValue);
    renderTodo();
}

function deleteall (index) {
todo.splice(index)
renderTodo()
}

function myFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode");
}


