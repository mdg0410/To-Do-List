import localStorageMock from './localstorageMock.js';

const editeTask = (tasks, index, description) => {
  tasks[index - 1].description = description;

  localStorageMock.saveToLocal('Tasks', tasks);
  return tasks;
};

export default editeTask;