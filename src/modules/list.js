import TaskForm from './Task-form.js';
import Task from './task.js';

export class List {
  tasks = []

  workForm = null;

  constructor() {
    this.container = document.getElementById('form-item');

    if (localStorage.getItem('localTasks')) {
      this.tasks = JSON.parse(localStorage.getItem('localTasks')).map((task) => new Task(task.description, task.completed, task.index));
    }

    this.setCurrentForm();
  }

  setCurrentForm(name = 'addTaskForm', isUpdating = false) {
    this.workForm = new TaskForm(name, isUpdating);
    this.workForm.form.onsubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.addTask(this.workForm.form.description.value);
    this.workForm.form.reset();
  }

  addTask(description) {
    const task = new Task(description, false, this.tasks.length + 1);
    this.tasks.push(task);
    this.render().saveToLocal();
  }

  render() {
    this.container.parentNode.querySelectorAll('[data-task]').forEach((task) => task.remove());

    this.tasks.sort((a, b) => b.index - a.index).forEach((task) => {
      const { taskNode } = task.createNode();
      this.container.after(taskNode);
    });

    this.tasks.sort((a, b) => a.index - b.index);

    return this;
  }

  saveToLocal() {
    localStorage.setItem('localTasks', JSON.stringify(this.tasks));
  }
}

export default new List();