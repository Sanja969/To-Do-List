import appendTask from './addTaskUI.js';

const list = [];

class Task {
  constructor(description, completed, index) {
    this.description = description;
    this.completed = completed;
    this.index = index;
  }
}

const addTask = (description, completed, index) => {
  const task = new Task(description, completed, index);
  list.push(task);
  appendTask(task);
  localStorage.setItem('tasks', JSON.stringify(list));
};

export {
  addTask,
  list,
  Task,
};