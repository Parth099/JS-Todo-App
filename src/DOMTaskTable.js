import settingsIcn from "./img/settings.png";

function checkboxListener(event) {
  const parentNode = event.currentTarget.parentNode.parentNode;
  if (typeof parentNode === "undefined") {
    return;
  }
  parentNode.classList.toggle("crossout");
  const id = parentNode.getAttribute("data-task-id");
  TaskTrackerMain.completeXOR(id);
}

class DOMTaskTable {
  constructor(internalTaskArray) {
    this.tasks = internalTaskArray ?? [];
  }
  createTableRow(titleText, dueDateText, prioText, isCompleted, taskId) {
    if (typeof titleText === "undefined") {
      return;
    }
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
    let flexSide, DueDate, Prio, modelOpener;

    tableRowCont = document.createElement("div");
    tableRowCont.classList.add("table-row");
    tableRowCont.setAttribute("data-task-id", taskId);

    title = document.createElement("p");
    title.classList.toggle("table-title");
    title.textContent = titleText;

    ckbx = document.createElement("input");
    ckbx.setAttribute("type", "checkbox");
    ckbx.classList.add("table-ckbx");
    ckbx.addEventListener("click", checkboxListener);

    if (isCompleted) {
      tableRowCont.classList.toggle("crossout");
      ckbx.setAttribute("checked", "true");
    }

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

    if (new Date(dueDateText).getTime() < new Date().getTime()) {
      DueDate.classList.add("overdue");
    }

    if (taskId != "table-head") {
      modelOpener = new Image();
      modelOpener.src = settingsIcn;
      modelOpener.classList.add("table-row-img");
      modelOpener.setAttribute("data-modal-target", "#modal");
      modelOpener.setAttribute("data-task-id", taskId);
      Prio.appendChild(modelOpener);
    }

    flexSide.appendChild(DueDate);
    flexSide.appendChild(Prio);

    tableRowCont.appendChild(flexSide);

    return tableRowCont;
  }
  createTableTitle() {
    let ele = this.createTableRow(
      "Title",
      "Due Date",
      "Priority",
      "",
      "table-head"
    );
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
      if (typeof rowData != "undefined") {
        container.appendChild(rowData);
      }
    }
    return container;
  }
}

export default DOMTaskTable;
