import moveSrc from './move.png';
import trashSrc from './trash.png';
import clearTask from './remove.js';
import { updateStatus, confirmChange } from './update.js';

const taksContainer = document.querySelector('.to-do-list');
const deleteBtn = document.querySelector('.clear');

const confirmChangeUI = (task, taskData, editTaksImg, list) => {
  if (editTaksImg.src === trashSrc) {
    editTaksImg.src = moveSrc;
    deleteBtn.textContent = 'Clear all completed';
    deleteBtn.classList.remove('makeChanges');
    deleteBtn.style.fontSize = '16px';
    task.children[0].children[1].setAttribute('contenteditable', 'false');
    editTaksImg.parentNode.style.background = 'inherit';
    confirmChange(task, taskData, list);
  }
};

const editTask = (task, taskData, editTaksImg, list) => {
  if (editTaksImg.src === moveSrc) {
    editTaksImg.src = trashSrc;
    editTaksImg.parentNode.style.background = 'rgba(214, 214, 148, 0.534)';
    task.children[0].children[1].setAttribute('contenteditable', 'true');
    deleteBtn.textContent = 'Chick here to save changes';
    deleteBtn.classList.add('makeChanges');
    deleteBtn.style.fontSize = '24px';
    deleteBtn.addEventListener('click', () => {
      confirmChangeUI(task, taskData, editTaksImg, list);
    });
  } else {
    clearTask(taskData.index, list);
  }
};

const appendTask = (item, list) => {
  const taskUI = document.createElement('li');
  taskUI.innerHTML = `<div class="task"><input type='checkbox' id = task-${item.index} class = 'check' value=${item.index}><p size='12'>${item.description}</p></div>`;
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
  editTaksImg.style.cursor = 'pointer';
  checkBox.addEventListener('click', () => {
    updateStatus(taskUI, item, checkBox, list);
  });
};

export { appendTask, editTask };