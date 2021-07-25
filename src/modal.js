import { TaskTrackerMain } from "./index.js";

//model open/close
const openModalButtons = () => document.querySelectorAll("[data-modal-target]");
const closeModalButtons = () =>
  document.querySelectorAll("[data-close-button]");
const overlay = document.querySelector(".overlay");

//model read/write to HTML
const mTitle = document.querySelector("#task-title-modal");
const mPrio = document.querySelector("#task-prio-modal");
const mDueDate = document.querySelector("#task-dueDate-modal");
const mProjects = document.querySelector("#task-project-modal");

export default function attachModalLisnters() {
  openModalButtons().forEach((button) => {
    button.addEventListener("click", (e) => {
      const modal = document.querySelector(button.dataset.modalTarget);
      openModal(modal);
      const modelFocus = e.target.getAttribute("data-task-id"); //gets id of selected trigger
      const taskObj = TaskTrackerMain.getTaskById(modelFocus);
      console.log(taskObj);
    });
  });

  closeModalButtons().forEach((button) => {
    button.addEventListener("click", () => {
      const modal = button.closest(".modal");
      closeModal(modal);
    });
  });
}

function openModal(modal) {
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
