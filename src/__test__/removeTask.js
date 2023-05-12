/* @jest-environment jsdom */

import localStorageMock from '../__Mocks__/localstorageMock.js';
import removeTask from '../__Mocks__/removeTask.js';
import tasks from '../modules/tasks.js';

describe('validation for remove-function', () => {
  test('Remove Task', () => {
    expect(removeTask(tasks, 0).toHaveLength(3));
  });

  test('', () => {
    expect(tasks[0].index).toBe(1);
  });
});