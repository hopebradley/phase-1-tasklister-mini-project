let count = 1;

document.addEventListener("DOMContentLoaded", () => {

  function addTask(e) {
    e.preventDefault();
    const list = document.getElementById('tasks');
    const li = document.createElement('li');

    li.innerText = document.getElementById('new-task-description').value;
    list.appendChild(li);
    li.dataset.num = count++;
    const button = document.createElement('button');
    button.innerText = 'X';
    li.append(button);
    button.addEventListener('click', deleteTask);
    
    document.getElementById('new-task-description').value = '';
  }

  document.getElementById('create-task-form').addEventListener('submit', addTask);

});

function deleteTask(e) {
  e.target.parentElement.remove();
}