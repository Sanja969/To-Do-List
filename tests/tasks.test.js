jest.mock('../src/addTaskUI.js');

import Task from '../src/tasks.js';
import { addTask, list } from '../src/add.js';
import clearTask from '../src/remove.js';
import { editTask } from '../src/addTaskUI.js';
import { updateStatus, confirmChange } from '../src/update.js';

const taskData = new Task('task1',false,1);

describe('functions responsible for adding and deleting list items', () => {
  test('Make new object from class Task', () => {
    expect(taskData).toEqual({description: 'task1', completed: false, index: 1})
  });

  test('Add task', () => {
    addTask('task1',false,1);
    const taskUI = document.querySelectorAll('.task');
    expect(taskUI).toHaveLength(1);
    expect(list).toEqual([{description: 'task1', completed: false, index: 1}])

    const storage = JSON.parse(localStorage.getItem('tasks'));
    expect(storage).toEqual([{description: 'task1', completed: false, index: 1}])
  });

  test('Remove task', () => {
    clearTask(1, list);
    const taskUI = document.querySelectorAll('.task');
    expect(taskUI).toHaveLength(0);
    expect(list).toEqual([])
    const storage = JSON.parse(localStorage.getItem('tasks'));
    expect(storage).toEqual([])
  });

describe('functions responsible for updating status and editing description', () => {
  test('Edit task', () => {
    addTask('task1',false,1);
    const taskUI = document.querySelector('.task');
    const editImg = taskUI.children[1]
    expect(taskUI.children[0].children[1].textContent).toEqual(taskData.description);

    editTask(taskUI, taskData, editImg, list);
    taskUI.children[0].children[1].textContent = 'taskChanged';
    confirmChange(taskUI, taskData, list);
    expect(taskData.description).toEqual('taskChanged');
    const storage = JSON.parse(localStorage.getItem('tasks'));
    expect(storage).toEqual([{description: 'taskChanged', completed: false, index: 1}])
  });
  test('Update status', () => {
    const taskUI = document.querySelector('.task');
    const checBox = taskUI.children[0].children[0];
    checBox.checked = true;
    updateStatus(taskUI, taskData, checBox, list);
    expect(taskData.completed).toEqual(true);
    const storage = JSON.parse(localStorage.getItem('tasks'));
    expect(storage).toEqual([{description: 'taskChanged', completed: true, index: 1}])
 });
});
});