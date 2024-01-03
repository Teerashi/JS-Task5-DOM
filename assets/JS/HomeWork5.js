let todos = [];
const todoList = document.getElementById('todoList');
const form = document.getElementById('form');
const input = document.getElementById('input');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const inputValue = input.value.trim();
    if (!inputValue) return;

    const taskData = { text: inputValue };
    todos.push(taskData);

    const tasks = document.createElement('div');
    tasks.id = 'tasks';

    const task = document.createElement('div');
    task.className = 'task';

    const infoFromTask = document.createElement('p');
    infoFromTask.className = 'infoFromTask';
    infoFromTask.textContent = inputValue;

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';

    const delButton = document.createElement('button');
        delButton.className = 'delButton';


    checkbox.addEventListener('change', () => {
        checkbox.checked
        if (checkbox.checked) {
            infoFromTask.textContent = 'Красавчик, мужик!';
        } else {
            infoFromTask.textContent = inputValue;
        }
    });

    delButton.addEventListener('click', () => {
        if (checkbox.checked) {
            todos = todos.filter(task => task !== taskData);
                tasks.removeChild(task);
        } else {return};
    });

    task.append(checkbox, infoFromTask, delButton);
    tasks.appendChild(task);
    todoList.appendChild(tasks);

    input.value = '';
});