import localStorageMock from './localstorageMock.js';

const completedTask = (tasks, index) => {
  tasks[index].completed = true;
  localStorageMock.saveToLocal('Tasks', tasks);
  return tasks;
};

export default completedTask;