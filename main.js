/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/DOMTaskTable.js":
/*!*****************************!*\
  !*** ./src/DOMTaskTable.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _img_settings_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./img/settings.png */ "./src/img/settings.png");
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



function attachCheckBoxListener(chbx, TaskTrackerMain) {
  var checkerFunc = function checkboxListener(event) {
    var InternalTaskTracker = TaskTrackerMain;
    var parentNode = event.currentTarget.parentNode.parentNode;

    if (typeof parentNode === "undefined") {
      return;
    }

    parentNode.classList.toggle("crossout");
    var id = parentNode.getAttribute("data-task-id");
    InternalTaskTracker.completeXOR(id);
  };

  chbx.addEventListener("click", checkerFunc);
}

var DOMTaskTable = /*#__PURE__*/function () {
  function DOMTaskTable(internalTaskArray) {
    _classCallCheck(this, DOMTaskTable);

    this.tasks = internalTaskArray !== null && internalTaskArray !== void 0 ? internalTaskArray : [];
  }

  _createClass(DOMTaskTable, [{
    key: "createTableRow",
    value: function createTableRow(titleText, dueDateText, prioText, isCompleted, taskId, TaskTrackerMain) {
      if (typeof titleText === "undefined") {
        return;
      }
      /*
          <div class="table-row title">
            <p>Title</p>
            <div class="table-row-side">
              <p>Due Date</p>
              <p>Priority</p>
            </div>
          </div>
      */


      var tableRowCont, title, ckbx, titleAndCkbxCont;
      var flexSide, DueDate, Prio, modelOpener;
      tableRowCont = document.createElement("div");
      tableRowCont.classList.add("table-row");
      tableRowCont.setAttribute("data-task-id", taskId);
      title = document.createElement("p");
      title.classList.toggle("table-title");
      title.textContent = titleText;
      ckbx = document.createElement("input");
      ckbx.setAttribute("type", "checkbox");
      ckbx.classList.add("table-ckbx");

      if (TaskTrackerMain) {
        attachCheckBoxListener(ckbx, TaskTrackerMain);
      }

      if (isCompleted) {
        tableRowCont.classList.toggle("crossout");
        ckbx.setAttribute("checked", "true");
      }

      titleAndCkbxCont = document.createElement("div");
      titleAndCkbxCont.appendChild(ckbx);
      titleAndCkbxCont.appendChild(title);
      titleAndCkbxCont.classList.add("check-box-cont");
      tableRowCont.appendChild(titleAndCkbxCont);
      flexSide = document.createElement("div");
      flexSide.classList.add("table-row-side");
      DueDate = document.createElement("p");
      Prio = document.createElement("p");
      DueDate.classList.add("dueDate");
      Prio.classList.add("priority");
      Prio.classList.add(prioText.toLowerCase());
      DueDate.textContent = dueDateText;
      Prio.textContent = prioText;

      if (new Date(dueDateText).getTime() < new Date().getTime()) {
        DueDate.classList.add("overdue");
      }

      if (taskId != "table-head") {
        modelOpener = new Image();
        modelOpener.src = _img_settings_png__WEBPACK_IMPORTED_MODULE_0__;
        modelOpener.classList.add("table-row-img");
        modelOpener.setAttribute("data-modal-target", "#modal");
        modelOpener.setAttribute("data-task-id", taskId);
        Prio.appendChild(modelOpener);
      }

      flexSide.appendChild(DueDate);
      flexSide.appendChild(Prio);
      tableRowCont.appendChild(flexSide);
      return tableRowCont;
    }
  }, {
    key: "createTableTitle",
    value: function createTableTitle() {
      var ele = this.createTableRow("Title", "Due Date", "Priority", "", "table-head");
      ele.classList.toggle("title");
      ele.querySelector("input").remove();
      return ele;
    }
  }, {
    key: "renderTableData",
    value: function renderTableData(TaskTrackerMain) {
      var container = document.createElement("div");
      var rowData;

      var _iterator = _createForOfIteratorHelper(this.tasks),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var obj = _step.value;
          rowData = this.createTableRow(obj.title, obj.dueDate, obj.priority, obj.isComplete, obj.id, TaskTrackerMain);

          if (typeof rowData != "undefined") {
            container.appendChild(rowData);
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      return container;
    }
  }]);

  return DOMTaskTable;
}();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DOMTaskTable);

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TaskTrackerMain": () => (/* binding */ TaskTrackerMain),
/* harmony export */   "isBlank": () => (/* binding */ isBlank)
/* harmony export */ });
/* harmony import */ var _styles_styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/styles.css */ "./src/styles/styles.css");
/* harmony import */ var _styles_reset_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/reset.css */ "./src/styles/reset.css");
/* harmony import */ var _nav_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nav.js */ "./src/nav.js");
/* harmony import */ var _pageLoader_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pageLoader.js */ "./src/pageLoader.js");
/* harmony import */ var _taskTracker_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./taskTracker.js */ "./src/taskTracker.js");
/* harmony import */ var _modal_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modal.js */ "./src/modal.js");
//import css

 //import compo


 //task tracker


var TaskTrackerMain = new _taskTracker_js__WEBPACK_IMPORTED_MODULE_4__.default(); //modal

 //import Task

(0,_nav_js__WEBPACK_IMPORTED_MODULE_2__.attachNav)("img.header-img[data-nav-icon]"); //nav gains hide and show func

(0,_modal_js__WEBPACK_IMPORTED_MODULE_5__.attachModalLisntener)(TaskTrackerMain); //gives the modal's buttons functionalty

(0,_modal_js__WEBPACK_IMPORTED_MODULE_5__.attachDeleteLisntener)(TaskTrackerMain); //gives delete task func!

var links = document.querySelectorAll("#sideMenu > ul.menu-main > li > a.link");
var currPage = "Home";
(0,_pageLoader_js__WEBPACK_IMPORTED_MODULE_3__.renderPage)(currPage, TaskTrackerMain);

for (var link = 0; link < links.length; link++) {
  links[link].addEventListener("click", linkFocusSelector);
}

function linkFocusSelector(e) {
  if (e.target.classList.contains("active") && e.target.textContent != "Projects") {
    //stops spamming and calling renderPage()
    return;
  }

  for (var _link = 0; _link < links.length; _link++) {
    links[_link].classList.remove("active");
  }

  currPage = e.target.textContent;
  TaskTrackerMain.currFocus = e.target.textContent;
  e.target.classList.toggle("active");
  (0,_pageLoader_js__WEBPACK_IMPORTED_MODULE_3__.renderPage)(currPage, TaskTrackerMain);
}

function isBlank(str) {
  return !str || /^\s*$/.test(str);
} //modal reqs
//addProject Listeners

function toggleActive(e) {
  var currContainer = e.target.closest("[data-button-target]");

  if (typeof currContainer === "undefined") {
    return;
  }

  var targetSelector = currContainer.dataset.buttonTarget;
  var targetToShow = document.querySelector(targetSelector);
  currContainer.classList.toggle("active"); //hides curr target

  targetToShow.classList.toggle("active"); //shows next target
}

function toggleActiveForMenu(e) {
  var inputEle = document.querySelector("#add-project");
  var input = inputEle.value;

  if (e.target.getAttribute("id") == "add") {
    if (isBlank(input)) {
      return;
    }

    var additionSuccess = TaskTrackerMain.addProject(input);

    if (additionSuccess == false) {
      return;
    } else if (additionSuccess == true) {
      (0,_pageLoader_js__WEBPACK_IMPORTED_MODULE_3__.renderPage)(undefined, TaskTrackerMain);
    }
  }

  inputEle.value = ""; //clear text for next use

  var currContainer = e.target.closest("[data-button-target]");

  if (typeof currContainer === "undefined") {
    return;
  }

  var targetSelector = currContainer.dataset.buttonTarget;
  var targetToShow = document.querySelector(targetSelector);
  currContainer.classList.toggle("active"); //hides curr target

  targetToShow.classList.toggle("active"); //shows next target
}

var addprojectPreBtn = document.querySelector("#add-project-prebtn");
addprojectPreBtn.addEventListener("click", toggleActive);
var addProjectBtns = document.querySelectorAll(".add-project-btn");

for (var btn = 0; btn < addProjectBtns.length; btn++) {
  addProjectBtns[btn].addEventListener("click", toggleActiveForMenu);
}

/***/ }),

/***/ "./src/localStorageHandler.js":
/*!************************************!*\
  !*** ./src/localStorageHandler.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ LocalStorageHandler)
/* harmony export */ });
/* harmony import */ var _task_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task.js */ "./src/task.js");
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var LocalStorageHandler = /*#__PURE__*/function () {
  function LocalStorageHandler(arr) {
    var _localStorage$getItem;

    _classCallCheck(this, LocalStorageHandler);

    //check for LOCALSTR collisions
    var ghFocus = localStorage.getItem("project-focus-GHPAGES");

    if (typeof ghFocus === "undefined") {
      localStorage.setItem("project-focus-GHPAGES", "todo-app");
      localStorage.clear();
    }

    if (localStorage.length < 3) {
      localStorage.clear();
    }

    this._internalCount = (_localStorage$getItem = localStorage.getItem("MAX")) !== null && _localStorage$getItem !== void 0 ? _localStorage$getItem : 0;
    this.TaskHash = {};
    this.isInit = 0;
    this.taskArr = arr;
    this.savedTaskArr = [];
    this.initObjectHash();
  }

  _createClass(LocalStorageHandler, [{
    key: "initObjectHash",
    value: function initObjectHash() {
      if (this.isInit) {
        return;
      }

      this.isInit ^= 1;
      var existingData = this.readFromExistingStorage();

      if (existingData) {
        return;
      }

      var taskToJson;

      var _iterator = _createForOfIteratorHelper(this.taskArr),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var task = _step.value;
          this.TaskHash[task.id] = this._internalCount;
          taskToJson = JSON.stringify(task);
          this.saveItemToStorage(this._internalCount, taskToJson);
          this._internalCount++;
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      this._internalCount--;
    }
  }, {
    key: "saveEditedTask",
    value: function saveEditedTask(id, newObjData) {
      var localId = this.TaskHash[id];
      this.saveItemToStorage(localId, JSON.stringify(newObjData));
    }
  }, {
    key: "addNewTask",
    value: function addNewTask(taskObj) {
      this._internalCount++;
      this.saveItemToStorage(this._internalCount, JSON.stringify(taskObj));
      this.TaskHash[taskObj.id] = this._internalCount;
    }
  }, {
    key: "saveItemToStorage",
    value: function saveItemToStorage(key, value) {
      localStorage.setItem(key, value);
      localStorage.setItem("MAX", "".concat(this._internalCount));
    }
  }, {
    key: "readFromExistingStorage",
    value: function readFromExistingStorage() {
      if (localStorage.length == 0) return 0;
      var idx = 0;
      var JSON_OBJ, item;
      var limit = parseInt(localStorage.getItem("MAX"));

      while (idx <= limit) {
        item = localStorage.getItem(idx);

        if (item) {
          JSON_OBJ = JSON.parse(item); //currObj = Object.assign(Object.create(Task), JSON_OBJ);

          Object.setPrototypeOf(JSON_OBJ, _task_js__WEBPACK_IMPORTED_MODULE_0__.default.prototype); //gives each object the set/get props required

          this.savedTaskArr.push(JSON_OBJ); //task hashing

          this.TaskHash[JSON_OBJ.id] = idx;
        }

        idx++;
      }

      return this.savedTaskArr;
    }
  }, {
    key: "deleteTask",
    value: function deleteTask(uuid) {
      var key = this.TaskHash[uuid];

      if (typeof key === "undefined") {
        return;
      }

      localStorage.removeItem(key);
      delete this.TaskHash[uuid];
    }
  }]);

  return LocalStorageHandler;
}();



/***/ }),

/***/ "./src/modal.js":
/*!**********************!*\
  !*** ./src/modal.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "attachModalLisntener": () => (/* binding */ attachModalLisntener),
/* harmony export */   "attachDeleteLisntener": () => (/* binding */ attachDeleteLisntener)
/* harmony export */ });
/* harmony import */ var _pageLoader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pageLoader */ "./src/pageLoader.js");
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

 // model open/close

var openModalButtons = function openModalButtons() {
  return document.querySelectorAll("[data-modal-target]");
};

var closeModalButtons = function closeModalButtons() {
  return document.querySelectorAll("[data-close-button]");
};

var overlay = document.querySelector(".overlay"); // model read/write to HTML

var mTitle = document.querySelector("#task-title-modal");
var mPrio = document.querySelector("#task-prio-modal");
var mDueDate = document.querySelector("#task-dueDate-modal");
var mProject = document.querySelector("#task-project-modal");
var mDescrip = document.querySelector("#task-descrip-modal");
var submitBTN = document.getElementById("modal-save");
var deleteBTN = document.querySelector(".del-img-cont");
var modalMode = document.querySelector("#modalmode");
var submitInfo = {
  isUpdate: false,
  isAddition: false,
  modal: null,
  TaskTracker: null
};
var funcPointer = submitHandler.bind(submitInfo);
var targetId;
function attachModalLisntener(TaskTrackerMain) {
  submitInfo.TaskTracker = TaskTrackerMain; //set up TaskTrackerPTR

  submitBTN.removeEventListener("click", funcPointer);
  submitBTN.addEventListener("click", funcPointer);
  openModalButtons().forEach(function (button) {
    button.addEventListener("click", function (e) {
      var modal = document.querySelector(button.dataset.modalTarget);
      submitInfo.modal = modal;
      targetId = e.target.getAttribute("data-task-id"); // gets id of selected trigger

      var taskObj = TaskTrackerMain.getTaskById(targetId);
      loadProjects(TaskTrackerMain.getProjects());

      if (button.dataset.addBtn == "true") {
        mTitle.value = "";
        mPrio.value = "";
        mProject.value = "";
        mDescrip.value = "";
        mDueDate.valueAsDate = null;
        submitInfo.isAddition = true;
        deleteBTN.classList.remove("active");
        modalMode.textContent = "Add";
      } else {
        mTitle.value = taskObj.title;
        mPrio.value = taskObj.priority;
        mProject.value = taskObj.project;
        mDescrip.value = taskObj.description;
        mDueDate.value = taskObj.dueDate;
        submitInfo.isUpdate = true;
        deleteBTN.classList.add("active");
        modalMode.textContent = "Edit";
      }

      modal.setAttribute("data-focus", targetId);
      openModal(modal, targetId);
    });
  });
  closeModalButtons().forEach(function (button) {
    button.addEventListener("click", function () {
      submitBTN;
      var modal = button.closest(".modal");
      closeModal(modal);
    });
  });
}

function openModal(modal, modalFocus) {
  if (modal == null) return;
  modal.classList.add("active");
  overlay.classList.add("active");
}

function closeModal(modal) {
  if (modal == null) return;
  modal.classList.remove("active");
  overlay.classList.remove("active");
}

overlay.addEventListener("click", function () {
  var modals = document.querySelectorAll(".modal.active");
  modals.forEach(function (modal) {
    closeModal(modal);
  });
  overlay.classList.remove("active");
});

function loadProjects(taskProjects) {
  // arr
  mProject.querySelectorAll("*").forEach(function (child) {
    return child.remove();
  }); // removes all list options before appending new ones

  var option;

  var _iterator = _createForOfIteratorHelper(taskProjects),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var project = _step.value;
      option = document.createElement("option");
      option.value = project;
      option.textContent = project;
      mProject.appendChild(option);
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
}

function saveUpdate(modal, TaskTrackerMain) {
  console.log(TaskTrackerMain);
  var updateSuccess = TaskTrackerMain.updateTask(targetId, mTitle.value, mDescrip.value, mDueDate.value, mPrio.value, mProject.value);
  (0,_pageLoader__WEBPACK_IMPORTED_MODULE_0__.renderPage)(undefined, TaskTrackerMain);

  if (updateSuccess) {
    closeModal(modal);
    (0,_pageLoader__WEBPACK_IMPORTED_MODULE_0__.renderPage)(undefined, TaskTrackerMain);
  } // sends update to "TaskManager" :)

}

function addNewTask(modal, TaskTrackerMain) {
  var additionSuccess = TaskTrackerMain.addNewTask(mTitle.value, mDescrip.value, mDueDate.value, mPrio.value, mProject.value);

  if (additionSuccess) {
    closeModal(modal);
    (0,_pageLoader__WEBPACK_IMPORTED_MODULE_0__.renderPage)(undefined, TaskTrackerMain);
  }
}

function submitHandler() {
  // this.isAddition  this.isUpdate, while both are not needed using 2 vars can help me reduce errors
  console.log(this);

  if (this.isUpdate) {
    saveUpdate(this.modal, this.TaskTracker);
  } else {
    addNewTask(this.modal, this.TaskTracker);
  }
}

function attachDeleteLisntener(TaskTrackerMain) {
  deleteBTN.addEventListener("click", function (e) {
    var uuidv4 = e.target.closest("[data-focus]").dataset.focus;

    if (uuidv4.length == 36) {
      // guard
      TaskTrackerMain.deleteTask(uuidv4);
    }

    var modal = e.target.closest("#modal");
    closeModal(modal);
    (0,_pageLoader__WEBPACK_IMPORTED_MODULE_0__.renderPage)(undefined, TaskTrackerMain);
  });
}

/***/ }),

/***/ "./src/nav.js":
/*!********************!*\
  !*** ./src/nav.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "attachNav": () => (/* binding */ attachNav)
/* harmony export */ });
function openMenu() {
  document.getElementById("sideMenu").style.marginLeft = "0px";
  document.getElementById("content").style.marginLeft = "250px";
}

function closeMenu() {
  document.getElementById("sideMenu").style.marginLeft = "-250px";
  document.getElementById("content").style.marginLeft = "0px";
}

function adjustMenu() {
  var f = this.open ? closeMenu : openMenu;
  this.open ^= 1;
  f();
}

function linkFocusSelector(e) {
  for (var link = 0; link < links.length; link++) {
    links[link].classList.remove("active");
  }

  e.target.classList.toggle("active");
}

function attachNav(buttonQuerySelector) {
  var sideMenu = document.querySelector(buttonQuerySelector);
  var menuFunction = adjustMenu.bind({
    open: 1
  });
  sideMenu.addEventListener("click", menuFunction);
}

/***/ }),

/***/ "./src/pageLoader.js":
/*!***************************!*\
  !*** ./src/pageLoader.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isBlank": () => (/* binding */ isBlank),
/* harmony export */   "renderPage": () => (/* binding */ renderPage)
/* harmony export */ });
/* harmony import */ var _DOMTaskTable_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DOMTaskTable.js */ "./src/DOMTaskTable.js");
/* harmony import */ var _modal_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modal.js */ "./src/modal.js");


var links = document.querySelectorAll("#sideMenu > ul.menu-main > li > a.link");
var projectNavLink = document.querySelector("#project-nav");
function isBlank(str) {
  return !str || /^\s*$/.test(str);
}

var attachPoint = function attachPoint() {
  return document.getElementById("content");
};

String.prototype._capitalize = function () {
  return this.charAt(0).toUpperCase() + this.slice(1);
}; //renderpage
//projectLinkListener
//attachProjectLinks


function renderPage(pageTitle, TaskTrackerMain) {
  var _pageTitle$_capitaliz;

  if (typeof pageTitle === "undefined") {
    pageTitle = TaskTrackerMain.currFocus;
  }

  clearPage();
  var AP = attachPoint();
  var h1, table;
  h1 = document.createElement("h1");
  h1.classList.toggle("page-title");
  h1.textContent = (_pageTitle$_capitaliz = pageTitle._capitalize()) !== null && _pageTitle$_capitaliz !== void 0 ? _pageTitle$_capitaliz : "Home";
  AP.appendChild(h1);
  attachProjectLinks(TaskTrackerMain);

  if (pageTitle.toLowerCase() == "projects") {
    renderProjectsInfo(TaskTrackerMain);
    return;
  }

  TaskTrackerMain.currFocus = pageTitle;
  var taskList = TaskTrackerMain.getTasks();
  var tableCont = document.createElement("div");
  tableCont.classList.add("table-cont");
  table = new _DOMTaskTable_js__WEBPACK_IMPORTED_MODULE_0__.default(taskList);
  var tableHead = table.createTableTitle();
  var tableData = table.renderTableData(TaskTrackerMain);
  tableCont.appendChild(tableHead);
  tableCont.appendChild(tableData);
  AP.appendChild(tableCont);
  (0,_modal_js__WEBPACK_IMPORTED_MODULE_1__.attachModalLisntener)(TaskTrackerMain);
}

function clearPage() {
  document.querySelector("#content").remove();
  var content = document.createElement("div");
  content.classList.add("content");
  content.setAttribute("id", "content");
  document.body.appendChild(content);
} // underscore to make sure updates to js wont break code


function projectLinkListener(e) {
  var focus = e.target.textContent;
  this.TaskTrackerMain.currFocus = focus;

  if (focus == "Home" || focus == "Today") {
    for (var link = 0; link < links.length; link++) {
      if (links[link].textContent == "Projects") {
        links[link].classList.remove("active");
      } else if (links[link].textContent == focus) {
        links[link].classList.add("active");
      }
    }
  }

  renderPage(focus, this.TaskTrackerMain);
}

function projectExtListener(e) {
  var preActive = document.querySelector("ul.menu-main li a.active");

  if (preActive) {
    preActive.classList.remove("active");
  } //e.target.classList.add("active");

  /*
  const extLinks = document.querySelectorAll("ul.project-nav-ext li a");
  for (let i = 0; i < extLinks.length; i++) {
    extLinks[i].classList.remove("active");
  }
  */


  projectNavLink.classList.remove("active");
  renderPage(e.target.textContent, this.TaskTrackerMain);
}

function attachProjectLinks(TaskTrackerMain) {
  var counter = TaskTrackerMain.projectCounter();
  var li, a;

  var _linksAP = function _linksAP() {
    var pointer = document.querySelector(".project-nav-ext");
    pointer.remove();
    pointer = document.createElement("ul");
    pointer.classList.add("project-nav-ext");
    document.querySelector("#sideMenu").appendChild(pointer);
    return pointer;
  };

  var linksAP = _linksAP();

  var keys = Object.keys(counter);
  var keyText;

  for (var _i = 0, _keys = keys; _i < _keys.length; _i++) {
    var key = _keys[_i];
    keyText = isBlank(key) ? "home" : key;

    if (keyText == "home" || keyText == "today") {
      continue;
    }

    li = document.createElement("li");
    a = document.createElement("a");
    a.setAttribute("href", "#");
    li.appendChild(a);
    a.textContent = keyText; //._capitalize();

    if (keyText === TaskTrackerMain.currFocus) {
      a.classList.add("active");
    }

    a.addEventListener("click", projectExtListener.bind({
      TaskTrackerMain: TaskTrackerMain
    }));
    linksAP.appendChild(li);
  }
}

function renderProjectsInfo(TaskTrackerMain) {
  var counter = TaskTrackerMain.projectCounter();
  var AP = attachPoint();
  var projectLinkCont;
  var projectLink;
  var projectLinkText;
  var keyText;
  var keys = Object.keys(counter);
  keys.forEach(function (key) {
    projectLinkCont = document.createElement("div");
    projectLinkCont.classList.add("project-page-link-cont");
    projectLink = document.createElement("a");
    projectLink.classList.add("project-page-link");
    projectLink.addEventListener("click", projectLinkListener.bind({
      TaskTrackerMain: TaskTrackerMain
    }));
    keyText = isBlank(key) ? "Home" : key;
    projectLink.textContent = "".concat(keyText._capitalize());
    projectLinkText = document.createElement("p");
    projectLinkText.textContent = "".concat(counter[key], "  ").concat(counter[key] === 1 ? "Task" : "Tasks");
    projectLinkCont.appendChild(projectLinkText);
    projectLinkText.classList.add("project-page-link-text");
    projectLinkCont.appendChild(projectLink);
    projectLinkCont.appendChild(projectLinkText);
    AP.appendChild(projectLinkCont);
  });
  attachProjectLinks(TaskTrackerMain);
} //modal

/***/ }),

/***/ "./src/task.js":
/*!*********************!*\
  !*** ./src/task.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-browser/v4.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var Task = /*#__PURE__*/function () {
  function Task(title, description, dueDate, priority, isComplete, project) {
    _classCallCheck(this, Task);

    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.isComplete = isComplete;
    this.id = "".concat((0,uuid__WEBPACK_IMPORTED_MODULE_0__.default)());
    this.project = project;
  }

  _createClass(Task, [{
    key: "setId",
    value: function setId() {} //getters

  }, {
    key: "title",
    get: function get() {
      return this._title;
    },
    set: //setters
    function set(t) {
      this._title = t;
    }
  }, {
    key: "description",
    get: function get() {
      return this._description;
    },
    set: function set(d) {
      this._description = d;
    }
  }, {
    key: "dueDate",
    get: function get() {
      return this._dueDate;
    },
    set: function set(dd) {
      if (dd && dd != "none") {
        var date = new Date(dd);
        this._dueDate = "".concat(date.toISOString().slice(0, 10));
      } else {
        this._dueDate = "none";
      }
    }
  }, {
    key: "priority",
    get: function get() {
      return this._priority;
    },
    set: function set(p) {
      this._priority = p;
    }
  }, {
    key: "isComplete",
    get: function get() {
      return this._isComplete;
    },
    set: function set(c) {
      this._isComplete = c;
    }
  }, {
    key: "project",
    get: function get() {
      return this._project;
    },
    set: function set(p) {
      this._project = p;
    }
  }]);

  return Task;
}();

_defineProperty(Task, "id", -1);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Task);

/***/ }),

/***/ "./src/taskTracker.js":
/*!****************************!*\
  !*** ./src/taskTracker.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _task_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task.js */ "./src/task.js");
/* harmony import */ var _localStorageHandler_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./localStorageHandler.js */ "./src/localStorageHandler.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var messagePlane = document.getElementById('add-project-text-info');

function isBlank(str) {
  return !str || /^\s*$/.test(str);
}

var TaskTracker = /*#__PURE__*/function () {
  function TaskTracker() {
    _classCallCheck(this, TaskTracker);

    this.focus = 'home';
    this.projectsSet = new Set();
    this.projectsSet.add('');
    this.projectsSet.add('today');
    this.localStorageHandler = new _localStorageHandler_js__WEBPACK_IMPORTED_MODULE_1__.default([]);
    this.tasks = _toConsumableArray(this.localStorageHandler.savedTaskArr);

    if (this.tasks.length < 1) {
      this.tasks = [new _task_js__WEBPACK_IMPORTED_MODULE_0__.default('Learn HashMaps', '', 'none', 'High', true, 'CS'), new _task_js__WEBPACK_IMPORTED_MODULE_0__.default('Learn Linked Lists', '', 'none', 'Medium', true, 'CS'), new _task_js__WEBPACK_IMPORTED_MODULE_0__.default('Learn Arrays', '', 'none', 'Low', true, 'CS'), new _task_js__WEBPACK_IMPORTED_MODULE_0__.default('Learn Queues', '', 'none', 'Low', true, 'CS'), new _task_js__WEBPACK_IMPORTED_MODULE_0__.default('Learn Stacks', '', 'none', 'Medium', false, 'CS'), new _task_js__WEBPACK_IMPORTED_MODULE_0__.default('Learn R/B Trees', ':(', 'none', 'Low', false, 'CS'), new _task_js__WEBPACK_IMPORTED_MODULE_0__.default('Learn Graphs', ':(', 'none', 'Low', false, 'CS'), new _task_js__WEBPACK_IMPORTED_MODULE_0__.default('Buy Rail Pass', '$628', 'none', 'Low', false, 'Travel'), new _task_js__WEBPACK_IMPORTED_MODULE_0__.default('Visit 7/11', 'Slurpee!', 'none', 'Low', true, 'Travel'), new _task_js__WEBPACK_IMPORTED_MODULE_0__.default('Pick Classes', '18 credits!', 'none', 'Low', false, 'College'), new _task_js__WEBPACK_IMPORTED_MODULE_0__.default('Pay College Fee', '$$$$$', 'none', 'Low', false, 'College'), new _task_js__WEBPACK_IMPORTED_MODULE_0__.default('Cry in the corner', ':*(', 'none', 'Low', true, 'College'), new _task_js__WEBPACK_IMPORTED_MODULE_0__.default('Buy Banana(SINGLE)', 'Tasty', 'none', 'High', true, 'today')];
      this.localStorageHandler = new _localStorageHandler_js__WEBPACK_IMPORTED_MODULE_1__.default(this.tasks);
    }
  }

  _createClass(TaskTracker, [{
    key: "currFocus",
    get: function get() {
      return this.focus;
    },
    set: function set(cf) {
      var _cf;

      if (cf) {
        cf = cf.toLowerCase();
      }

      this.focus = (_cf = cf) !== null && _cf !== void 0 ? _cf : 'home';
    }
  }, {
    key: "getTasks",
    value: function getTasks() {
      var _this = this;

      if (this.currFocus == 'home') {
        return this.tasks;
      }

      var selectedTasks = this.tasks.filter(function (task) {
        return task.project.toLowerCase() === _this.currFocus && task.title;
      });
      return selectedTasks;
    }
  }, {
    key: "getTaskById",
    value: function getTaskById(id) {
      return this.tasks.find(function (task) {
        return task.id === id;
      });
    }
  }, {
    key: "completeXOR",
    value: function completeXOR(id) {
      var selectedTask = this.getTaskById(id);
      selectedTask.isComplete ^= 1; // xor

      this.localStorageHandler.saveEditedTask(id, selectedTask);
    }
  }, {
    key: "projectCounter",
    value: function projectCounter() {
      var _this2 = this;

      var collections = {};
      this.tasks.forEach(function (task) {
        if (typeof collections[task.project] === 'undefined') {
          collections[task.project] = 0;
        }

        if (task.title) {
          collections[task.project]++;
        }

        _this2.projectsSet.add(task.project);
      });
      return collections;
    }
  }, {
    key: "addProject",
    value: function addProject(p) {
      // SOLID VIOLATION
      messagePlane.textContent = '';
      var projectToAdd = p;
      p = p.toLowerCase().trim();

      if (p == 'home') {
        return false;
      }

      if (this.projectsSet.has(p)) {
        messagePlane.textContent = "'".concat(projectToAdd, "' Already Exists");
        return false;
      }

      this.projectsSet.add(projectToAdd);
      this.tasks.push(new _task_js__WEBPACK_IMPORTED_MODULE_0__.default(undefined, 'a', undefined, 'a', false, projectToAdd)); // empty task object for local strorage parser

      return true;
    }
  }, {
    key: "getProjects",
    value: function getProjects() {
      return Array.from(this.projectsSet);
    }
  }, {
    key: "updateTask",
    value: function updateTask(id, mTitle, mDescrip, mDueDate, mPrio, mProject) {
      var taskObj = this.getTaskById(id);

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
      taskObj.dueDate = mDueDate;
      this.localStorageHandler.saveEditedTask(id, taskObj);
      return 1;
    }
  }, {
    key: "addNewTask",
    value: function addNewTask(nTitle, nDescrip, nDueDate, nPrio, nProject) {
      if (isBlank(nTitle) || isBlank(nPrio)) {
        return 0;
      }

      var newTask = new _task_js__WEBPACK_IMPORTED_MODULE_0__.default(nTitle, nDescrip, nDueDate, nPrio, false, nProject);
      this.tasks.push(newTask);
      this.localStorageHandler.addNewTask(newTask);
      return 1;
    }
  }, {
    key: "deleteTask",
    value: function deleteTask(uuid) {
      var idx = this.tasks.findIndex(function (ele) {
        return ele.id == uuid;
      });

      if (typeof idx === 'undefined') {
        return;
      }

      this.tasks.splice(idx, 1);
      this.localStorageHandler.deleteTask(uuid);
    }
  }]);

  return TaskTracker;
}();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TaskTracker);

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/reset.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/reset.css ***!
  \********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* Box sizing rules */\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\n\n/* Remove default margin */\nbody,\nh1,\nh2,\nh3,\nh4,\np,\nfigure,\nblockquote,\ndl,\ndd {\n  margin: 0;\n}\n\n/* Remove list styles on ul, ol elements with a list role, which suggests default styling will be removed */\nul[role=\"list\"],\nol[role=\"list\"] {\n  list-style: none;\n}\n\n/* Set core root defaults */\nhtml:focus-within {\n  scroll-behavior: smooth;\n}\n\n/* Set core body defaults */\nbody {\n  min-height: 100vh;\n  text-rendering: optimizeSpeed;\n  line-height: 1.5;\n}\n\n/* A elements that don't have a class get default styles */\na:not([class]) {\n  text-decoration-skip-ink: auto;\n}\n\n/* Make images easier to work with */\nimg,\npicture {\n  max-width: 100%;\n  display: block;\n}\n\n/* Inherit fonts for inputs and buttons */\ninput,\nbutton,\ntextarea,\nselect {\n  font: inherit;\n}\n\nbutton {\n  background: none;\n  border: none;\n}\n\n/* Remove all animations, transitions and smooth scroll for people that prefer not to see them */\n@media (prefers-reduced-motion: reduce) {\n  html:focus-within {\n    scroll-behavior: auto;\n  }\n\n  *,\n  *::before,\n  *::after {\n    animation-duration: 0.01ms !important;\n    animation-iteration-count: 1 !important;\n    transition-duration: 0.01ms !important;\n    scroll-behavior: auto !important;\n  }\n}\n", "",{"version":3,"sources":["webpack://./src/styles/reset.css"],"names":[],"mappings":"AAAA,qBAAqB;AACrB;;;EAGE,sBAAsB;AACxB;;AAEA,0BAA0B;AAC1B;;;;;;;;;;EAUE,SAAS;AACX;;AAEA,2GAA2G;AAC3G;;EAEE,gBAAgB;AAClB;;AAEA,2BAA2B;AAC3B;EACE,uBAAuB;AACzB;;AAEA,2BAA2B;AAC3B;EACE,iBAAiB;EACjB,6BAA6B;EAC7B,gBAAgB;AAClB;;AAEA,0DAA0D;AAC1D;EACE,8BAA8B;AAChC;;AAEA,oCAAoC;AACpC;;EAEE,eAAe;EACf,cAAc;AAChB;;AAEA,yCAAyC;AACzC;;;;EAIE,aAAa;AACf;;AAEA;EACE,gBAAgB;EAChB,YAAY;AACd;;AAEA,gGAAgG;AAChG;EACE;IACE,qBAAqB;EACvB;;EAEA;;;IAGE,qCAAqC;IACrC,uCAAuC;IACvC,sCAAsC;IACtC,gCAAgC;EAClC;AACF","sourcesContent":["/* Box sizing rules */\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\n\n/* Remove default margin */\nbody,\nh1,\nh2,\nh3,\nh4,\np,\nfigure,\nblockquote,\ndl,\ndd {\n  margin: 0;\n}\n\n/* Remove list styles on ul, ol elements with a list role, which suggests default styling will be removed */\nul[role=\"list\"],\nol[role=\"list\"] {\n  list-style: none;\n}\n\n/* Set core root defaults */\nhtml:focus-within {\n  scroll-behavior: smooth;\n}\n\n/* Set core body defaults */\nbody {\n  min-height: 100vh;\n  text-rendering: optimizeSpeed;\n  line-height: 1.5;\n}\n\n/* A elements that don't have a class get default styles */\na:not([class]) {\n  text-decoration-skip-ink: auto;\n}\n\n/* Make images easier to work with */\nimg,\npicture {\n  max-width: 100%;\n  display: block;\n}\n\n/* Inherit fonts for inputs and buttons */\ninput,\nbutton,\ntextarea,\nselect {\n  font: inherit;\n}\n\nbutton {\n  background: none;\n  border: none;\n}\n\n/* Remove all animations, transitions and smooth scroll for people that prefer not to see them */\n@media (prefers-reduced-motion: reduce) {\n  html:focus-within {\n    scroll-behavior: auto;\n  }\n\n  *,\n  *::before,\n  *::after {\n    animation-duration: 0.01ms !important;\n    animation-iteration-count: 1 !important;\n    transition-duration: 0.01ms !important;\n    scroll-behavior: auto !important;\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/styles.css":
/*!*********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/styles.css ***!
  \*********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Titillium+Web:ital,wght@0,200;0,300;0,400;0,600;1,200;1,300;1,400;1,600&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;1,100;1,200;1,300;1,400;1,500&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --link-active: #4c8bf5;\n  --table-row-padding: 3px;\n\n  --addpreclr: #19b96f;\n  --cancelpreclr: rgb(253, 122, 99);\n\n  --addclr: #008f4c;\n  --cancelclr: tomato;\n}\nbody {\n  font-family: \"Montserrat\", sans-serif;\n}\n.head-cont {\n  background-color: #4c8bf5;\n  display: flex;\n  position: sticky;\n  top: 0;\n  height: 50px;\n  width: 100%;\n  padding: 3px;\n  z-index: 1;\n  justify-content: space-between;\n  align-items: center;\n}\n.header-img {\n  width: 40px;\n  height: 40px;\n  cursor: pointer;\n  border-radius: 5px;\n}\n\n.header-img:hover {\n  background-color: rgba(255, 255, 255, 0.1);\n}\n\n.sideMenu {\n  height: 100%;\n  width: 250px;\n  position: fixed;\n  top: 0;\n  left: 0;\n  background-color: rgb(171, 193, 216);\n  font-family: \"Titillium Web\", sans-serif;\n  transition: margin-left 0.5s;\n}\n\n.sideMenu ul.menu-main {\n  list-style: none;\n  padding: 0;\n  margin-top: 65px;\n  margin-left: 30px;\n}\n\n.sideMenu a.link {\n  text-decoration: none;\n  margin-bottom: 30px;\n  font-size: 2rem;\n  color: white;\n  display: block;\n  transition: 0.2s;\n}\n\n.sideMenu a.link:hover {\n  color: var(--link-active);\n}\n.sideMenu a.link.active {\n  color: var(--link-active);\n}\n.sideMenu li:last-of-type a {\n  margin-bottom: 0;\n}\n#add-project-btn {\n  color: white;\n  font-size: 2rem;\n}\n.content {\n  margin-left: 250px;\n  transition: margin-left 0.5s;\n  padding: 10px;\n  max-width: 1000px;\n}\n.page-title {\n  margin-bottom: 15px;\n  font-size: 3rem;\n}\n\n.table-row {\n  display: flex;\n  justify-content: space-between;\n  border-bottom: 0.5px gray solid;\n  padding: var(--table-row-padding);\n  position: relative;\n}\n.title {\n  font-weight: 600;\n}\n.table-row-side {\n  display: flex;\n}\n.dueDate {\n  width: 150px;\n  font-weight: 500;\n}\n.dueDate.overdue {\n  color: red;\n}\n.priority {\n  display: flex;\n  width: 100px;\n  justify-content: space-between;\n  align-content: center;\n}\n.low {\n  color: #04aa6d;\n}\n.medium {\n  color: #db4c3f;\n}\n.high {\n  color: red;\n}\n.check-box-cont {\n  display: flex;\n}\n.crossout {\n  text-decoration: line-through;\n  color: gray;\n}\n.project-link {\n  display: flex;\n}\n\n#add-project-btn {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 50px;\n  height: 50px;\n  border-radius: 100%;\n  padding: 0;\n}\n#add-project-btn:hover {\n  background-color: rgba(255, 255, 255, 0.377);\n  color: var(--link-active);\n}\n\n/* MODAL STYLING START */\n\n.modal {\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%) scale(0);\n  border: 0.5px black solid;\n  border-radius: 10px;\n  z-index: 10;\n  background-color: white;\n  width: 500px;\n  max-width: 80%;\n  transition: 200ms ease-in-out;\n}\n.modal.active {\n  transform: translate(-50%, -50%) scale(1);\n}\n.modal-header {\n  padding: 10px 15px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.modal-header .title {\n  font-size: 1.25rem;\n  font-weight: bold;\n}\n\n.modal-header .close-button {\n  outline: none;\n  border: none;\n  background: none;\n  cursor: pointer;\n  font-size: 1.25rem;\n  font-weight: bolder;\n}\n\n.modal-body {\n  padding: 10px 15px;\n}\n\n.overlay {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: rgba(0, 0, 0, 0.2);\n  opacity: 0;\n  pointer-events: none;\n  z-index: 1;\n}\n.overlay.active {\n  pointer-events: all;\n  opacity: 1;\n}\n\n/* MODAL END */\n\n.table-row-img {\n  position: relative;\n  right: 0;\n  top: var(--table-row-padding);\n  width: 21px;\n  height: 21px;\n}\n\n.project-page-link-cont {\n  display: flex;\n  font-size: 1.5rem;\n  font-weight: 300;\n  margin: 10px 0px;\n  width: 400px;\n  justify-content: space-between;\n}\n.project-page-link,\n.project-page-link-text {\n  padding: 10px;\n  border-radius: 30px;\n}\n.project-page-link {\n  cursor: pointer;\n  font-weight: 500;\n}\n.project-page-link:hover {\n  background: rgba(76, 139, 245, 0.3);\n}\n.project-page-link-text {\n  display: inline;\n}\n.project-page-delbtn {\n  font-size: 25px;\n  font-weight: bold;\n  cursor: pointer;\n  color: var(--link-active);\n}\n\n.project-nav-ext {\n  margin: 0;\n  padding: 0;\n  text-decoration: none;\n}\n.project-nav-ext a:link,\n.project-nav-ext a:visited {\n  color: white;\n  font-size: 1.25rem;\n  text-decoration: none;\n  position: relative;\n}\n.project-nav-ext {\n  width: 200px;\n  margin-left: auto;\n  list-style-type: none;\n}\nul.project-nav-ext > a.active {\n  border: 1px red solid;\n}\n.form-flex-col {\n  display: flex;\n  flex-direction: column;\n  margin: 10px;\n  width: 100%;\n}\n.form-flex-row {\n  padding: 2px;\n  display: flex;\n  justify-content: flex-start;\n}\n.flex-col-input {\n  width: 100%;\n}\ninput,\nselect {\n  background: none;\n  border: none;\n  border: 0.5px solid #8f8f9d;\n  border-radius: 3px;\n}\nselect {\n  padding: 3.5px;\n  display: inline;\n}\n#task-descrip-modal {\n  resize: vertical;\n  width: calc(100% - 20px);\n}\n\n.buttons-flex {\n  display: flex;\n  align-content: center;\n  justify-content: center;\n  padding: 10px;\n  gap: 25px;\n}\n\n.buttons-flex > button {\n  border-radius: 3px;\n  width: 100px;\n  padding: 7px 0px;\n  border: 1px solid white;\n  background: var(--link-active);\n  color: white;\n  transition: 0.5s;\n}\n\n#modal-save {\n  background: #1dbf73;\n}\n\n.buttons-flex > button:hover {\n  transform: scale(1.2);\n}\n\n.add-task-cont {\n  display: flex;\n  justify-content: center;\n  align-content: center;\n}\n\n.add-task-text {\n  align-self: center;\n  color: white;\n  font-weight: bold;\n  margin-right: 5px;\n}\n\n.add-task-img {\n  width: 30px;\n  height: 30px;\n  cursor: pointer;\n  align-self: center;\n}\n.Bkgrndhighlight {\n  width: 40px;\n  height: 40px;\n  display: flex;\n  justify-content: center;\n  border-radius: 10px;\n}\n.Bkgrndhighlight:hover {\n  background: rgba(255, 255, 255, 0.151);\n}\n\n.add-project-cont {\n  width: 200px;\n  margin-left: auto;\n  display: none;\n  transition: 0.5s ease-in-out;\n}\n.add-project-cont.active {\n  display: block;\n}\n.add-project-text {\n  color: white;\n  font-weight: bold;\n}\n#add-project {\n  width: 140px;\n  background: white;\n  outline: none;\n  margin-bottom: 0px;\n}\n#add {\n  color: var(--addpreclr);\n  border-color: var(--addpreclr);\n}\n#cancel {\n  color: var(--cancelpreclr);\n  border-color: var(--cancelpreclr);\n}\n\n#add:hover {\n  color: var(--addclr);\n  border-color: var(--addclr);\n}\n#cancel:hover {\n  color: var(--cancelclr);\n  border-color: var(--cancelclr);\n}\n.add-project-btn-cont {\n  width: 140px;\n  display: flex;\n  gap: 5px;\n}\n.add-project-btn {\n  margin: 0px;\n  margin-top: 5px;\n  align-self: center;\n  padding: 0%;\n  color: white;\n  background: none;\n  border: none;\n  width: 50%;\n\n  padding: 0;\n  font-size: 16px;\n  font-weight: bolder;\n  padding: 2px;\n\n  border: 1px white solid;\n  border-radius: 3px;\n}\n\n.add-project-preimage {\n  display: none;\n  width: 200px;\n  margin-left: auto;\n}\n.add-project-preimage.active {\n  display: block;\n}\n.add-project-prebutton {\n  color: white;\n  background: #78a8fa;\n  padding: 8px 12px;\n  border-radius: 10px;\n  font-weight: bolder;\n}\n.add-project-prebutton:hover {\n  background: #001538;\n}\n#add-project-text-info {\n  font-size: 14px;\n  font-style: italic;\n  color: white;\n}\n\n.del-img-cont {\n  position: absolute;\n  padding: 0px;\n  bottom: 10px;\n  left: 5px;\n  display: none;\n}\n.del-img-cont.active {\n  display: block;\n}\n\n.del-task-img {\n  padding: 5px;\n  --sz: 40px;\n  width: var(--sz);\n  height: var(--sz);\n  cursor: pointer;\n  border-radius: 10px;\n}\n.del-task-img:hover {\n  background: rgb(255, 164, 131);\n}\n\nfooter {\n  position: fixed;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background: #000;\n  color: white;\n  text-align: center;\n}\n", "",{"version":3,"sources":["webpack://./src/styles/styles.css"],"names":[],"mappings":"AAGA;EACE,sBAAsB;EACtB,wBAAwB;;EAExB,oBAAoB;EACpB,iCAAiC;;EAEjC,iBAAiB;EACjB,mBAAmB;AACrB;AACA;EACE,qCAAqC;AACvC;AACA;EACE,yBAAyB;EACzB,aAAa;EACb,gBAAgB;EAChB,MAAM;EACN,YAAY;EACZ,WAAW;EACX,YAAY;EACZ,UAAU;EACV,8BAA8B;EAC9B,mBAAmB;AACrB;AACA;EACE,WAAW;EACX,YAAY;EACZ,eAAe;EACf,kBAAkB;AACpB;;AAEA;EACE,0CAA0C;AAC5C;;AAEA;EACE,YAAY;EACZ,YAAY;EACZ,eAAe;EACf,MAAM;EACN,OAAO;EACP,oCAAoC;EACpC,wCAAwC;EACxC,4BAA4B;AAC9B;;AAEA;EACE,gBAAgB;EAChB,UAAU;EACV,gBAAgB;EAChB,iBAAiB;AACnB;;AAEA;EACE,qBAAqB;EACrB,mBAAmB;EACnB,eAAe;EACf,YAAY;EACZ,cAAc;EACd,gBAAgB;AAClB;;AAEA;EACE,yBAAyB;AAC3B;AACA;EACE,yBAAyB;AAC3B;AACA;EACE,gBAAgB;AAClB;AACA;EACE,YAAY;EACZ,eAAe;AACjB;AACA;EACE,kBAAkB;EAClB,4BAA4B;EAC5B,aAAa;EACb,iBAAiB;AACnB;AACA;EACE,mBAAmB;EACnB,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,+BAA+B;EAC/B,iCAAiC;EACjC,kBAAkB;AACpB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,aAAa;AACf;AACA;EACE,YAAY;EACZ,gBAAgB;AAClB;AACA;EACE,UAAU;AACZ;AACA;EACE,aAAa;EACb,YAAY;EACZ,8BAA8B;EAC9B,qBAAqB;AACvB;AACA;EACE,cAAc;AAChB;AACA;EACE,cAAc;AAChB;AACA;EACE,UAAU;AACZ;AACA;EACE,aAAa;AACf;AACA;EACE,6BAA6B;EAC7B,WAAW;AACb;AACA;EACE,aAAa;AACf;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,WAAW;EACX,YAAY;EACZ,mBAAmB;EACnB,UAAU;AACZ;AACA;EACE,4CAA4C;EAC5C,yBAAyB;AAC3B;;AAEA,wBAAwB;;AAExB;EACE,eAAe;EACf,QAAQ;EACR,SAAS;EACT,yCAAyC;EACzC,yBAAyB;EACzB,mBAAmB;EACnB,WAAW;EACX,uBAAuB;EACvB,YAAY;EACZ,cAAc;EACd,6BAA6B;AAC/B;AACA;EACE,yCAAyC;AAC3C;AACA;EACE,kBAAkB;EAClB,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;AACrB;AACA;EACE,kBAAkB;EAClB,iBAAiB;AACnB;;AAEA;EACE,aAAa;EACb,YAAY;EACZ,gBAAgB;EAChB,eAAe;EACf,kBAAkB;EAClB,mBAAmB;AACrB;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,eAAe;EACf,MAAM;EACN,OAAO;EACP,QAAQ;EACR,SAAS;EACT,oCAAoC;EACpC,UAAU;EACV,oBAAoB;EACpB,UAAU;AACZ;AACA;EACE,mBAAmB;EACnB,UAAU;AACZ;;AAEA,cAAc;;AAEd;EACE,kBAAkB;EAClB,QAAQ;EACR,6BAA6B;EAC7B,WAAW;EACX,YAAY;AACd;;AAEA;EACE,aAAa;EACb,iBAAiB;EACjB,gBAAgB;EAChB,gBAAgB;EAChB,YAAY;EACZ,8BAA8B;AAChC;AACA;;EAEE,aAAa;EACb,mBAAmB;AACrB;AACA;EACE,eAAe;EACf,gBAAgB;AAClB;AACA;EACE,mCAAmC;AACrC;AACA;EACE,eAAe;AACjB;AACA;EACE,eAAe;EACf,iBAAiB;EACjB,eAAe;EACf,yBAAyB;AAC3B;;AAEA;EACE,SAAS;EACT,UAAU;EACV,qBAAqB;AACvB;AACA;;EAEE,YAAY;EACZ,kBAAkB;EAClB,qBAAqB;EACrB,kBAAkB;AACpB;AACA;EACE,YAAY;EACZ,iBAAiB;EACjB,qBAAqB;AACvB;AACA;EACE,qBAAqB;AACvB;AACA;EACE,aAAa;EACb,sBAAsB;EACtB,YAAY;EACZ,WAAW;AACb;AACA;EACE,YAAY;EACZ,aAAa;EACb,2BAA2B;AAC7B;AACA;EACE,WAAW;AACb;AACA;;EAEE,gBAAgB;EAChB,YAAY;EACZ,2BAA2B;EAC3B,kBAAkB;AACpB;AACA;EACE,cAAc;EACd,eAAe;AACjB;AACA;EACE,gBAAgB;EAChB,wBAAwB;AAC1B;;AAEA;EACE,aAAa;EACb,qBAAqB;EACrB,uBAAuB;EACvB,aAAa;EACb,SAAS;AACX;;AAEA;EACE,kBAAkB;EAClB,YAAY;EACZ,gBAAgB;EAChB,uBAAuB;EACvB,8BAA8B;EAC9B,YAAY;EACZ,gBAAgB;AAClB;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,qBAAqB;AACvB;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,qBAAqB;AACvB;;AAEA;EACE,kBAAkB;EAClB,YAAY;EACZ,iBAAiB;EACjB,iBAAiB;AACnB;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,eAAe;EACf,kBAAkB;AACpB;AACA;EACE,WAAW;EACX,YAAY;EACZ,aAAa;EACb,uBAAuB;EACvB,mBAAmB;AACrB;AACA;EACE,sCAAsC;AACxC;;AAEA;EACE,YAAY;EACZ,iBAAiB;EACjB,aAAa;EACb,4BAA4B;AAC9B;AACA;EACE,cAAc;AAChB;AACA;EACE,YAAY;EACZ,iBAAiB;AACnB;AACA;EACE,YAAY;EACZ,iBAAiB;EACjB,aAAa;EACb,kBAAkB;AACpB;AACA;EACE,uBAAuB;EACvB,8BAA8B;AAChC;AACA;EACE,0BAA0B;EAC1B,iCAAiC;AACnC;;AAEA;EACE,oBAAoB;EACpB,2BAA2B;AAC7B;AACA;EACE,uBAAuB;EACvB,8BAA8B;AAChC;AACA;EACE,YAAY;EACZ,aAAa;EACb,QAAQ;AACV;AACA;EACE,WAAW;EACX,eAAe;EACf,kBAAkB;EAClB,WAAW;EACX,YAAY;EACZ,gBAAgB;EAChB,YAAY;EACZ,UAAU;;EAEV,UAAU;EACV,eAAe;EACf,mBAAmB;EACnB,YAAY;;EAEZ,uBAAuB;EACvB,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,YAAY;EACZ,iBAAiB;AACnB;AACA;EACE,cAAc;AAChB;AACA;EACE,YAAY;EACZ,mBAAmB;EACnB,iBAAiB;EACjB,mBAAmB;EACnB,mBAAmB;AACrB;AACA;EACE,mBAAmB;AACrB;AACA;EACE,eAAe;EACf,kBAAkB;EAClB,YAAY;AACd;;AAEA;EACE,kBAAkB;EAClB,YAAY;EACZ,YAAY;EACZ,SAAS;EACT,aAAa;AACf;AACA;EACE,cAAc;AAChB;;AAEA;EACE,YAAY;EACZ,UAAU;EACV,gBAAgB;EAChB,iBAAiB;EACjB,eAAe;EACf,mBAAmB;AACrB;AACA;EACE,8BAA8B;AAChC;;AAEA;EACE,eAAe;EACf,SAAS;EACT,OAAO;EACP,QAAQ;EACR,gBAAgB;EAChB,YAAY;EACZ,kBAAkB;AACpB","sourcesContent":["@import url(\"https://fonts.googleapis.com/css2?family=Titillium+Web:ital,wght@0,200;0,300;0,400;0,600;1,200;1,300;1,400;1,600&display=swap\");\n@import url(\"https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;1,100;1,200;1,300;1,400;1,500&display=swap\");\n\n:root {\n  --link-active: #4c8bf5;\n  --table-row-padding: 3px;\n\n  --addpreclr: #19b96f;\n  --cancelpreclr: rgb(253, 122, 99);\n\n  --addclr: #008f4c;\n  --cancelclr: tomato;\n}\nbody {\n  font-family: \"Montserrat\", sans-serif;\n}\n.head-cont {\n  background-color: #4c8bf5;\n  display: flex;\n  position: sticky;\n  top: 0;\n  height: 50px;\n  width: 100%;\n  padding: 3px;\n  z-index: 1;\n  justify-content: space-between;\n  align-items: center;\n}\n.header-img {\n  width: 40px;\n  height: 40px;\n  cursor: pointer;\n  border-radius: 5px;\n}\n\n.header-img:hover {\n  background-color: rgba(255, 255, 255, 0.1);\n}\n\n.sideMenu {\n  height: 100%;\n  width: 250px;\n  position: fixed;\n  top: 0;\n  left: 0;\n  background-color: rgb(171, 193, 216);\n  font-family: \"Titillium Web\", sans-serif;\n  transition: margin-left 0.5s;\n}\n\n.sideMenu ul.menu-main {\n  list-style: none;\n  padding: 0;\n  margin-top: 65px;\n  margin-left: 30px;\n}\n\n.sideMenu a.link {\n  text-decoration: none;\n  margin-bottom: 30px;\n  font-size: 2rem;\n  color: white;\n  display: block;\n  transition: 0.2s;\n}\n\n.sideMenu a.link:hover {\n  color: var(--link-active);\n}\n.sideMenu a.link.active {\n  color: var(--link-active);\n}\n.sideMenu li:last-of-type a {\n  margin-bottom: 0;\n}\n#add-project-btn {\n  color: white;\n  font-size: 2rem;\n}\n.content {\n  margin-left: 250px;\n  transition: margin-left 0.5s;\n  padding: 10px;\n  max-width: 1000px;\n}\n.page-title {\n  margin-bottom: 15px;\n  font-size: 3rem;\n}\n\n.table-row {\n  display: flex;\n  justify-content: space-between;\n  border-bottom: 0.5px gray solid;\n  padding: var(--table-row-padding);\n  position: relative;\n}\n.title {\n  font-weight: 600;\n}\n.table-row-side {\n  display: flex;\n}\n.dueDate {\n  width: 150px;\n  font-weight: 500;\n}\n.dueDate.overdue {\n  color: red;\n}\n.priority {\n  display: flex;\n  width: 100px;\n  justify-content: space-between;\n  align-content: center;\n}\n.low {\n  color: #04aa6d;\n}\n.medium {\n  color: #db4c3f;\n}\n.high {\n  color: red;\n}\n.check-box-cont {\n  display: flex;\n}\n.crossout {\n  text-decoration: line-through;\n  color: gray;\n}\n.project-link {\n  display: flex;\n}\n\n#add-project-btn {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 50px;\n  height: 50px;\n  border-radius: 100%;\n  padding: 0;\n}\n#add-project-btn:hover {\n  background-color: rgba(255, 255, 255, 0.377);\n  color: var(--link-active);\n}\n\n/* MODAL STYLING START */\n\n.modal {\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%) scale(0);\n  border: 0.5px black solid;\n  border-radius: 10px;\n  z-index: 10;\n  background-color: white;\n  width: 500px;\n  max-width: 80%;\n  transition: 200ms ease-in-out;\n}\n.modal.active {\n  transform: translate(-50%, -50%) scale(1);\n}\n.modal-header {\n  padding: 10px 15px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.modal-header .title {\n  font-size: 1.25rem;\n  font-weight: bold;\n}\n\n.modal-header .close-button {\n  outline: none;\n  border: none;\n  background: none;\n  cursor: pointer;\n  font-size: 1.25rem;\n  font-weight: bolder;\n}\n\n.modal-body {\n  padding: 10px 15px;\n}\n\n.overlay {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: rgba(0, 0, 0, 0.2);\n  opacity: 0;\n  pointer-events: none;\n  z-index: 1;\n}\n.overlay.active {\n  pointer-events: all;\n  opacity: 1;\n}\n\n/* MODAL END */\n\n.table-row-img {\n  position: relative;\n  right: 0;\n  top: var(--table-row-padding);\n  width: 21px;\n  height: 21px;\n}\n\n.project-page-link-cont {\n  display: flex;\n  font-size: 1.5rem;\n  font-weight: 300;\n  margin: 10px 0px;\n  width: 400px;\n  justify-content: space-between;\n}\n.project-page-link,\n.project-page-link-text {\n  padding: 10px;\n  border-radius: 30px;\n}\n.project-page-link {\n  cursor: pointer;\n  font-weight: 500;\n}\n.project-page-link:hover {\n  background: rgba(76, 139, 245, 0.3);\n}\n.project-page-link-text {\n  display: inline;\n}\n.project-page-delbtn {\n  font-size: 25px;\n  font-weight: bold;\n  cursor: pointer;\n  color: var(--link-active);\n}\n\n.project-nav-ext {\n  margin: 0;\n  padding: 0;\n  text-decoration: none;\n}\n.project-nav-ext a:link,\n.project-nav-ext a:visited {\n  color: white;\n  font-size: 1.25rem;\n  text-decoration: none;\n  position: relative;\n}\n.project-nav-ext {\n  width: 200px;\n  margin-left: auto;\n  list-style-type: none;\n}\nul.project-nav-ext > a.active {\n  border: 1px red solid;\n}\n.form-flex-col {\n  display: flex;\n  flex-direction: column;\n  margin: 10px;\n  width: 100%;\n}\n.form-flex-row {\n  padding: 2px;\n  display: flex;\n  justify-content: flex-start;\n}\n.flex-col-input {\n  width: 100%;\n}\ninput,\nselect {\n  background: none;\n  border: none;\n  border: 0.5px solid #8f8f9d;\n  border-radius: 3px;\n}\nselect {\n  padding: 3.5px;\n  display: inline;\n}\n#task-descrip-modal {\n  resize: vertical;\n  width: calc(100% - 20px);\n}\n\n.buttons-flex {\n  display: flex;\n  align-content: center;\n  justify-content: center;\n  padding: 10px;\n  gap: 25px;\n}\n\n.buttons-flex > button {\n  border-radius: 3px;\n  width: 100px;\n  padding: 7px 0px;\n  border: 1px solid white;\n  background: var(--link-active);\n  color: white;\n  transition: 0.5s;\n}\n\n#modal-save {\n  background: #1dbf73;\n}\n\n.buttons-flex > button:hover {\n  transform: scale(1.2);\n}\n\n.add-task-cont {\n  display: flex;\n  justify-content: center;\n  align-content: center;\n}\n\n.add-task-text {\n  align-self: center;\n  color: white;\n  font-weight: bold;\n  margin-right: 5px;\n}\n\n.add-task-img {\n  width: 30px;\n  height: 30px;\n  cursor: pointer;\n  align-self: center;\n}\n.Bkgrndhighlight {\n  width: 40px;\n  height: 40px;\n  display: flex;\n  justify-content: center;\n  border-radius: 10px;\n}\n.Bkgrndhighlight:hover {\n  background: rgba(255, 255, 255, 0.151);\n}\n\n.add-project-cont {\n  width: 200px;\n  margin-left: auto;\n  display: none;\n  transition: 0.5s ease-in-out;\n}\n.add-project-cont.active {\n  display: block;\n}\n.add-project-text {\n  color: white;\n  font-weight: bold;\n}\n#add-project {\n  width: 140px;\n  background: white;\n  outline: none;\n  margin-bottom: 0px;\n}\n#add {\n  color: var(--addpreclr);\n  border-color: var(--addpreclr);\n}\n#cancel {\n  color: var(--cancelpreclr);\n  border-color: var(--cancelpreclr);\n}\n\n#add:hover {\n  color: var(--addclr);\n  border-color: var(--addclr);\n}\n#cancel:hover {\n  color: var(--cancelclr);\n  border-color: var(--cancelclr);\n}\n.add-project-btn-cont {\n  width: 140px;\n  display: flex;\n  gap: 5px;\n}\n.add-project-btn {\n  margin: 0px;\n  margin-top: 5px;\n  align-self: center;\n  padding: 0%;\n  color: white;\n  background: none;\n  border: none;\n  width: 50%;\n\n  padding: 0;\n  font-size: 16px;\n  font-weight: bolder;\n  padding: 2px;\n\n  border: 1px white solid;\n  border-radius: 3px;\n}\n\n.add-project-preimage {\n  display: none;\n  width: 200px;\n  margin-left: auto;\n}\n.add-project-preimage.active {\n  display: block;\n}\n.add-project-prebutton {\n  color: white;\n  background: #78a8fa;\n  padding: 8px 12px;\n  border-radius: 10px;\n  font-weight: bolder;\n}\n.add-project-prebutton:hover {\n  background: #001538;\n}\n#add-project-text-info {\n  font-size: 14px;\n  font-style: italic;\n  color: white;\n}\n\n.del-img-cont {\n  position: absolute;\n  padding: 0px;\n  bottom: 10px;\n  left: 5px;\n  display: none;\n}\n.del-img-cont.active {\n  display: block;\n}\n\n.del-task-img {\n  padding: 5px;\n  --sz: 40px;\n  width: var(--sz);\n  height: var(--sz);\n  cursor: pointer;\n  border-radius: 10px;\n}\n.del-task-img:hover {\n  background: rgb(255, 164, 131);\n}\n\nfooter {\n  position: fixed;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background: #000;\n  color: white;\n  text-align: center;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/cssWithMappingToString.js ***!
  \************************************************************************/
/***/ ((module) => {



function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    // eslint-disable-next-line no-undef
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles/reset.css":
/*!******************************!*\
  !*** ./src/styles/reset.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./reset.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/reset.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_6__.default, options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_6__.default && _node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_6__.default.locals ? _node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_6__.default.locals : undefined);


/***/ }),

/***/ "./src/styles/styles.css":
/*!*******************************!*\
  !*** ./src/styles/styles.css ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__.default, options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__.default && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__.default.locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__.default.locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var style = document.createElement("style");
  options.setAttributes(style, options.attributes);
  options.insert(style);
  return style;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(style) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    style.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute("media", media);
  } else {
    style.removeAttribute("media");
  }

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, style);
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


function domAPI(options) {
  var style = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(style, options, obj);
    },
    remove: function remove() {
      removeStyleElement(style);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, style) {
  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/regex.js":
/*!*****************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/regex.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i);

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/rng.js":
/*!***************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/rng.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ rng)
/* harmony export */ });
// Unique ID creation requires a high quality random # generator. In the browser we therefore
// require the crypto API and do not support built-in fallback to lower quality random number
// generators (like Math.random()).
var getRandomValues;
var rnds8 = new Uint8Array(16);
function rng() {
  // lazy load so that environments that need to polyfill have a chance to do so
  if (!getRandomValues) {
    // getRandomValues needs to be invoked in a context where "this" is a Crypto implementation. Also,
    // find the complete implementation of crypto (msCrypto) on IE11.
    getRandomValues = typeof crypto !== 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || typeof msCrypto !== 'undefined' && typeof msCrypto.getRandomValues === 'function' && msCrypto.getRandomValues.bind(msCrypto);

    if (!getRandomValues) {
      throw new Error('crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported');
    }
  }

  return getRandomValues(rnds8);
}

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/stringify.js":
/*!*********************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/stringify.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _validate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./validate.js */ "./node_modules/uuid/dist/esm-browser/validate.js");

/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */

var byteToHex = [];

for (var i = 0; i < 256; ++i) {
  byteToHex.push((i + 0x100).toString(16).substr(1));
}

function stringify(arr) {
  var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  // Note: Be careful editing this code!  It's been tuned for performance
  // and works in ways you may not expect. See https://github.com/uuidjs/uuid/pull/434
  var uuid = (byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + '-' + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + '-' + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + '-' + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + '-' + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]]).toLowerCase(); // Consistency check for valid UUID.  If this throws, it's likely due to one
  // of the following:
  // - One or more input array values don't map to a hex octet (leading to
  // "undefined" in the uuid)
  // - Invalid input values for the RFC `version` or `variant` fields

  if (!(0,_validate_js__WEBPACK_IMPORTED_MODULE_0__.default)(uuid)) {
    throw TypeError('Stringified UUID is invalid');
  }

  return uuid;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (stringify);

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/v4.js":
/*!**************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/v4.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _rng_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rng.js */ "./node_modules/uuid/dist/esm-browser/rng.js");
/* harmony import */ var _stringify_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stringify.js */ "./node_modules/uuid/dist/esm-browser/stringify.js");



function v4(options, buf, offset) {
  options = options || {};
  var rnds = options.random || (options.rng || _rng_js__WEBPACK_IMPORTED_MODULE_0__.default)(); // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`

  rnds[6] = rnds[6] & 0x0f | 0x40;
  rnds[8] = rnds[8] & 0x3f | 0x80; // Copy bytes to buffer, if provided

  if (buf) {
    offset = offset || 0;

    for (var i = 0; i < 16; ++i) {
      buf[offset + i] = rnds[i];
    }

    return buf;
  }

  return (0,_stringify_js__WEBPACK_IMPORTED_MODULE_1__.default)(rnds);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (v4);

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/validate.js":
/*!********************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/validate.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _regex_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./regex.js */ "./node_modules/uuid/dist/esm-browser/regex.js");


function validate(uuid) {
  return typeof uuid === 'string' && _regex_js__WEBPACK_IMPORTED_MODULE_0__.default.test(uuid);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (validate);

/***/ }),

/***/ "./src/img/settings.png":
/*!******************************!*\
  !*** ./src/img/settings.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/30a4464bf104e1590f54.png";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	__webpack_require__("./src/index.js");
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	__webpack_require__("./src/pageLoader.js");
/******/ 	__webpack_require__("./src/DOMTaskTable.js");
/******/ 	__webpack_require__("./src/taskTracker.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/localStorageHandler.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=main.js.map