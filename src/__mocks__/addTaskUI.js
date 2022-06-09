import { updateStatus, confirmChange } from '../update.js';


const taksContainer = document.createElement('div');
document.body.appendChild(taksContainer);

const deleteBtn = document.createElement('div');
deleteBtn.className = 'deleteConfirmBtn'
const moveSrc = './move.png';
const trashSrc = './trash.png';

const editTask = (task, taskData, editTaksImg, list) => {
  deleteBtn.textContent = 'Chick here to save changes';
  deleteBtn.addEventListener('click', (e) => {
    confirmChange(task, taskData, editTaksImg, list, deleteBtn);
  });
}

const appendTask = (item, list) => {
  const taskUI = document.createElement('li');
  taskUI.className = 'task';
  taskUI.innerHTML = `<div><input type='checkbox' id = task-${item.index} class = 'check' value=${item.index}><p size='12'>${item.description}</p></div>`;
  const editTaksImg = new Image();
  editTaksImg.src = moveSrc;
  taskUI.appendChild(editTaksImg);
  editTaksImg.addEventListener('click', () => {
    editTask(taskUI, item, editTaksImg, list);
  });

  taksContainer.appendChild(taskUI);
  const checkBox = taskUI.children[0].children[0];

  if (item.completed) {
    checkBox.checked = true;
    taskUI.children[0].style.textDecoration = 'line-through';
  }

  checkBox.style.cursor = 'pointer';
  checkBox.addEventListener('click', () => {
    updateStatus(task, taskData, checkBox, list);
  });
}

export { appendTask, editTask, confirmChange, updateStatus };