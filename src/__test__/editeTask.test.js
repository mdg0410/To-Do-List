/* @jest-environment jsdom */

import localStorageMock from '../__Mocks__/localstorageMock.js';
import editeTask from '../__Mocks__/editeTaskMock.js';
import tasks from '../modules/tasks.js';

describe('editeTask validator', () => {
  test('task[0] edited description: work1 for Edite Task', () => {
    expect(editeTask(tasks, 1, 'Edite Task')).toHaveLength(4);
  });

  test('first object should have description Edite Task', () => {
    expect(tasks[0].description).toBe('Edite Task');
  });

  test('local storage first elements description should be Edite Task', () => {
    expect(localStorageMock.getFromLocal('Tasks')[0].description).toMatch(/Edite Task/);
  });
});