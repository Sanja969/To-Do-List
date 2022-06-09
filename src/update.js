const updateStatus = (task, taskData, checkBox, list) => {
  if (checkBox.checked) {
    task.children[0].style.textDecoration = 'line-through';
    taskData.completed = true;
    list.forEach((element) => {
      if (element.index === taskData.index) {
        element.completed = true;
        localStorage.setItem('tasks', JSON.stringify(list));
      }
    });
    localStorage.setItem('tasks', JSON.stringify(list));
  } else {
    task.children[0].style.textDecoration = 'none';
    taskData.completed = false;
    localStorage.setItem('tasks', JSON.stringify(list));
  }
};

const confirmChange = (task, taskData, list) => {
  taskData.description = task.children[0].children[1].textContent;
  list.forEach((element) => {
    if (element.index === taskData.index) {
      element.description = task.children[0].children[1].textContent;
      localStorage.setItem('tasks', JSON.stringify(list));
    }
  });
};

export { updateStatus, confirmChange };