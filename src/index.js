import './style.css';
// import Icon from './move.png';

const toDoListUI = document.querySelector('.to-do-list');

class Task {
  constructor(description, completed, index) {
    this.description = description;
    this.completed = completed;
    this.index = index;
  }
}

const list = [new Task('Finsh the project', false, 0), new Task('Wash the dishes', false, 1), new Task('Go on zoom meeting', false, 2)];

const appendTask = (item) => {
  const taskUI = document.createElement('li');
  taskUI.innerHTML = `<label><input type='checkbox' id = task-${item.index} class = 'check' value=${item.index}>${item.description}</label><img src='../src/move.png'></img>`;
  toDoListUI.appendChild(taskUI);
};

for (let i = 0; i < list.length; i += 1) {
  appendTask(list[i]);
}