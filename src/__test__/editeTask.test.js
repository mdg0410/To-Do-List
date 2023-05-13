/* @jest-environment jsdom */

import localStorageMock from '../__Mocks__/localstorageMock.js';
import editeTask from '../__Mocks__/editeTaskMock.js';
import tasks from '../modules/tasks.js';

describe('validation for remove-function', () => {
  test('', () => {
    expect(editeTask(tasks, 1, 'Edite Task')).toHaveLength(4);
  });

  test('', () => {
    expect(tasks[0].description).toBe('Edite Task');
  });

  test('', () => {
    expect(localStorageMock.getFromLocal('Tasks')[0].description).toMatch(/Edite Task/);
  });
});