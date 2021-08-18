//import css
import "./styles/styles.css";
import "./styles/reset.css";

//import compo
import { attachNav } from "./nav.js";
import { renderPage } from "./pageLoader.js";

//task tracker
import TaskTracker from "./taskTracker.js";
export const TaskTrackerMain = new TaskTracker();

//modal
import { attachModalLisntener, attachDeleteLisntener } from "./modal.js";
//import Task
attachNav("img.header-img[data-nav-icon]"); //nav gains hide and show func
attachModalLisntener(TaskTrackerMain); //gives the modal's buttons functionalty
attachDeleteLisntener(TaskTrackerMain); //gives delete task func!
const links = document.querySelectorAll("#sideMenu > ul.menu-main > li > a.link");

let currPage = "Home";
renderPage(currPage, TaskTrackerMain);

for (let link = 0; link < links.length; link++) {
  links[link].addEventListener("click", linkFocusSelector);
}

function linkFocusSelector(e) {
  if (e.target.classList.contains("active") && e.target.textContent != "Projects") {
    //stops spamming and calling renderPage()
    return;
  }
  for (let link = 0; link < links.length; link++) {
    links[link].classList.remove("active");
  }
  currPage = e.target.textContent;
  TaskTrackerMain.currFocus = e.target.textContent;
  e.target.classList.toggle("active");
  renderPage(currPage, TaskTrackerMain);
}

export function isBlank(str) {
  return !str || /^\s*$/.test(str);
}
//modal reqs

//addProject Listeners
function toggleActive(e) {
  const currContainer = e.target.closest("[data-button-target]");
  if (typeof currContainer === "undefined") {
    return;
  }
  const targetSelector = currContainer.dataset.buttonTarget;
  const targetToShow = document.querySelector(targetSelector);

  currContainer.classList.toggle("active"); //hides curr target
  targetToShow.classList.toggle("active"); //shows next target
}

function toggleActiveForMenu(e) {
  const inputEle = document.querySelector("#add-project");
  const input = inputEle.value;

  if (e.target.getAttribute("id") == "add") {
    if (isBlank(input)) {
      return;
    }
    const additionSuccess = TaskTrackerMain.addProject(input);
    if (additionSuccess == false) {
      return;
    } else if (additionSuccess == true) {
      renderPage(undefined, TaskTrackerMain);
    }
  }
  inputEle.value = ""; //clear text for next use

  const currContainer = e.target.closest("[data-button-target]");
  if (typeof currContainer === "undefined") {
    return;
  }
  const targetSelector = currContainer.dataset.buttonTarget;
  const targetToShow = document.querySelector(targetSelector);

  currContainer.classList.toggle("active"); //hides curr target
  targetToShow.classList.toggle("active"); //shows next target
}

const addprojectPreBtn = document.querySelector("#add-project-prebtn");
addprojectPreBtn.addEventListener("click", toggleActive);

const addProjectBtns = document.querySelectorAll(".add-project-btn");
for (let btn = 0; btn < addProjectBtns.length; btn++) {
  addProjectBtns[btn].addEventListener("click", toggleActiveForMenu);
}

document.getElementById("debug").addEventListener("click", function (evt) {
  console.log(TaskTrackerMain.tasks);
  console.log(localStorage);
});
