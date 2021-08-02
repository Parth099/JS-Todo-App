import Task from "./task.js";
import { isBlank } from "./index.js";
import localStorageHandler from "./localStorageHandler.js";

const messagePlane = document.getElementById("add-project-text-info");

class TaskTracker {
  constructor() {
    this.focus = "home";
    this.projectsSet = new Set();
    this.projectsSet.add("");
    this.projectsSet.add("today");
    this.localStorageHandler = new localStorageHandler([]);
    this.tasks = [...this.localStorageHandler.savedTaskArr];
    if (this.tasks.length < 1) {
      this.tasks = [
        new Task("Learn HashMaps", "", "none", "High", true, "CS"),
        new Task("Learn Linked Lists", "", "none", "Medium", true, "CS"),
        new Task("Learn Arrays", "", "none", "Low", true, "CS"),
        new Task("Learn Queues", "", "none", "Low", true, "CS"),
        new Task("Learn Stacks", "", "none", "Medium", false, "CS"),
        new Task("Learn R/B Trees", ":(", "none", "Low", false, "CS"),
        new Task("Learn Graphs", ":(", "none", "Low", false, "CS"),

        new Task("Buy Rail Pass", "$628", "none", "Low", false, "Travel"),
        new Task("Visit 7/11", "Slurpee!", "none", "Low", true, "Travel"),

        new Task(
          "Pick Classes",
          "18 credits!",
          "none",
          "Low",
          false,
          "College"
        ),
        new Task("Pay College Fee", "$$$$$", "none", "Low", false, "College"),
        new Task("Cry in the corner", ":*(", "none", "Low", true, "College"),

        new Task("Buy Banana(SINGLE)", "Tasty", "none", "High", true, "today"),
      ];
      this.localStorageHandler = new localStorageHandler(this.tasks);
    }
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
    const selectedTasks = this.tasks.filter(
      (task) => task.project.toLowerCase() === this.currFocus && task.title
    );
    return selectedTasks;
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
    //SOLID VIOLATION
    messagePlane.textContent = "";
    const projectToAdd = p;
    p = p.toLowerCase().trim();
    if (p == "home") {
      return false;
    }
    if (this.projectsSet.has(p)) {
      messagePlane.textContent = `'${projectToAdd}' Already Exists`;
      return false;
    }
    this.projectsSet.add(projectToAdd);
    this.tasks.push(new Task(undefined, "a", "a", "a", false, projectToAdd)); //empty task object for local strorage parser
    return true;
  }
  getProjects() {
    console.log("DTT");
    console.log(this.projectsSet);
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
