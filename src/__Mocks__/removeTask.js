import localStorageMock from './localstorageMock.js';

const removeTask = (tasks, index) => {
  tasks.splice(index, 1);
  for (let i = 0; i < tasks.length; i += 1) {
    tasks[i].index = i + 1;
  }
  localStorageMock.saveToLocal('Task', tasks);
  return tasks;
};

export default removeTask;