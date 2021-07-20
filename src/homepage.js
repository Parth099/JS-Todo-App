import { Task } from "./task.js";
import DOMTaskTable from "./table.js";
import TaskTrackerMain from "./index.js";

let attachPoint = () => document.getElementById("content");
export function renderPage() {
  let AP = attachPoint();
  let h1, table;
  h1 = document.createElement("h1");
  h1.classList.toggle("home-title");
  h1.textContent = "All Tasks";
  AP.appendChild(h1);
  //title
  //console.log(TaskTrackerMain.currfocus);
  let taskList = TaskTrackerMain.getTasks();

  const tableCont = document.createElement("div");
  tableCont.classList.add("table-cont");

  table = new DOMTaskTable(taskList);
  const tableHead = table.createTableTitle();
  const tableData = table.renderTableData();

  tableCont.appendChild(tableHead);
  tableCont.appendChild(tableData);
  AP.appendChild(tableCont);
}
