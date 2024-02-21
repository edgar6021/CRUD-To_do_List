function showTaskDetails(index) {
    const task = tasks[index];

    $('#taskModalTitle').html(`<p><strong>Titulo:</strong>${task.title}</p>`);
    $('#taskModalBody').html ( `
        <p><strong>Descripción:</strong> ${task.description}</p>
        <p><strong>Fecha:</strong> ${task.date}</p>
    `);
    
    $('#taskModal').modal('show');
}