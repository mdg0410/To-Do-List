import localStorageMock from './localstorageMock.js';

const addTask = (tasks) => {
  const input = document.querySelector('#input');
  const newTask = {
    description: `${input.value}`,
    completed: false,
    index: Number(`${tasks.length}`),
  };
  tasks.push(newTask);
  localStorageMock.saveToLocal('Task', tasks);

  return tasks;
};

export default addTask;