function openMenu() {
  document.getElementById("sideMenu").style.marginLeft = "0px";
  document.getElementById("content").style.marginLeft = "250px";
}

function closeMenu() {
  document.getElementById("sideMenu").style.marginLeft = "-250px";
  document.getElementById("content").style.marginLeft = "0px";
}

function adjustMenu() {
  const f = this.open ? closeMenu : openMenu;
  this.open ^= 1;
  f();
}

function linkFocusSelector(e) {
  for (let link = 0; link < links.length; link++) {
    links[link].classList.remove("active");
  }
  e.target.classList.toggle("active");
}

export function attachNav(buttonQuerySelector) {
  const sideMenu = document.querySelector(buttonQuerySelector);
  const menuFunction = adjustMenu.bind({ open: 1 });
  sideMenu.addEventListener("click", menuFunction);
}
