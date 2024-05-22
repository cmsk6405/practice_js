const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input")
// const toDoInput = document.querySelector("#todo-form input") 위와 같음
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

let toDos = [];
let checkedToDo =[];


function saveToDos(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event){
    const li = event.target.parentElement;
    li.remove();
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
    saveToDos()
}

// function deleteLine(event) {
//     const checkbox = event.target;
//     const li = checkbox.parentElement;
//     const span = li.querySelector("span");

//     if (checkbox.checked) {
//         span.style.textDecoration = "line-through";
//     } else {
//         span.style.textDecoration = "none";
//     }
// }



function paintToDo(newTodo){
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    span.innerText = newTodo.text;
    const button = document.createElement("button");
    
    button.classList.add("deleteBtn")
    button.addEventListener("click", deleteToDo);
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
}

// function paintToDo(newTodo){
//     const li = document.createElement("li");
//     li.id = newTodo.id;

//     const span = document.createElement("span");
//     span.innerText = newTodo.text;

//     const checkbox = document.createElement("input");
//     checkbox.type = "checkbox"

//     // button.innerText = "❌";
//     // button.addEventListener("click", deleteToDo);
    
//     checkbox.addEventListener("click", deleteLine);
//     li.appendChild(span);
//     li.appendChild(checkbox);
//     toDoList.appendChild(li);
// }

function handleToDoSubmit(event){
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    const newToDoobj = {
        text:newTodo,
        id:Date.now()
    };
    toDos.push(newToDoobj);
    paintToDo(newToDoobj);
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);


const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos !== null){
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
}