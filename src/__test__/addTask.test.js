/* @jest-environment jsdom */

import localStorageMock from '../__Mocks__/localstorageMock.js';
import addTask from '../__Mocks__/addTask-Mock.js';

describe('validation for add-function', () => {
  document.body.innerHTML = '<input id ="input" value = "work1" >';
  const tasks = [];

  test('Add new task whit index 1', () => {
    expect(addTask(tasks)).toHaveLength(1);
  });

  test('it should save new item to storage', () => {
    expect(localStorageMock.getFromLocal('Task')).toHaveLength(1);
  });

  test('Add new task whit index 2', () => {
    expect(addTask(tasks)).toHaveLength(2);
  });

  test('it should save new item to storage', () => {
    expect(localStorageMock.getFromLocal('Task')).toHaveLength(2);
  });
});