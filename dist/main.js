(()=>{"use strict";var e={434:(e,t,n)=>{n.d(t,{Z:()=>i});var o=n(645),r=n.n(o)()((function(e){return e[1]}));r.push([e.id,'/* Box sizing rules */\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\n\n/* Remove default margin */\nbody,\nh1,\nh2,\nh3,\nh4,\np,\nfigure,\nblockquote,\ndl,\ndd {\n  margin: 0;\n}\n\n/* Remove list styles on ul, ol elements with a list role, which suggests default styling will be removed */\nul[role="list"],\nol[role="list"] {\n  list-style: none;\n}\n\n/* Set core root defaults */\nhtml:focus-within {\n  scroll-behavior: smooth;\n}\n\n/* Set core body defaults */\nbody {\n  min-height: 100vh;\n  text-rendering: optimizeSpeed;\n  line-height: 1.5;\n}\n\n/* A elements that don\'t have a class get default styles */\na:not([class]) {\n  text-decoration-skip-ink: auto;\n}\n\n/* Make images easier to work with */\nimg,\npicture {\n  max-width: 100%;\n  display: block;\n}\n\n/* Inherit fonts for inputs and buttons */\ninput,\nbutton,\ntextarea,\nselect {\n  font: inherit;\n}\n\n/* Remove all animations, transitions and smooth scroll for people that prefer not to see them */\n@media (prefers-reduced-motion: reduce) {\n  html:focus-within {\n    scroll-behavior: auto;\n  }\n\n  *,\n  *::before,\n  *::after {\n    animation-duration: 0.01ms !important;\n    animation-iteration-count: 1 !important;\n    transition-duration: 0.01ms !important;\n    scroll-behavior: auto !important;\n  }\n}\n',""]);const i=r},772:(e,t,n)=>{n.d(t,{Z:()=>i});var o=n(645),r=n.n(o)()((function(e){return e[1]}));r.push([e.id,"@import url(https://fonts.googleapis.com/css2?family=Titillium+Web:ital,wght@0,200;0,300;0,400;0,600;1,200;1,300;1,400;1,600&display=swap);"]),r.push([e.id,"@import url(https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;1,100;1,200;1,300;1,400;1,500&display=swap);"]),r.push([e.id,':root {\n  --link-active: #4c8bf5;\n  --table-row-padding: 3px;\n}\nbody {\n  font-family: "Montserrat", sans-serif;\n}\n.head-cont {\n  background-color: #4c8bf5;\n  display: flex;\n  position: sticky;\n  top: 0;\n  height: 50px;\n  width: 100%;\n  padding: 3px;\n  z-index: 1;\n  align-items: center;\n}\n.header-img {\n  width: 40px;\n  height: 40px;\n  cursor: pointer;\n  border-radius: 5px;\n}\n\n.header-img:hover {\n  background-color: rgba(255, 255, 255, 0.1);\n}\n\n.sideMenu {\n  height: 100%;\n  width: 250px;\n  position: fixed;\n  top: 0;\n  left: 0;\n  background-color: rgb(171, 193, 216);\n  font-family: "Titillium Web", sans-serif;\n  transition: margin-left 0.5s;\n}\n\n.sideMenu ul {\n  list-style: none;\n  padding: 0;\n  margin-top: 65px;\n  margin-left: 45px;\n}\n\n.sideMenu a {\n  text-decoration: none;\n  margin-bottom: 30px;\n  font-size: 2rem;\n  color: white;\n  display: block;\n  transition: 0.2s;\n}\n\n.sideMenu a.link:hover {\n  color: var(--link-active);\n}\n.sideMenu a.link.active {\n  color: var(--link-active);\n}\n\n.content {\n  margin-left: 250px;\n  transition: margin-left 0.5s;\n  padding: 10px;\n  max-width: 1000px;\n}\n.page-title {\n  margin-bottom: 15px;\n  font-size: 3rem;\n}\n\n.table-row {\n  display: flex;\n  justify-content: space-between;\n  border-bottom: 0.5px gray solid;\n  padding: var(--table-row-padding);\n  position: relative;\n}\n.title {\n  font-weight: 600;\n}\n.table-row-side {\n  display: flex;\n}\n.dueDate {\n  width: 150px;\n}\n.priority {\n  display: flex;\n  width: 100px;\n  justify-content: space-between;\n  align-content: center;\n}\n.low {\n  color: #04aa6d;\n}\n.medium {\n  color: #db4c3f;\n}\n.high {\n  color: red;\n}\n.check-box-cont {\n  display: flex;\n}\n.crossout {\n  text-decoration: line-through;\n  color: gray;\n}\n.project-link {\n  display: flex;\n}\n\n#add-project-btn {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 50px;\n  height: 50px;\n  border-radius: 100%;\n  padding: 0;\n}\n#add-project-btn:hover {\n  background-color: rgba(255, 255, 255, 0.377);\n  color: var(--link-active);\n}\n\n/* MODAL STYLING START */\n\n.modal {\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%) scale(0);\n  border: 0.5px black solid;\n  border-radius: 10px;\n  z-index: 10;\n  background-color: white;\n  width: 500px;\n  max-width: 80%;\n  transition: 200ms ease-in-out;\n}\n.modal.active {\n  transform: translate(-50%, -50%) scale(1);\n}\n.modal-header {\n  padding: 10px 15px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.modal-header .title {\n  font-size: 1.25rem;\n  font-weight: bold;\n}\n\n.modal-header .close-button {\n  outline: none;\n  border: none;\n  background: none;\n  cursor: pointer;\n  font-size: 1.25rem;\n  font-weight: bolder;\n}\n\n.modal-body {\n  padding: 10px 15px;\n}\n\n.overlay {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: rgba(0, 0, 0, 0.2);\n  opacity: 0;\n  pointer-events: none;\n  z-index: 1;\n}\n.overlay.active {\n  pointer-events: all;\n  opacity: 1;\n}\n\n/* MODAL END */\n\n.table-row-img {\n  position: relative;\n  right: 0;\n  top: var(--table-row-padding);\n  width: 21px;\n  height: 21px;\n}\n\n.project-page-link-cont {\n  display: flex;\n  font-size: 1.5rem;\n  font-weight: 300;\n  margin: 10px 0px;\n  width: 400px;\n  justify-content: space-between;\n}\n.project-page-link,\n.project-page-link-text {\n  padding: 10px;\n  border-radius: 30px;\n}\n.project-page-link {\n  cursor: pointer;\n  font-weight: 500;\n}\n.project-page-link:hover {\n  background: rgba(76, 139, 245, 0.3);\n}\n.project-page-link-text {\n  display: inline;\n}\n',""]);const i=r},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=e(t);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,o){"string"==typeof e&&(e=[[null,e,""]]);var r={};if(o)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(r[a]=!0)}for(var s=0;s<e.length;s++){var c=[].concat(e[s]);o&&r[c[0]]||(n&&(c[2]?c[2]="".concat(n," and ").concat(c[2]):c[2]=n),t.push(c))}},t}},379:e=>{var t=[];function n(e){for(var n=-1,o=0;o<t.length;o++)if(t[o].identifier===e){n=o;break}return n}function o(e,o){for(var i={},a=[],s=0;s<e.length;s++){var c=e[s],l=o.base?c[0]+o.base:c[0],d=i[l]||0,p="".concat(l," ").concat(d);i[l]=d+1;var u=n(p),m={css:c[1],media:c[2],sourceMap:c[3]};-1!==u?(t[u].references++,t[u].updater(m)):t.push({identifier:p,updater:r(m,o),references:1}),a.push(p)}return a}function r(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;n.update(e=t)}else n.remove()}}e.exports=function(e,r){var i=o(e=e||[],r=r||{});return function(e){e=e||[];for(var a=0;a<i.length;a++){var s=n(i[a]);t[s].references--}for(var c=o(e,r),l=0;l<i.length;l++){var d=n(i[l]);0===t[d].references&&(t[d].updater(),t.splice(d,1))}i=c}}},569:e=>{var t={};e.exports=function(e,n){var o=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var o=n.css,r=n.media,i=n.sourceMap;r?e.setAttribute("media",r):e.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleTagTransform(o,e)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},339:(e,t,n)=>{n.d(t,{Z:()=>a});var o=n(21),r=n(19);function i(e){const t=e.currentTarget.parentNode.parentNode;if(void 0===t)return;t.classList.toggle("crossout");const n=t.getAttribute("data-task-id");o.q.completeXOR(n)}const a=class{constructor(e){this.tasks=e??[]}createTableRow(e,t,n,o,a){let s,c,l,d,p,u,m,h;return s=document.createElement("div"),s.classList.add("table-row"),s.setAttribute("data-task-id",a),c=document.createElement("p"),c.classList.toggle("table-title"),c.textContent=e,l=document.createElement("input"),l.setAttribute("type","checkbox"),l.classList.add("table-ckbx"),l.addEventListener("click",i),o&&(s.classList.toggle("crossout"),l.setAttribute("checked","true")),d=document.createElement("div"),d.appendChild(l),d.appendChild(c),d.classList.add("check-box-cont"),s.appendChild(d),p=document.createElement("div"),p.classList.add("table-row-side"),u=document.createElement("p"),m=document.createElement("p"),u.classList.add("dueDate"),m.classList.add("priority"),m.classList.add(n.toLowerCase()),u.textContent=t,m.textContent=n,"table-head"!=a&&(h=new Image,h.src=r,h.classList.add("table-row-img"),h.setAttribute("data-modal-target","#modal"),m.appendChild(h)),p.appendChild(u),p.appendChild(m),s.appendChild(p),s}createTableTitle(){let e=this.createTableRow("Title","Due Date","Priority","","table-head");return e.classList.toggle("title"),e.querySelector("input").remove(),e}renderTableData(){const e=document.createElement("div");let t;for(let n of this.tasks)t=this.createTableRow(n.title,n.dueDate,n.priority,n.isComplete,n.id),e.appendChild(t);return e}}},19:(e,t,n)=>{e.exports=n.p+"images/30a4464bf104e1590f54.png"},21:(e,t,n)=>{n.d(t,{q:()=>k,O:()=>C});var o=n(379),r=n.n(o),i=n(795),a=n.n(i),s=n(569),c=n.n(s),l=n(565),d=n.n(l),p=n(216),u=n.n(p),m=n(589),h=n.n(m),f=n(772),g={};g.styleTagTransform=h(),g.setAttributes=d(),g.insert=c().bind(null,"head"),g.domAPI=a(),g.insertStyleElement=u(),r()(f.Z,g),f.Z&&f.Z.locals&&f.Z.locals;var b=n(434),v={};function y(){document.getElementById("sideMenu").style.marginLeft="0px",document.getElementById("content").style.marginLeft="250px"}function x(){document.getElementById("sideMenu").style.marginLeft="-250px",document.getElementById("content").style.marginLeft="0px"}function w(){const e=this.open?x:y;this.open^=1,e()}v.styleTagTransform=h(),v.setAttributes=d(),v.insert=c().bind(null,"head"),v.domAPI=a(),v.insertStyleElement=u(),r()(b.Z,v),b.Z&&b.Z.locals&&b.Z.locals;var L=n(939);const k=new(n(760).Z);!function(e){const t=document.querySelector("img.header-img[data-nav-icon]"),n=w.bind({open:1});t.addEventListener("click",n)}(),(0,L.X)();const C=document.querySelectorAll("#sideMenu > ul > li > a.link");let j="Home";for(let e=0;e<C.length;e++)C[e].addEventListener("click",E);function E(e){if(!e.target.classList.contains("active")||"Projects"==e.target.textContent){for(let e=0;e<C.length;e++)C[e].classList.remove("active");j=e.target.textContent,k.currFocus=e.target.textContent,e.target.classList.toggle("active"),(0,L.X)(j)}}},939:(e,t,n)=>{n.d(t,{X:()=>c});var o=n(339),r=n(21);const i=document.querySelector(".overlay");function a(e){null!=e&&(e.classList.remove("active"),i.classList.remove("active"))}i.addEventListener("click",(()=>{document.querySelectorAll(".modal.active").forEach((e=>{a(e)})),i.classList.remove("active")}));let s=()=>document.getElementById("content");function c(e){!function(){document.querySelector("#content").remove();const e=document.createElement("div");e.classList.add("content"),e.setAttribute("id","content"),document.body.appendChild(e)}();let t,n,c=s();if(t=document.createElement("h1"),t.classList.toggle("page-title"),t.textContent=e??"Home",c.appendChild(t),"Projects"==e)return void function(e){const t=s();let n,o,r,i;Object.keys(e).forEach((a=>{var s;n=document.createElement("div"),n.classList.add("project-page-link-cont"),o=document.createElement("a"),o.classList.add("project-page-link"),n.appendChild(o),o.addEventListener("click",l),i=!(s=a)||/^\s*$/.test(s)?"Home":a,o.textContent=`${i._capitalize()}`,r=document.createElement("p"),r.textContent=`${e[a]} Tasks`,n.appendChild(r),r.classList.add("project-page-link-text"),t.appendChild(n)}))}(r.q.projectCounter());let d=r.q.getTasks();const p=document.createElement("div");p.classList.add("table-cont"),n=new o.Z(d);const u=n.createTableTitle(),m=n.renderTableData();p.appendChild(u),p.appendChild(m),c.appendChild(p),document.querySelectorAll("[data-modal-target]").forEach((e=>{e.addEventListener("click",(()=>{var t;null!=(t=document.querySelector(e.dataset.modalTarget))&&(t.classList.add("active"),i.classList.add("active"))}))})),document.querySelectorAll("[data-close-button]").forEach((e=>{e.addEventListener("click",(()=>{a(e.closest(".modal"))}))}))}function l(e){const t=e.target.textContent;if(r.q.currFocus=t,"Home"==t||"Today"==t)for(let e=0;e<r.O.length;e++)"Projects"==r.O[e].textContent?r.O[e].classList.remove("active"):r.O[e].textContent==t&&r.O[e].classList.add("active");c(t)}String.prototype._capitalize=function(){return this.charAt(0).toUpperCase()+this.slice(1)}},760:(e,t,n)=>{n.d(t,{Z:()=>i});class o{static id=-1;constructor(e,t,n,r,i,a,s){this.title=e,this.description=t,this.dueDate="none",this.priority=r,this.notes=i,this.isComplete=a,this.id="T"+ ++o.id,this.project=s}setId(){}get title(){return this._title}get description(){return this._description}get dueDate(){return this._dueDate}get priority(){return this._priority}get notes(){return this._notes}get isComplete(){return this._isComplete}get project(){return this._project}set title(e){this._title=e}set description(e){this._description=e}set dueDate(e){this._dueDate=e}set priority(e){this._priority=e}set notes(e){this._notes=e}set isComplete(e){this._isComplete=e}set project(e){this._project=e}}const r=o,i=class{constructor(){this.focus="home",this.projects=[new r("Learn HashMaps","1","none","High","---",!0,""),new r("Learn Linked Lists","2","none","Medium","---",!0,""),new r("Learn Arrays","3","none","Low","---",!0,""),new r("Learn Queues","4","none","Low","---",!0,""),new r("Learn Stacks","5","none","Medium","---",!1,""),new r("Learn R/B Trees","6","none","Low","---",!1,""),new r("Learn Graphs","7","none","Low","---",!1,"today"),new r("Learn Tuples","8","none","Medium","---",!0,"today"),new r("Make Trays","8","none","Medium","---",!1,"subway")]}get currFocus(){return this.focus}set currFocus(e){this.focus=e.toLowerCase()}getTasks(){return"home"==this.currFocus?this.projects:this.projects.filter((e=>e.project===this.currFocus))}getTaskById=e=>this.projects.find((t=>t.id===e));completeXOR(e){this.getTaskById(e).isComplete^=1}projectCounter(){const e={};return this.projects.forEach((t=>{void 0===e[t.project]&&(e[t.project]=0),e[t.project]++})),e}}}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var i=t[o]={id:o,exports:{}};return e[o](i,i.exports,n),i.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var o=t.getElementsByTagName("script");o.length&&(e=o[o.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),n(21),n(939),n(339),n(760)})();