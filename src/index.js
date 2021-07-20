//import css
import "./styles/styles.css";
import "./styles/reset.css";

//import compo
import { attachNav } from "./nav.js";
import { renderPage } from "./pageLoader.js";

//task tracker
import TaskTracker from "./taskTracker.js";
const TaskTrackerMain = new TaskTracker();
export default TaskTrackerMain;

//import Task
attachNav("img.header-img[data-nav-icon]"); //nav gains hide and show func
//console.log(taskList)
renderPage();

const links = document.querySelectorAll("#sideMenu > ul > li > a.link");
let currPage = "Home";

for (let link = 0; link < links.length; link++) {
  links[link].addEventListener("click", linkFocusSelector);
}

function linkFocusSelector(e) {
  if (e.target.classList.contains("active")) {
    //stops spamming and calling renderPage()
    return;
  }
  for (let link = 0; link < links.length; link++) {
    links[link].classList.remove("active");
  }
  currPage = e.target.textContent;
  TaskTrackerMain.currFocus = e.target.textContent.toLowerCase();
  e.target.classList.toggle("active");
  clearPage();
  renderPage(currPage);
}

function clearPage() {
  document.querySelector("#content").remove();
  const content = document.createElement("div");
  content.classList.add("content");
  content.setAttribute("id", "content");
  document.body.appendChild(content);
}
