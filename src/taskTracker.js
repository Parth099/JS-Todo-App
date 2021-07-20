import Task from "./task.js";

class TaskTracker {
  constructor() {
    this.focus = "home";
    this.projects = {
      today: [
        new Task("Learn HashMaps", "1", "none", "High", "---", true),
        new Task("Learn Linked Lists", "2", "none", "Medium", "---", true),
        new Task("Learn Arrays", "3", "none", "Low", "---", true),
        new Task("Learn Queues", "4", "none", "Low", "---", true),
        new Task("Learn Stacks", "5", "none", "Medium", "---", false),
        new Task("Learn R/B Trees", "6", "none", "Low", "---", false),
        new Task("Learn Graphs", "7", "none", "Low", "---", false),
        new Task("Learn Tuples", "8", "none", "Medium", "---", true),
      ],
      subway: [new Task("Make Trays", "8", "none", "Medium", "---", false)],
    };
  }

  getTasks() {
    if (this.currFocus == "home") {
      let tasksArray = [];
      const keys = Object.keys(this.projects);
      keys.forEach((key) => {
        tasksArray = tasksArray.concat(this.projects[key]);
      });
      return tasksArray;
    }
    return this.projects[this.currFocus];
  }
  get currFocus() {
    return this.focus;
  }
  set currFocus(cf) {
    this.focus = cf;
  }
}

export default TaskTracker;
