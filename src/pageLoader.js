import DOMTaskTable from "./table.js";
import TaskTrackerMain from "./index.js";

let attachPoint = () => document.getElementById("content");

export function renderPage(pageTitle) {
  let AP = attachPoint();
  if (pageTitle == "Projects") {
    return;
  }
  let h1, table;
  h1 = document.createElement("h1");
  h1.classList.toggle("home-title");
  h1.textContent = pageTitle ?? "Home";
  AP.appendChild(h1);

  let taskList = TaskTrackerMain.getTasks();
  console.log("PAGELOADER:", taskList);

  const tableCont = document.createElement("div");
  tableCont.classList.add("table-cont");

  table = new DOMTaskTable(taskList);
  const tableHead = table.createTableTitle();
  const tableData = table.renderTableData();

  tableCont.appendChild(tableHead);
  tableCont.appendChild(tableData);
  AP.appendChild(tableCont);
}

function projectsPage() {
  console.log("A");
}
