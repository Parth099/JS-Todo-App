import DOMTaskTable from "./DOMTaskTable.js";
import { attachModalLisntener } from "./modal.js";

const links = document.querySelectorAll(
  "#sideMenu > ul.menu-main > li > a.link"
);

export function isBlank(str) {
  return !str || /^\s*$/.test(str);
}

let attachPoint = () => document.getElementById("content");

String.prototype._capitalize = function () {
  return this.charAt(0).toUpperCase() + this.slice(1);
};

//renderpage
//projectLinkListener
//attachProjectLinks
export function renderPage(pageTitle, TaskTrackerMain) {
  if (typeof pageTitle === "undefined") {
    pageTitle = TaskTrackerMain.currFocus;
  }
  clearPage();
  let AP = attachPoint();

  let h1, table;
  h1 = document.createElement("h1");
  h1.classList.toggle("page-title");
  h1.textContent = pageTitle._capitalize() ?? "Home";
  AP.appendChild(h1);

  attachProjectLinks(TaskTrackerMain);
  if (pageTitle.toLowerCase() == "projects") {
    renderProjectsInfo(TaskTrackerMain);
    return;
  }
  TaskTrackerMain.currFocus = pageTitle;
  let taskList = TaskTrackerMain.getTasks();
  const tableCont = document.createElement("div");
  tableCont.classList.add("table-cont");

  table = new DOMTaskTable(taskList);
  const tableHead = table.createTableTitle();
  const tableData = table.renderTableData();

  tableCont.appendChild(tableHead);
  tableCont.appendChild(tableData);
  AP.appendChild(tableCont);
  console.log("ERR");
  attachModalLisntener();
}

function clearPage() {
  document.querySelector("#content").remove();
  const content = document.createElement("div");
  content.classList.add("content");
  content.setAttribute("id", "content");
  document.body.appendChild(content);
}

// underscore to make sure updates to js wont break code

function projectLinkListener(e) {
  const focus = e.target.textContent;
  this.TaskTrackerMain.currFocus = focus;

  if (focus == "Home" || focus == "Today") {
    for (let link = 0; link < links.length; link++) {
      if (links[link].textContent == "Projects") {
        links[link].classList.remove("active");
      } else if (links[link].textContent == focus) {
        links[link].classList.add("active");
      }
    }
  }

  renderPage(focus, TaskTrackerMain);
}
function projectExtListener(e) {
  const preActive = document.querySelector("ul.menu-main li a.active");
  if (preActive) {
    preActive.classList.remove("active");
  }
  //e.target.classList.add("active");
  /*
  const extLinks = document.querySelectorAll("ul.project-nav-ext li a");
  for (let i = 0; i < extLinks.length; i++) {
    extLinks[i].classList.remove("active");
  }
  */
  renderPage(e.target.textContent, this.TaskTrackerMain);
}

function attachProjectLinks(TaskTrackerMain) {
  const counter = TaskTrackerMain.projectCounter();
  let li, a;
  let _linksAP = function () {
    let pointer = document.querySelector(".project-nav-ext");
    pointer.remove();
    pointer = document.createElement("ul");
    pointer.classList.add("project-nav-ext");
    document.querySelector("#sideMenu").appendChild(pointer);
    return pointer;
  };
  const linksAP = _linksAP();
  const keys = Object.keys(counter);

  let keyText;
  for (let key of keys) {
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
    a.addEventListener("click", projectExtListener.bind({ TaskTrackerMain }));
    linksAP.appendChild(li);
  }
}

function renderProjectsInfo(TaskTrackerMain) {
  const counter = TaskTrackerMain.projectCounter();
  console.log("hit", counter);
  const AP = attachPoint();
  let projectLinkCont;
  let projectLink;
  let projectLinkText;
  let keyText;
  const keys = Object.keys(counter);
  keys.forEach((key) => {
    projectLinkCont = document.createElement("div");
    projectLinkCont.classList.add("project-page-link-cont");

    projectLink = document.createElement("a");
    projectLink.classList.add("project-page-link");

    projectLink.addEventListener(
      "click",
      projectLinkListener.bind({ TaskTrackerMain })
    );

    keyText = isBlank(key) ? "Home" : key;
    projectLink.textContent = `${keyText._capitalize()}`;

    projectLinkText = document.createElement("p");
    projectLinkText.textContent = `${counter[key]}  ${
      counter[key] === 1 ? "Task" : "Tasks"
    }`;
    projectLinkCont.appendChild(projectLinkText);
    projectLinkText.classList.add("project-page-link-text");

    projectLinkCont.appendChild(projectLink);
    projectLinkCont.appendChild(projectLinkText);
    AP.appendChild(projectLinkCont);
  });
  attachProjectLinks(counter);
}

//modal
