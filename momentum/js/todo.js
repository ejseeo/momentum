const TODO_DEBUG_MODE = false;
const DELETE_EMOJI = "❌";
const FINISHED_EMOJI = "✔";
const RESTORE_EMOJI = "↩";
const TODO_PENDING_LS = "pending-list";
const TODO_FINISHED_LS = "finished-list";

const todoForm = document.getElementById("todo-form");
const todoInput = document.querySelector("#todo-form input");
const pendingList = document.getElementById("pending-list");
const finishedList = document.getElementById("finished-list");

let pendingArray = [];
let finishedArrary = [];

function savePending() {
    localStorage.setItem(TODO_PENDING_LS, JSON.stringify(pendingArray));
}

function saveFinished() {
    localStorage.setItem(TODO_FINISHED_LS, JSON.stringify(finishedArrary));
}

function restoreTodo(event) {
    const li = event.target.parentElement;
    const grandParentId = event.path[2].id;
    const restoreTodo = li.querySelector("span").innerText;
    if(TODO_DEBUG_MODE){console.log("***restoreTodo ");}
    if(TODO_DEBUG_MODE){console.log(event);}
    if(TODO_DEBUG_MODE){console.log(`parent:${grandParentId} finishedTodo:${restoreTodo}`);}
    paintTodo(TODO_PENDING_LS, restoreTodo);
 
    pendingArray.push(restoreTodo);
    const pos = finishedArrary.indexOf(restoreTodo);
    finishedArrary.splice(pos, 1);
    savePending();
    saveFinished();
    li.remove();
    if(TODO_DEBUG_MODE){console.log(`       pendingArray:${pendingArray} finishedArrary:${finishedArrary}`);}
}

function finishedTodo(event){
    const li = event.target.parentElement;
    const grandParentId = event.path[2].id;
    const finishedTodo = li.querySelector("span").innerText;
    if(TODO_DEBUG_MODE){console.log("***finishedTodoFuntion");}
    if(TODO_DEBUG_MODE){console.log(event);}
    if(TODO_DEBUG_MODE){console.log(`parent:${grandParentId} finishedTodo:${finishedTodo}`);}
    paintTodo(TODO_FINISHED_LS, finishedTodo);

    finishedArrary.push(finishedTodo);
    const pos = pendingArray.indexOf(finishedTodo);
    pendingArray.splice(pos, 1);
    savePending();
    saveFinished();
    li.remove();
    if(TODO_DEBUG_MODE){console.log(`        pendingArray:${pendingArray} finishedArrary:${finishedArrary}`);}
}

function deleteTodo(event){
    const li = event.target.parentElement;
    const grandParentId = li.parentElement.id;
    const delTodo = li.querySelector("span").innerText;
    if(TODO_DEBUG_MODE){console.log("***deleteTodo");}
    if(TODO_DEBUG_MODE){console.log(event);}
    if(TODO_DEBUG_MODE){console.log(`parent:${grandParentId} delTodo:${delTodo}`);}
    
    if(grandParentId === TODO_PENDING_LS) {
        const pos = pendingArray.indexOf(delTodo);
        pendingArray.splice(pos, 1);
        savePending();
    }  else {
        const pos = finishedArrary.indexOf(delTodo);
        finishedArrary.splice(pos, 1);
        saveFinished();
    } 
    li.remove();
    if(TODO_DEBUG_MODE){console.log(`       pendingArray:${pendingArray} finishedArrary:${finishedArrary}`);}
}

function paintTodo(ID, newTodo){
    if(TODO_DEBUG_MODE){console.log(`***paintTodoFunction ID:${ID} newTodo:${newTodo}`);}

    const li = document.createElement("li");
    const span = document.createElement("span");
    span.innerText = newTodo;
    const delBtn = document.createElement("button");
    delBtn.innerText = DELETE_EMOJI;
    delBtn.addEventListener("click", deleteTodo);

    const aBtn = document.createElement("button");
    if(ID === TODO_PENDING_LS){
        aBtn.innerText = FINISHED_EMOJI;
        aBtn.addEventListener("click", finishedTodo);
    } else {
        aBtn.innerText = RESTORE_EMOJI;
        aBtn.addEventListener("click", restoreTodo);
    }
    li.appendChild(delBtn);
    li.appendChild(aBtn);
    li.appendChild(span);
    if(ID === TODO_PENDING_LS){
        pendingList.appendChild(li);
    } else {
        finishedList.appendChild(li);
    }
}

function handleTodoSubmit(event){
    event.preventDefault();
    const newTodo= todoInput.value;
    todoInput.value = "";
    if(TODO_DEBUG_MODE){ console.log("***handleTodoSubmit newTodo:", newTodo);}
    
    pendingArray.push(newTodo);
    paintTodo(TODO_PENDING_LS, newTodo);
    savePending();
}

function loadingPendingList(){
    const savedPendingTodos = localStorage.getItem(TODO_PENDING_LS);
    if(TODO_DEBUG_MODE){ console.log("***loadingPendingList savedPendingTodos:", savedPendingTodos);}
    if(savedPendingTodos){
        const parsedPendingTodos = JSON.parse(savedPendingTodos);
        parsedPendingTodos.forEach((todo) => {
            pendingArray.push(todo);
            paintTodo(TODO_PENDING_LS, todo);
        });
    }
}

function loadingFinishedList(){
    const savedFinishedTodos = localStorage.getItem(TODO_FINISHED_LS);
    if(TODO_DEBUG_MODE){console.log("***loadingFinishedList savedFinishedTodos:", savedFinishedTodos);}
    if(savedFinishedTodos) {
        const parsedFinishedTodos = JSON.parse(savedFinishedTodos);
        parsedFinishedTodos.forEach((todo) => {
            finishedArrary.push(todo);
            paintTodo(TODO_FINISHED_LS, todo);
        });
    }
}

function init(){
    todoForm.addEventListener("submit", handleTodoSubmit);
    loadingPendingList();
    loadingFinishedList();
}

init();
