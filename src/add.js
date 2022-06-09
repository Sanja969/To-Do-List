import { appendTask } from './addTaskUI.js';
import Task from './tasks.js';

const list = [];

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