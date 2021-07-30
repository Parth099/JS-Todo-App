import Task from "./task.js";
import { isBlank } from "./index.js";
import localStorageHandler from "./localStorageHandler.js";

class TaskTracker {
  constructor() {
    this.focus = "home";
    this.projectsSet = new Set();
    this.projectsSet.add("");
    this.projectsSet.add("home");
    this.projectsSet.add("today");
    this.localStorageHandler = new localStorageHandler([]);
    this.tasks = [...this.localStorageHandler.savedTaskArr];
    console.log("MAIN", this.tasks);
    console.log("Task-test", this.tasks[0].title); //fix THIS!!! IMPORT TASK FROM LCH
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
    return this.tasks.filter(
      (task) => task.project === this.currFocus && task.title
    );
  }
  getTaskById(id) {
    return this.tasks.find((task) => task.id === id);
  }
  completeXOR(id) {
    const selectedTask = this.getTaskById(id);
    selectedTask.isComplete ^= 1; //xor
    this.localStorageHandler.saveEditedTask(id, selectedTask);
  }
  projectCounter() {
    const collections = {};
    this.tasks.forEach((task) => {
      if (typeof collections[task.project] === "undefined") {
        collections[task.project] = 0;
      }
      if (task.title) {
        collections[task.project]++;
      }
      this.projectsSet.add(task.project);
    });
    return collections;
  }
  addProject(p) {
    p = p.toLowerCase().trim();
    if (p == "home") {
      return false;
    }
    if (this.projectsSet.has(p)) {
      return false;
    }
    this.projectsSet.add(p);
    this.tasks.push(new Task(undefined, "a", "a", "a", false, p)); //empty task object for local strorage parser
    return true;
  }
  getProjects() {
    return Array.from(this.projectsSet);
  }
  updateTask(id, mTitle, mDescrip, mDueDate, mPrio, mProject) {
    const taskObj = this.getTaskById(id);
    if (taskObj == null) {
      return;
    }
    if (isBlank(mTitle) || isBlank(mPrio)) {
      return 0;
    }
    taskObj.title = mTitle;
    taskObj.priority = mPrio;
    taskObj.project = mProject;
    taskObj.description = mDescrip;
    this.localStorageHandler.saveEditedTask(id, taskObj);
    return 1;
  }
  addNewTask(nTitle, nDescrip, nDueDate, nPrio, nProject) {
    if (isBlank(nTitle) || isBlank(nPrio)) {
      return 0;
    }
    const newTask = new Task(
      nTitle,
      nDescrip,
      nDueDate,
      nPrio,
      false,
      nProject
    );
    this.tasks.push(newTask);
    this.localStorageHandler.addNewTask(newTask);
    return 1;
  }
}

export default TaskTracker;
