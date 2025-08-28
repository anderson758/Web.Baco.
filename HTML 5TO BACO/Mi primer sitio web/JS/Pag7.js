let tasks = JSON.parse(localStroage.getItem('tasks')) || [];
let editIndex = null;

function renderTask{
    const table = document.getElementById('taskTable');
    table.innerHTML = '';
    tasks.forEach((task, index) =>{
            table.innerHTML += `
            <tr>
                <td>${task}</td>
                <td>
                <span class="edit" onclick="editTask(${index})">Editar</span>
                <span class="delete" oneclick="deleteTask(${index})">Eliminar</span>
                <td>
                <tr>
     `;
    });
}

function addTask(){
    const input = document.getElementById('TaskInput');
    const value = input.value.trim();
    if (value == '')return;
    
    if (editIndex === null){
        tasks.push(value);
    }else{
        tasks[editIndex]=value;
        editIndex = null;
    }
    input.value = ''
    saveAndRender();
    }
    
function editTask(index){
    document.getElementById('taskinput0').value = task[index];
    editIndex = index;
}

function deleteTask(index) {
    tasks.splice(index, 1);
    saveAndRender();
}

function saveAndRender(){
    localStorage.setItem('tasks', JSON.stringify(tasks))
    renderTask();
}

renderTask();

        