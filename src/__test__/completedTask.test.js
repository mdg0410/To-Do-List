/* @jest-environment jsdom */

import localStorageMock from '../__Mocks__/localstorageMock.js';
import completedTask from '../__Mocks__/completedTaskMock.js';
import tasks from '../modules/tasks.js';

describe('completeTask validator', () => {
  //  test 1
  test('task[1] change to complete', () => {
    expect(completedTask(tasks, 0)).toHaveLength(4);
  });
  // test 2
  test('second object should have completed', () => {
    expect(tasks[0].completed).toBeTruthy();
  });

  // test 3
  test('local storage second elements completed should be true', () => {
    expect(localStorageMock.getFromLocal('Tasks')[0].completed).toBeTruthy();
  });
});