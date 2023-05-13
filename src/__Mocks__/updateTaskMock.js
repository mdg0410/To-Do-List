import localStorageMock from './localstorageMock.js';

const updateTask = (tasks, index) => {
  tasks[index - 1].completed = !tasks[index - 1].completed;
  localStorageMock.saveToLocal('Tasks', tasks);
  return tasks;
};

export default updateTask;