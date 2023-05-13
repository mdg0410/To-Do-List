/* @jest-environment jsdom */

import localStorageMock from '../__Mocks__/localstorageMock.js';
import removeTask from '../__Mocks__/removeTask.js';
import tasks from '../modules/tasks.js';

describe('validation for remove-function', () => {
  test('task eliminated according to the index', () => {
    expect(removeTask(tasks, 0)).toHaveLength(3);
  });

  test('We verify that the task was deleted', () => {
    expect(tasks[0].index).toBe(1);
  });

  test('We verify that the task was deleted in the localStoregaMock', () => {
    expect(localStorageMock.getFromLocal('Task')[0].description).toMatch(/work2/);
  });
});