//DOM
const listTask = document.querySelector("#list");
const inputTask = document.querySelector("#input_newtask");
inputTask.focus();

const arrayTasks =[];
function addTask(){
    if (inputTask.value == ""){
        alert("Ingrese un texto para la tarea.");
        return;
    }
    const task = new Task(inputTask.value);
    arrayTasks.push(task);
    //insserta un elemento antes del primero con la clase form
    document.querySelector(".form").before(task.createElement());
    inputTask.value = "";
    inputTask.focus();
}

function checkTask(checkbox){
    if(checkbox.checked){
        const task_id = checkbox.parentElement.parentElement.id;
        const task = arrayTasks.find(task => task.id == task_id);
        task.done();   
    }
    checkbox.setAttribute('disabled', true);
}

function deleteTask(anchor){
    const task_id = anchor.parentElement.parentElement.id;
    const task = arrayTasks.find(task => task.id == task_id);
    task.delete();
}
function updateTask(anchor) {
    

}


const chxTaskDone = document.querySelector("#chx_task_done");
chxTaskDone.onchange = function (){
    const taskTodo = document.querySelectorAll(".todo");
    const taskDelete = document.querySelectorAll(".delete");
    if (this.checked){
        taskTodo.forEach ((todo) => (todo.style.display = 'none'));
        taskDelete.forEach((task) => (task.style.display = 'none'));
    } else{
        taskTodo.forEach ((todo) => (todo.style.display = 'block'));
        taskDelete.forEach((task) => (task.style.display = 'block'));
    }
}

const chxTaskDelete = document.querySelector("#chx_task_delete");
chxTaskDelete.onchange = function (){
    const taskTodo = document.querySelectorAll(".todo");
    const taskDone = document.querySelectorAll(".done");
    if (this.checked){
        taskTodo.forEach ((todo) => (todo.style.display = 'none'));
        taskDone.forEach((done) => (done.style.display = 'none'));
    } else{
        taskTodo.forEach ((todo) => (todo.style.display = 'block'));
        taskDone.forEach((done) => (done.style.display = 'block'));
    }
}



// const contenedorTareas = document.querySelector("#list");
// const btnAddTask = document.querySelector("#add_task");
// const tareaIngresada = document.querySelector("#input_newtask");
// listaTareas = [];
// btnAddTask.onclick = function() {
//     listaTareas.push(tareaIngresada.value);
//     contenedorTareas.innerHTML = "";
//     tareaIngresada.value = "";
//     listaTareas.map((tarea) =>{
//         contenedorTareas.innerHTML +=
//     `
//             <p class="task">
//                 <input type="checkbox">
//                 <span>${tarea}</span>
//                 <a>❌</a>
//             </p>
//     `
//     });
    
// };