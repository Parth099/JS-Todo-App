import Task from "./task.js";

export default class LocalStorageHandler {
  constructor(arr) {
    //check for LOCALSTR collisions
    const ghFocus = localStorage.getItem("project-focus-GHPAGES");
    if (typeof ghFocus === "undefined") {
      localStorage.setItem("project-focus-GHPAGES", "todo-app");
      localStorage.clear();
    }
    if (localStorage.length < 3) {
      localStorage.clear();
    }
    this._internalCount = localStorage.getItem("MAX") ?? 0;
    this.TaskHash = {};

    this.isInit = 0;
    this.taskArr = arr;
    this.savedTaskArr = [];
    this.initObjectHash();
  }
  initObjectHash() {
    if (this.isInit) {
      return;
    }
    this.isInit ^= 1;

    const existingData = this.readFromExistingStorage();
    if (existingData) {
      return;
    }

    let taskToJson;
    for (let task of this.taskArr) {
      this.TaskHash[task.id] = this._internalCount;
      taskToJson = JSON.stringify(task);
      this.saveItemToStorage(this._internalCount, taskToJson);
      this._internalCount++;
    }
    this._internalCount--;
  }
  saveEditedTask(id, newObjData) {
    const localId = this.TaskHash[id];
    this.saveItemToStorage(localId, JSON.stringify(newObjData));
  }
  addNewTask(taskObj) {
    this._internalCount++;
    this.saveItemToStorage(this._internalCount, JSON.stringify(taskObj));
    this.TaskHash[taskObj.id] = this._internalCount;
  }
  saveItemToStorage(key, value) {
    localStorage.setItem(key, value);
    localStorage.setItem("MAX", `${this._internalCount}`);
  }
  readFromExistingStorage() {
    if (localStorage.length == 0) return 0;
    let idx = 0;
    let JSON_OBJ, item;
    let limit = parseInt(localStorage.getItem("MAX"));
    while (idx <= limit) {
      item = localStorage.getItem(idx);
      if (item) {
        JSON_OBJ = JSON.parse(item);
        //currObj = Object.assign(Object.create(Task), JSON_OBJ);
        Object.setPrototypeOf(JSON_OBJ, Task.prototype); //gives each object the set/get props required
        this.savedTaskArr.push(JSON_OBJ);

        //task hashing
        this.TaskHash[JSON_OBJ.id] = idx;
      }
      idx++;
    }
    return this.savedTaskArr;
  }
  deleteTask(uuid) {
    const key = this.TaskHash[uuid];
    if (typeof key === "undefined") {
      return;
    }
    localStorage.removeItem(key);
    delete this.TaskHash[uuid];
  }
}
