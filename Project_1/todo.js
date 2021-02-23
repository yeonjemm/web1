const toDoForm = document.querySelector(".js-toDoForm"),
    toDoInput = toDoForm.querySelector("input"),
    toDoList = document.querySelector(".js-toDoList");

const TODO_LS = 'toDo';
const toDoArr = [];

function filterFn(toDo)

function deleteToDO(event) {
    const btn = event.target;
    const li = btn.parentNode;
    toDoList.removeChild(li);
    const cleanToDo = toDoArr.filter();
}

function saveToDo() {
    localStorage.setItem(TODO_LS, JSON.stringify(toDoArr));
}

function paintToDo(text) {
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    const span = document.createElement("span");
    const newID = toDoArr.length + 1;
    delBtn.innerText = "delete";
    delBtn.addEventListener("click", deleteToDO);
    span.innerText = text;
    li.appendChild(span);
    li.appendChild(delBtn);
    toDoList.appendChild(li);
    li.id = newID;

    const toDoObj = {
        text: text,
        id: newID
    };
    toDoArr.push(toDoObj);
    saveToDo();
}

function handleSubmit(event) {
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintToDo(currentValue);
    toDoInput.value = "";
}

function loadToDo() {
    const toDo = localStorage.getItem(TODO_LS);
    if(toDo != null) {
        const parsedToDo = JSON.parse(toDo);
        parsedToDo.forEach(function(toDo) {
            paintToDo(toDo.text);
        });
    }
}

function init() {
    loadToDo();
    toDoForm.addEventListener("submit", handleSubmit);
}
init();