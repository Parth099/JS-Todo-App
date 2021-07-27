import DOMTaskTable from "./DOMTaskTable.js";
import { TaskTrackerMain, links, isBlank } from "./index.js";
import attachModalLisnters from "./modal.js";
let attachPoint = () => document.getElementById("content");

String.prototype._capitalize = function () {
  return this.charAt(0).toUpperCase() + this.slice(1);
};

export function renderPage(pageTitle) {
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

  const counter = TaskTrackerMain.projectCounter();
  attachProjectLinks(counter);
  if (pageTitle == "Projects") {
    renderProjectsInfo(counter);
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
  attachModalLisnters();
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
  TaskTrackerMain.currFocus = focus;

  if (focus == "Home" || focus == "Today") {
    for (let link = 0; link < links.length; link++) {
      if (links[link].textContent == "Projects") {
        links[link].classList.remove("active");
      } else if (links[link].textContent == focus) {
        links[link].classList.add("active");
      }
    }
  }

  renderPage(focus);
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
  console.log(e);
  renderPage(e.target.textContent);
}

function attachProjectLinks(counter) {
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
    a.textContent = keyText._capitalize();
    if (keyText === TaskTrackerMain.currFocus) {
      a.classList.add("active");
    }
    a.addEventListener("click", projectExtListener);
    linksAP.appendChild(li);
  }
}

function renderProjectsInfo(counter) {
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
    projectLinkCont.appendChild(projectLink);

    projectLink.addEventListener("click", projectLinkListener);

    keyText = isBlank(key) ? "Home" : key;
    projectLink.textContent = `${keyText._capitalize()}`;

    projectLinkText = document.createElement("p");
    projectLinkText.textContent = `${counter[key]}  ${
      counter[key] > 1 ? "Tasks" : "Task*"
    }`;
    projectLinkCont.appendChild(projectLinkText);
    projectLinkText.classList.add("project-page-link-text");
    AP.appendChild(projectLinkCont);
  });
  attachProjectLinks(counter);
}

//modal
