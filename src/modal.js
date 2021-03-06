import { renderPage } from "./pageLoader";

// model open/close
const openModalButtons = () => document.querySelectorAll("[data-modal-target]");
const closeModalButtons = () => document.querySelectorAll("[data-close-button]");
const overlay = document.querySelector(".overlay");

// model read/write to HTML
const mTitle = document.querySelector("#task-title-modal");
const mPrio = document.querySelector("#task-prio-modal");
const mDueDate = document.querySelector("#task-dueDate-modal");
const mProject = document.querySelector("#task-project-modal");
const mDescrip = document.querySelector("#task-descrip-modal");
const submitBTN = document.getElementById("modal-save");
const deleteBTN = document.querySelector(".del-img-cont");
const modalMode = document.querySelector("#modalmode");

const submitInfo = {
  isUpdate: false,
  isAddition: false,
  modal: null,
  TaskTracker: null,
};
const funcPointer = submitHandler.bind(submitInfo);
let targetId;

export function attachModalLisntener(TaskTrackerMain) {
  submitInfo.TaskTracker = TaskTrackerMain; //set up TaskTrackerPTR
  submitBTN.removeEventListener("click", funcPointer);
  submitBTN.addEventListener("click", funcPointer);

  openModalButtons().forEach((button) => {
    button.addEventListener("click", (e) => {
      const modal = document.querySelector(button.dataset.modalTarget);
      submitInfo.modal = modal;
      targetId = e.target.getAttribute("data-task-id"); // gets id of selected trigger

      const taskObj = TaskTrackerMain.getTaskById(targetId);
      loadProjects(TaskTrackerMain.getProjects());

      submitInfo.isUpdate = false;
      submitInfo.isAddition = false;
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

  closeModalButtons().forEach((button) => {
    button.addEventListener("click", () => {
      submitBTN;
      const modal = button.closest(".modal");
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

overlay.addEventListener("click", () => {
  const modals = document.querySelectorAll(".modal.active");
  modals.forEach((modal) => {
    closeModal(modal);
  });
  overlay.classList.remove("active");
});

function loadProjects(taskProjects) {
  // arr
  mProject.querySelectorAll("*").forEach((child) => child.remove()); // removes all list options before appending new ones
  let option;
  for (const project of taskProjects) {
    option = document.createElement("option");
    option.value = project;
    option.textContent = project;
    mProject.appendChild(option);
  }
}

function saveUpdate(modal, TaskTrackerMain) {
  const updateSuccess = TaskTrackerMain.updateTask(targetId, mTitle.value, mDescrip.value, mDueDate.value, mPrio.value, mProject.value);
  renderPage(undefined, TaskTrackerMain);
  if (updateSuccess) {
    closeModal(modal);
    renderPage(undefined, TaskTrackerMain);
  }
  // sends update to "TaskManager" :)
}

function addNewTask(modal, TaskTrackerMain) {
  //console.log(modal);
  const additionSuccess = TaskTrackerMain.addNewTask(mTitle.value, mDescrip.value, mDueDate.value, mPrio.value, mProject.value);
  if (additionSuccess) {
    closeModal(modal);
    renderPage(undefined, TaskTrackerMain);
  }
}

function submitHandler() {
  // this.isAddition  this.isUpdate, while both are not needed using 2 vars can help me reduce errors
  console.log("hit", this.isUpdate);
  if (this.isUpdate) {
    saveUpdate(this.modal, this.TaskTracker);
  } else {
    addNewTask(this.modal, this.TaskTracker);
  }
}

export function attachDeleteLisntener(TaskTrackerMain) {
  deleteBTN.addEventListener("click", (e) => {
    const uuidv4 = e.target.closest("[data-focus]").dataset.focus;
    if (uuidv4.length == 36) {
      // guard
      TaskTrackerMain.deleteTask(uuidv4);
    }
    const modal = e.target.closest("#modal");
    closeModal(modal);
    renderPage(undefined, TaskTrackerMain);
  });
}
