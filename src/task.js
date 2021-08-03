import { v4 as uuidv4 } from "uuid";

class Task {
  static id = -1;
  constructor(title, description, dueDate, priority, isComplete, project) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.isComplete = isComplete;
    this.id = `${uuidv4()}`;
    this.project = project;
  }

  setId() {}
  //getters
  get title() {
    return this._title;
  }

  get description() {
    return this._description;
  }

  get dueDate() {
    return this._dueDate;
  }

  get priority() {
    return this._priority;
  }

  get isComplete() {
    return this._isComplete;
  }

  get project() {
    return this._project;
  }
  //setters
  set title(t) {
    this._title = t;
  }

  set description(d) {
    this._description = d;
  }

  set dueDate(dd) {
    console.log(dd);
    if (dd && dd != "none") {
      const date = new Date(dd);
      this._dueDate = `${date.toISOString().slice(0, 10)}`;
    } else {
      this._dueDate = "none";
    }
  }

  set priority(p) {
    this._priority = p;
  }

  set isComplete(c) {
    this._isComplete = c;
  }

  set project(p) {
    this._project = p;
  }
}

export default Task;
