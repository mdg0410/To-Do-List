/* @jest-environment jsdom */

import localStorageMock from '../__Mocks__/localstorageMock.js';
import tasks from '../modules/tasks.js';
import clearCompleted from '../__Mocks__/clearCompletedMock.js';

describe('Clear All Completed Tasks Validator', () => {
  test('Clear All Completed Tasks', () => {
    expect(clearCompleted(tasks)).toHaveLength(2);
  });

  test('Comprobate index value from work2 is equal to 1', () => {
    expect(tasks[0].index).toBe(1);
  });

  test('local storage second elements completed should be false', () => {
    expect(localStorageMock.getFromLocal('data')[1].completed).toBeFalsy();
  });
});