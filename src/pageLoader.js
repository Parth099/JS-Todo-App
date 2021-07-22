import DOMTaskTable from "./DOMTaskTable.js";
import { TaskTrackerMain, links } from "./index.js";
import attachModalLisnters from "./modal.js";
let attachPoint = () => document.getElementById("content");

export function renderPage(pageTitle) {
  clearPage();
  let AP = attachPoint();

  let h1, table;
  h1 = document.createElement("h1");
  h1.classList.toggle("page-title");
  h1.textContent = pageTitle ?? "Home";
  AP.appendChild(h1);

  if (pageTitle == "Projects") {
    renderProjectsInfo(TaskTrackerMain.projectCounter());
    return;
  }

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

function isBlank(str) {
  return !str || /^\s*$/.test(str);
}

// underscore to make sure updates to js wont break code
String.prototype._capitalize = function () {
  return this.charAt(0).toUpperCase() + this.slice(1);
};
function projectLinkLisnter(e) {
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

    projectLink.addEventListener("click", projectLinkLisnter);

    keyText = isBlank(key) ? "Home" : key;
    projectLink.textContent = `${keyText._capitalize()}`;

    projectLinkText = document.createElement("p");
    projectLinkText.textContent = `${counter[key]} Tasks`;
    projectLinkCont.appendChild(projectLinkText);
    projectLinkText.classList.add("project-page-link-text");
    AP.appendChild(projectLinkCont);
  });
}

//modal
