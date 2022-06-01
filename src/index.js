import './style.css';
import refreshSrc from './refresh.png';
import returnSrc from './return.png';
import {
  addTask,
  list,
} from './add.js';
import clearTask from './remove.js';
import appendTask from './addTaskUI.js';
import Task from './tasks.js';

const storage = JSON.parse(localStorage.getItem('tasks')) || [];
const addUI = document.querySelector('.add');
const deleteUI = document.querySelector('.clear');
const returnImg = document.querySelector('.imgSubmit');
const refreshImg = document.querySelector('.imgRefresh');

storage.forEach((item) => {
  const task = new Task(item.description, item.completed, item.index);
  list.push(task);
  appendTask(task, list);
});

returnImg.src = returnSrc;
refreshImg.src = refreshSrc;

addUI.addEventListener('change', () => {
  addTask(addUI.value, false, list.length + 1);
});

refreshImg.addEventListener('click', () => {
  document.location.href = './index.html';
});

deleteUI.addEventListener('click', () => {
  const checks = document.querySelectorAll('.check');
  for (let i = 0; i < checks.length; i += 1) {
    if (checks[i].checked) {
      clearTask(checks[i].value, list);
    }
  }
  localStorage.setItem('tasks', JSON.stringify(list));
});