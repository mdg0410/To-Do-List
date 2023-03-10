import TaskForm from './Task-form.js';
import Task from './task.js';

export class List {
  tasks = []

  workForm = null;

  constructor() {
    this.container = document.getElementById('form-item');

    if (localStorage.getItem('Task')) {
      this.tasks = JSON.parse(localStorage.getItem('Task')).map((task) => new Task(task.description, task.completed, task.index));
    }

    this.setCurrentForm();
  }

  setCurrentForm(name = 'addTaskForm', isUpdating = false) {
    this.workForm = new TaskForm(name, isUpdating);
    this.workForm.form.onsubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.workForm.isUpdating) {
      this.updateTask(this.workForm.form.description.value, this.workForm.form.index.value);
    } else {
      this.addTask(this.workForm.form.description.value);
      this.workForm.form.description.focus();
      this.workForm.form.reset();
    }
  }

  addTask(description) {
    const task = new Task(description, false, this.tasks.length + 1);
    this.tasks.push(task);
    this.render().saveToLocal();
  }

  updateTask(description, index) {
    this.tasks[index - 1].description = description;
    this.saveToLocal();
  }

  removeTask(index) {
    this.tasks = this.tasks.filter((task) => task.index !== index);
    for (let i = 0; i < this.tasks.length; i += 1) {
      this.tasks[i].index = i + 1;
    }
    this.render().saveToLocal();
  }

  render() {
    this.container.parentNode.querySelectorAll('[data-task]').forEach((task) => task.remove());

    this.tasks.sort((a, b) => b.index - a.index).forEach((task) => {
      const { taskNode, descriptionNode, taskIndex } = task.createNode();
      this.container.after(taskNode);
      descriptionNode.onfocus = (e) => this.editing(e, taskNode, taskIndex);
      descriptionNode.onblur = (e) => this.edited(e, taskNode);
    });

    this.tasks.sort((a, b) => a.index - b.index);

    return this;
  }

  saveToLocal() {
    localStorage.setItem('Task', JSON.stringify(this.tasks));
  }

  editing(e, taskNode, taskIndex) {
    taskNode.classList.add('editing-task');
    const trash = taskNode.querySelector('button.trash');
    trash.classList.toggle('hidden');
    this.setCurrentForm(`task-${taskIndex}`, true);
    trash.onmousedown = () => {
      this.removeTask(taskIndex);
      this.setCurrentForm();
    };
    taskNode.querySelector('i.fa-bars').classList.toggle('hidden');
  }

  edited(e, taskNode) {
    this.workForm.form.requestSubmit();
    this.setCurrentForm();
    setTimeout(() => {
      taskNode.classList.remove('editing-task');
      taskNode.querySelector('i.fa-bars').classList.toggle('hidden');
      taskNode.querySelector('button.trash').classList.add('hidden');
    }, 200);
  }
}

export default new List();