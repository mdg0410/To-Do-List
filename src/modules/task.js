export default class Task {
  constructor(description, completed = false, index = null) {
    this.description = description;
    this.completed = completed;
    this.index = index;
    this.isEditing = false;
  }

  createNode() {
    const taskNode = document.createElement('li');
    taskNode.setAttribute('data-task', true);
    taskNode.innerHTML = `
    <div class="task-item-container">
      <label htmlFor="complete-task" class="task-status"><input ${this.completed ? 'checked' : ''} type="checkbox" name="complete-task"/>${!this.completed ? `<i class="bi bi-square" data-task-id="${this.index}"></i>` : `<i class="bi bi-check-lg" data-task-id="${this.index}"></i>`} </label>
      <form name="task-${this.index}">
        <input type="text" class="task-item ${this.completed ? 'task-completed' : ''}" required name="description" data-task-id="${this.index}" value="${this.description}" />
        <input type="hidden" value="${this.index}" name="index" />
      </form>
    </div>
    <i class="fa-solid fa-trash hidden" data-task-index="${this.index}"></i><i class="fa-solid fa-bars" data-task-index="${this.index}"></i>
    `;

    const descriptionNode = taskNode.querySelector('input.task-item');

    return { taskNode, descriptionNode, taskIndex: this.index };
  }
}
