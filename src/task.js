class Task {
  static id = -1;
  constructor(
    title,
    description,
    dueDate,
    priority,
    notes,
    isComplete,
    project
  ) {
    this.title = title;
    this.description = description;
    this.dueDate = "none";
    this.priority = priority;
    this.notes = notes;
    this.isComplete = isComplete;
    this.id = `T${++Task.id}`;
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

  get notes() {
    return this._notes;
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
    this._dueDate = dd;
  }

  set priority(p) {
    this._priority = p;
  }

  set notes(n) {
    this._notes = n;
  }

  set isComplete(c) {
    this._isComplete = c;
  }

  set project(p) {
    this._project = p;
  }
}

export default Task;
