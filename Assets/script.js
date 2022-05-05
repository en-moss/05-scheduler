$('#currentDay').text(moment().format('dddd, MMMM Do'));

$('button').click (function(e) {
    saveTask(e);
})

function saveTask(e) {
    let saveButton = e.target
    let task = saveButton.previousElementSibling
    const toDo = {
        hour: saveButton.id,
        task: task.value
    };
    
    if (JSON.parse(localStorage.getItem('tasks')) == null) {
        localStorage.setItem('tasks', '[]');
    }

    let taskArr = JSON.parse(localStorage.getItem('tasks'));
    taskArr.push(toDo);
    localStorage.setItem('tasks', JSON.stringify(taskArr));
}

// function renderTask() {

// }