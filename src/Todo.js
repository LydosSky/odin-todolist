/**
 * Represents a todo
 * @constructor
 * @param {string} title - title of todo
 * @param {string} description - description of todo
 * @param {Date} dueDate - when is todo due, can be blank if not specified
 * @param {number} priority - priorty level of todo defaults to 1
 *                          - 0 means low
 *                          - 1 means normal
 *                          - 2 means high
 * */
class Todo {
  constructor(title, description, priority = 1, dueDate = null) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
  }

  changeTitle(newTitle) {
    this.title = newTitle;
  }

  changeDescription(newDescription) {
    this.description = newDescription;
  }

  changeDueDate(newDate) {
    this.dueDate = newDate;
  }

  changePriority(newPriority) {
    this.priority = newPriority;
  }
}

export default Todo;
