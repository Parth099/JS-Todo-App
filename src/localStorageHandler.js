export default class localStorageHandler {
  constructor(arr) {
    this._internalCount = 0;
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

    const existingData = this.readFromExistingStorage();
    if (existingData) {
      return;
    }
    this.isInit ^= 1;
    let taskToJson;
    for (let task of this.taskArr) {
      this.TaskHash[task.id] = this._internalCount;
      taskToJson = JSON.stringify(task);
      this.saveItemToStorage(this._internalCount, taskToJson);
      this._internalCount++;
    }
  }
  saveEditedTask(id, newObjData) {
    const localId = this.TaskHash[id];
    this.saveItemToStorage(localId, JSON.stringify(newObjData));
  }
  addNewTask(taskObj) {
    this.saveItemToStorage(this._internalCount, JSON.stringify(taskObj));
    this.TaskHash[taskObj.id] = this._internalCount;
    this._internalCount++;
  }
  saveItemToStorage(key, value) {
    localStorage.setItem(key, value);
    localStorage.setItem("MAX", `${this._internalCount}`);
  }
  readFromExistingStorage() {
    if (localStorage.length == 0) return 0;
    let idx = 0;
    let currObj, item;
    let limit = parseInt(localStorage.getItem("MAX"));
    while (idx <= limit) {
      item = localStorage.getItem(idx++);
      if (item !== "undefined") {
        currObj = JSON.parse(item);
        this.savedTaskArr.push(currObj);
      }
    }

    console.log("LC", this.savedTaskArr);
    return this.savedTaskArr;
  }
}
