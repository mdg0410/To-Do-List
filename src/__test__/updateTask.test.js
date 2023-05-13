/* @jest-environment jsdom */

import localStorageMock from '../__Mocks__/localstorageMock.js';
import updateTask from '../__Mocks__/updateTaskMock.js';
import tasks from '../modules/tasks.js';

describe('', () => {
  test('', () => {
    expect(updateTask(tasks, 1)[0].completed).toBe(true);
  });

  test('', () => {
    expect(localStorageMock.getFromLocal('Tasks')[0].completed).toBe(true);
  });
});
