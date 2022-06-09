// import moveSrc from './move.png';
// import trashSrc from './trash.png';
// import clearTask from './remove.js';

const taksContainer = document.createElement('div');
document.body.appendChild(taksContainer);``

const deleteBtn = document.querySelector('.clear');
const moveSrc = './move.png';
const trashSrc = './trash.png';

const appendTask = (item, list) => {
  const taskUI = document.createElement('li');
  taskUI.innerHTML = `<div class="task"><input type='checkbox' id = task-${item.index} class = 'check' value=${item.index}><p size='12'>${item.description}</p></div>`;
  const editTaksImg = new Image();
  editTaksImg.src = moveSrc;
  taskUI.appendChild(editTaksImg);
  editTaksImg.addEventListener('click', () => {
    if (editTaksImg.src === moveSrc) {
      editTaksImg.src = trashSrc;
      editTaksImg.parentNode.style.background = 'rgba(214, 214, 148, 0.534)';
      taskUI.children[0].children[1].setAttribute('contenteditable', 'true');
      deleteBtn.textContent = 'Chick here to save changes';
      deleteBtn.classList.add('makeChanges');
      deleteBtn.style.fontSize = '24px';
      deleteBtn.addEventListener('click', (e) => {
        if (editTaksImg.src === trashSrc) {
          e.target.textContent = 'Clear all completed';
          e.target.classList.remove('makeChanges');
          e.target.style.fontSize = '16px';
          taskUI.children[0].children[1].setAttribute('contenteditable', 'false');
          editTaksImg.src = moveSrc;
          editTaksImg.parentNode.style.background = 'inherit';
          list.forEach((element) => {
            if (element.index === item.index) {
              element.description = taskUI.children[0].children[1].textContent;
              localStorage.setItem('tasks', JSON.stringify(list));
            }
          });
        }
      });
    } else {
      clearTask(item.index, list);
    }
  });
  taksContainer.appendChild(taskUI);
  const check = taskUI.children[0].children[0];

  if (item.completed) {
    check.checked = true;
    taskUI.children[0].style.textDecoration = 'line-through';
  }

  check.style.cursor = 'pointer';
  editTaksImg.style.cursor = 'pointer';
  check.addEventListener('click', () => {
    if (check.checked) {
      taskUI.children[0].style.textDecoration = 'line-through';
      item.completed = true;
      localStorage.setItem('tasks', JSON.stringify(list));
    } else {
      taskUI.children[0].style.textDecoration = 'none';
      item.completed = false;
      localStorage.setItem('tasks', JSON.stringify(list));
    }
  });
};

export default appendTask;