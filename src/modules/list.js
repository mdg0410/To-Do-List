import Task from './task.js';

export class List {
  constructor() {
    this.container = document.getElementById('form-item');
    if (localStorage.getItem('localTasks')) {
      this.tasks = JSON.parse(localStorage.getItem('localTasks')).map((task) => new Task(task.description, task.completed, task.index));
    } else {
      this.tasks = [
        {
          description: 'Day 1',
          completed: false,
          index: 1,
        },
        {
          description: 'Day 2',
          completed: true,
          index: 2,
        },
        {
          description: 'Day 3',
          completed: false,
          index: 3,
        },
      ];
      this.tasks = this.tasks.map((task) => new Task(task.description, task.completed, task.index));
    }
  }

  saveToLocal() {
    localStorage.setItem('localTasks', JSON.stringify(this.tasks));
  }

  render() {
    this.tasks.sort((a, b) => b.index - a.index).forEach((task) => {
      const { taskNode } = task.createNode();
      this.container.after(taskNode);
      this.saveToLocal();
    });
  }
}

export default new List();