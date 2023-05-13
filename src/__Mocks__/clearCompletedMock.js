import localStorageMock from './localstorageMock.js';

const clearCompleted = (tasks) => {
  tasks = tasks.filter((task) => !task.completed);
  tasks.forEach((task, i) => {
    task.index = i + 1;
  });
  localStorageMock.saveToLocal('data', tasks);
  return tasks;
};
export default clearCompleted;