import moveSrc from './move.png';
import trashSrc from './trash.png';
import clearTask from './remove.js';

const toDoListUI = document.querySelector('.to-do-list');
const endCont = document.querySelector('.clear');

const appendTask = (item, list) => {
  const taskUI = document.createElement('li');
  taskUI.innerHTML = `<div><input type='checkbox' id = task-${item.index} class = 'check' value=${item.index}><p size='12'>${item.description}</p></div>`;
  const moveImg = new Image();
  moveImg.src = moveSrc;
  taskUI.appendChild(moveImg);
  moveImg.addEventListener('click', () => {
    if (moveImg.src === moveSrc) {
      moveImg.src = trashSrc;
      moveImg.parentNode.style.background = 'rgba(214, 214, 148, 0.534)';
      taskUI.children[0].children[1].setAttribute('contenteditable', 'true');
      endCont.textContent = 'Chick here to save changes';
      endCont.classList.add('makeChanges');
      endCont.style.fontSize = '24px';
      endCont.addEventListener('click', (e) => {
        if (moveImg.src === trashSrc) {
          e.target.textContent = 'Clear all completed';
          e.target.classList.remove('makeChanges');
          e.target.style.fontSize = '16px';
          taskUI.children[0].children[1].setAttribute('contenteditable', 'false');
          moveImg.src = moveSrc;
          moveImg.parentNode.style.background = 'inherit';
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
  toDoListUI.appendChild(taskUI);
  const check = taskUI.children[0].children[0];

  if (item.completed === true) {
    check.checked = true;
    taskUI.children[0].style.textDecoration = 'line-through';
  }

  check.style.cursor = 'pointer';
  moveImg.style.cursor = 'pointer';
  check.addEventListener('click', () => {
    if (check.checked === true) {
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