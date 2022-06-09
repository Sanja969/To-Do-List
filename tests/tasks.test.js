jest.mock('../src/addTaskUI.js');

import Task from '../src/tasks.js';
import { addTask, list } from '../src/add.js';
import clearTask from '../src/remove.js';

const taskData = new Task('task1',false,1);

test('Make new object with task data', () => {

  expect(taskData).toEqual({description: 'task1', completed: false, index: 1})

});

test('Add task', () => {
  addTask('task1',false,1);
  const taskUI = document.querySelectorAll('.task');
  expect(taskUI).toHaveLength(1);
  expect(list).toEqual([{description: 'task1', completed: false, index: 1}])
});

test('Remove task', () => {
  clearTask(1, list);
  const taskUI = document.querySelectorAll('.task');
  expect(taskUI).toHaveLength(0);
  expect(list).toEqual([])
});