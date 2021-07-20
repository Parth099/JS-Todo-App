function checkboxListener(event) {
  const parentNode = event.currentTarget.parentNode.parentNode;
  if (typeof parentNode === "undefined") {
    return;
  }
  parentNode.classList.toggle("crossout");
  id = parentNode.getAttribute("data-task-id");
}

class DOMTaskTable {
  constructor(internalTaskArray) {
    this.tasks = internalTaskArray ?? [];
    console.log(this.tasks);
  }
  createTableRow(titleText, dueDateText, prioText, isCompleted, taskId) {
    /*
        <div class="table-row title">
          <p>Title</p>
          <div class="table-row-side">
            <p>Due Date</p>
            <p>Priority</p>
          </div>
        </div>
    */
    let tableRowCont, title, ckbx, titleAndCkbxCont;
    let flexSide, DueDate, Prio;

    tableRowCont = document.createElement("div");
    tableRowCont.classList.add("table-row");
    tableRowCont.setAttribute("data-task-id", taskId);
    if (isCompleted) {
      tableRowCont.classList.toggle("crossout");
    }

    title = document.createElement("p");
    title.classList.toggle("table-title");
    title.textContent = titleText;

    ckbx = document.createElement("input");
    ckbx.setAttribute("type", "checkbox");
    ckbx.classList.add("table-ckbx");
    ckbx.addEventListener("click", checkboxListener);

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

    flexSide.appendChild(DueDate);
    flexSide.appendChild(Prio);

    tableRowCont.appendChild(flexSide);

    return tableRowCont;
  }
  createTableTitle() {
    let ele = this.createTableRow("Title", "Due Date", "Priority", "");
    ele.classList.toggle("title");
    ele.querySelector("input").remove();
    return ele;
  }
  renderTableData() {
    const container = document.createElement("div");
    let rowData;
    for (let obj of this.tasks) {
      rowData = this.createTableRow(
        obj.title,
        obj.dueDate,
        obj.priority,
        obj.isComplete,
        obj.id
      );
      container.appendChild(rowData);
    }
    return container;
  }
}

export default DOMTaskTable;
