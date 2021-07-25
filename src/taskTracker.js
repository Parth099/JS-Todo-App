import Task from "./task.js";

class TaskTracker {
  constructor() {
    this.focus = "home";
    this.tasks = [
      new Task("Learn HashMaps", "1", "none", "High", true, ""),
      new Task("Learn Linked Lists", "2", "none", "Medium", true, ""),
      new Task("Learn Arrays", "3", "none", "Low", true, ""),
      new Task("Learn Queues", "4", "none", "Low", true, ""),
      new Task("Learn Stacks", "5", "none", "Medium", false, ""),
      new Task("Learn R/B Trees", "6", "none", "Low", false, ""),
      new Task("Learn Graphs", "7", "none", "Low", false, "today"),
      new Task("Learn Tuples", "8", "none", "Medium", true, "today"),
      new Task("Make Trays", "8", "none", "Medium", false, "subway"),
      new Task("Buy Zone 3 Pass", "8", "none", "High", false, "college"),
      new Task("Pick Classes", "8", "none", "High", false, "college"),
    ];
  }
  get currFocus() {
    return this.focus;
  }
  set currFocus(cf) {
    if (cf) {
      cf = cf.toLowerCase();
    }
    this.focus = cf ?? "home";
  }

  getTasks() {
    if (this.currFocus == "home") {
      return this.tasks;
    }
    return this.tasks.filter((task) => task.project === this.currFocus);
  }
  getTaskById(id) {
    return this.tasks.find((task) => task.id === id);
  }
  completeXOR(id) {
    const selectedTask = this.getTaskById(id);
    selectedTask.isComplete ^= 1; //xor
  }
  projectCounter() {
    const collections = {};
    this.tasks.forEach((task) => {
      if (typeof collections[task.project] === "undefined") {
        collections[task.project] = 0;
      }
      collections[task.project]++;
    });
    return collections;
  }
  addProject(p) {
    this.tasks.push(new Task("", "", "", "", "", p.trim())); //empty task object for local strorage parser
  }
}

export default TaskTracker;
