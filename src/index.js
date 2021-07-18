//import css
import "./styles/styles.css";
import "./styles/reset.css";

console.log("fart");

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

function initMenu() {
  const sideMenu = document.querySelector("img.header-img[data-nav-icon]");
  const menuFunction = adjustMenu.bind({ open: 1 });
  sideMenu.addEventListener("click", menuFunction);
}
initMenu();
