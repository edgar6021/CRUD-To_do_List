
var tasks = [];
var table;
document.addEventListener('DOMContentLoaded', function () {
    table= $('#taskTable').DataTable({
        "responsive": true,
        "autoWidth": false,
        "bDestroy": true,
        "iDisplayLength": 10,
        "order": [[0, "asc"]],
        "searching": true
    
});
    document.getElementById('addTaskBtn').addEventListener('click', addTask);
    document.getElementById('DeleteItemSelect').addEventListener('click', deleteSelectedTasks);

    document.getElementById('taskTable').addEventListener('click', function (event) {
        const target = event.target;

        if (target.tagName === 'BUTTON' && target.classList.contains('btn-edit')) {
            const index = target.dataset.index;
            editTask(index);
        } else if (target.tagName === 'BUTTON' && target.classList.contains('btn-delete')) {
            const index = target.dataset.index;
            deleteTask(index);
        } else if (target.tagName === 'BUTTON' && target.classList.contains('btn-details')) {
            const index = target.dataset.index;
            showTaskDetails(index);
        }
    });
});

function addTask() {
    const title = document.getElementById('title').value;
    const description = document.getElementById('description').value;
    const date = document.getElementById('date').value;
    if (title.trim() === '' || description.trim() === '' || date.trim() === '') {
        alert('Por favor, complete todos los campos.');
        return;
    }
    const task = { title, description, date };
    tasks.push(task);


    document.getElementById('title').value = '';
    document.getElementById('description').value = '';
    document.getElementById('date').value = '';

    updateTable();
}

function updateTable() {

    table.clear();
    tasks.forEach((task, index) => {
        table.row.add([
            `<input type="checkbox" data-index="${index}">`,
            task.title,
            task.description,
            task.date,
            `<button class="btn btn-primary btn-edit" data-index="${index}">Editar</button>
            <button class="btn btn-danger btn-delete" data-index="${index}">Eliminar</button>
            <button type="button" class="btn btn-warning btn-details" data-index="${index}">Detalles</button>`
        ]);
    });
    table.draw();
}


function deleteSelectedTasks() {
    const checkboxes = document.querySelectorAll('#taskTable tbody input[type="checkbox"]');
    
    checkboxes.forEach((checkbox, index) => {
        if (checkbox.checked) {
            tasks.splice(index, 1);
        }
    });

    updateTable();
}

function editTask(index) {
    const editedTask = tasks[index];
    document.getElementById('title').value = editedTask.title;
    document.getElementById('description').value = editedTask.description;
    document.getElementById('date').value = editedTask.date;

    tasks.splice(index, 1);
    updateTable();
}

function deleteTask(index) {
    tasks.splice(index, 1);
    updateTable();
}

function closeModal() {
    const modal = document.getElementById('taskModal');
    modal.style.display = 'none';
}
