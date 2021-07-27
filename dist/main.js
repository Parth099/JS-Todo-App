(()=>{"use strict";var e={434:(e,t,n)=>{n.d(t,{Z:()=>r});var o=n(645),i=n.n(o)()((function(e){return e[1]}));i.push([e.id,'/* Box sizing rules */\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\n\n/* Remove default margin */\nbody,\nh1,\nh2,\nh3,\nh4,\np,\nfigure,\nblockquote,\ndl,\ndd {\n  margin: 0;\n}\n\n/* Remove list styles on ul, ol elements with a list role, which suggests default styling will be removed */\nul[role="list"],\nol[role="list"] {\n  list-style: none;\n}\n\n/* Set core root defaults */\nhtml:focus-within {\n  scroll-behavior: smooth;\n}\n\n/* Set core body defaults */\nbody {\n  min-height: 100vh;\n  text-rendering: optimizeSpeed;\n  line-height: 1.5;\n}\n\n/* A elements that don\'t have a class get default styles */\na:not([class]) {\n  text-decoration-skip-ink: auto;\n}\n\n/* Make images easier to work with */\nimg,\npicture {\n  max-width: 100%;\n  display: block;\n}\n\n/* Inherit fonts for inputs and buttons */\ninput,\nbutton,\ntextarea,\nselect {\n  font: inherit;\n}\n\n/* Remove all animations, transitions and smooth scroll for people that prefer not to see them */\n@media (prefers-reduced-motion: reduce) {\n  html:focus-within {\n    scroll-behavior: auto;\n  }\n\n  *,\n  *::before,\n  *::after {\n    animation-duration: 0.01ms !important;\n    animation-iteration-count: 1 !important;\n    transition-duration: 0.01ms !important;\n    scroll-behavior: auto !important;\n  }\n}\n',""]);const r=i},772:(e,t,n)=>{n.d(t,{Z:()=>r});var o=n(645),i=n.n(o)()((function(e){return e[1]}));i.push([e.id,"@import url(https://fonts.googleapis.com/css2?family=Titillium+Web:ital,wght@0,200;0,300;0,400;0,600;1,200;1,300;1,400;1,600&display=swap);"]),i.push([e.id,"@import url(https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;1,100;1,200;1,300;1,400;1,500&display=swap);"]),i.push([e.id,':root {\n  --link-active: #4c8bf5;\n  --table-row-padding: 3px;\n}\nbody {\n  font-family: "Montserrat", sans-serif;\n}\n.head-cont {\n  background-color: #4c8bf5;\n  display: flex;\n  position: sticky;\n  top: 0;\n  height: 50px;\n  width: 100%;\n  padding: 3px;\n  z-index: 1;\n  justify-content: space-between;\n  align-items: center;\n}\n.header-img {\n  width: 40px;\n  height: 40px;\n  cursor: pointer;\n  border-radius: 5px;\n}\n\n.header-img:hover {\n  background-color: rgba(255, 255, 255, 0.1);\n}\n\n.sideMenu {\n  height: 100%;\n  width: 250px;\n  position: fixed;\n  top: 0;\n  left: 0;\n  background-color: rgb(171, 193, 216);\n  font-family: "Titillium Web", sans-serif;\n  transition: margin-left 0.5s;\n}\n\n.sideMenu ul.menu-main {\n  list-style: none;\n  padding: 0;\n  margin-top: 65px;\n  margin-left: 30px;\n}\n\n.sideMenu a.link {\n  text-decoration: none;\n  margin-bottom: 30px;\n  font-size: 2rem;\n  color: white;\n  display: block;\n  transition: 0.2s;\n}\n\n.sideMenu a.link:hover {\n  color: var(--link-active);\n}\n.sideMenu a.link.active {\n  color: var(--link-active);\n}\n.sideMenu li:last-of-type a {\n  margin-bottom: 0;\n}\n#add-project-btn {\n  color: white;\n  font-size: 2rem;\n}\n.content {\n  margin-left: 250px;\n  transition: margin-left 0.5s;\n  padding: 10px;\n  max-width: 1000px;\n}\n.page-title {\n  margin-bottom: 15px;\n  font-size: 3rem;\n}\n\n.table-row {\n  display: flex;\n  justify-content: space-between;\n  border-bottom: 0.5px gray solid;\n  padding: var(--table-row-padding);\n  position: relative;\n}\n.title {\n  font-weight: 600;\n}\n.table-row-side {\n  display: flex;\n}\n.dueDate {\n  width: 150px;\n}\n.priority {\n  display: flex;\n  width: 100px;\n  justify-content: space-between;\n  align-content: center;\n}\n.low {\n  color: #04aa6d;\n}\n.medium {\n  color: #db4c3f;\n}\n.high {\n  color: red;\n}\n.check-box-cont {\n  display: flex;\n}\n.crossout {\n  text-decoration: line-through;\n  color: gray;\n}\n.project-link {\n  display: flex;\n}\n\n#add-project-btn {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 50px;\n  height: 50px;\n  border-radius: 100%;\n  padding: 0;\n}\n#add-project-btn:hover {\n  background-color: rgba(255, 255, 255, 0.377);\n  color: var(--link-active);\n}\n\n/* MODAL STYLING START */\n\n.modal {\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%) scale(0);\n  border: 0.5px black solid;\n  border-radius: 10px;\n  z-index: 10;\n  background-color: white;\n  width: 500px;\n  max-width: 80%;\n  transition: 200ms ease-in-out;\n}\n.modal.active {\n  transform: translate(-50%, -50%) scale(1);\n}\n.modal-header {\n  padding: 10px 15px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.modal-header .title {\n  font-size: 1.25rem;\n  font-weight: bold;\n}\n\n.modal-header .close-button {\n  outline: none;\n  border: none;\n  background: none;\n  cursor: pointer;\n  font-size: 1.25rem;\n  font-weight: bolder;\n}\n\n.modal-body {\n  padding: 10px 15px;\n}\n\n.overlay {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: rgba(0, 0, 0, 0.2);\n  opacity: 0;\n  pointer-events: none;\n  z-index: 1;\n}\n.overlay.active {\n  pointer-events: all;\n  opacity: 1;\n}\n\n/* MODAL END */\n\n.table-row-img {\n  position: relative;\n  right: 0;\n  top: var(--table-row-padding);\n  width: 21px;\n  height: 21px;\n}\n\n.project-page-link-cont {\n  display: flex;\n  font-size: 1.5rem;\n  font-weight: 300;\n  margin: 10px 0px;\n  width: 400px;\n  justify-content: space-between;\n}\n.project-page-link,\n.project-page-link-text {\n  padding: 10px;\n  border-radius: 30px;\n}\n.project-page-link {\n  cursor: pointer;\n  font-weight: 500;\n}\n.project-page-link:hover {\n  background: rgba(76, 139, 245, 0.3);\n}\n.project-page-link-text {\n  display: inline;\n}\n\n.project-nav-ext {\n  margin: 0;\n  padding: 0;\n  text-decoration: none;\n}\n.project-nav-ext a:link,\n.project-nav-ext a:visited {\n  color: white;\n  font-size: 1.25rem;\n  text-decoration: none;\n  position: relative;\n}\n.project-nav-ext {\n  width: 200px;\n  margin-left: auto;\n  list-style-type: none;\n}\nul.project-nav-ext > a.active {\n  border: 1px red solid;\n}\n.form-flex-col {\n  display: flex;\n  flex-direction: column;\n  margin: 10px;\n  width: 100%;\n}\n.form-flex-row {\n  padding: 2px;\n  display: flex;\n  justify-content: flex-start;\n}\n.flex-col-input {\n  width: 100%;\n}\ninput,\nselect {\n  background: none;\n  border: none;\n  border: 0.5px solid #8f8f9d;\n  border-radius: 3px;\n}\nselect {\n  padding: 3.5px;\n  display: inline;\n}\n#task-descrip-modal {\n  resize: vertical;\n  width: calc(100% - 20px);\n}\n\n.buttons-flex {\n  display: flex;\n  align-content: center;\n  justify-content: center;\n  padding: 10px;\n  gap: 25px;\n}\n\n.buttons-flex > button {\n  border-radius: 3px;\n  width: 100px;\n  padding: 7px 0px;\n  border: 1px solid white;\n  background: var(--link-active);\n  color: white;\n  transition: 0.5s;\n}\n\n#modal-save {\n  background: #1dbf73;\n}\n\n.buttons-flex > button:hover {\n  transform: scale(1.2);\n}\n\n.add-task-cont {\n  display: flex;\n  justify-content: center;\n  align-content: center;\n}\n\n.add-task-text {\n  align-self: center;\n  color: white;\n  font-weight: bold;\n  margin-right: 5px;\n}\n\n.add-task-img {\n  width: 30px;\n  height: 30px;\n  cursor: pointer;\n  align-self: center;\n}\n.Bkgrndhighlight {\n  width: 40px;\n  height: 40px;\n  display: flex;\n  justify-content: center;\n  border-radius: 10px;\n}\n.Bkgrndhighlight:hover {\n  background: rgba(255, 255, 255, 0.151);\n}\n',""]);const r=i},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=e(t);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,o){"string"==typeof e&&(e=[[null,e,""]]);var i={};if(o)for(var r=0;r<this.length;r++){var a=this[r][0];null!=a&&(i[a]=!0)}for(var s=0;s<e.length;s++){var c=[].concat(e[s]);o&&i[c[0]]||(n&&(c[2]?c[2]="".concat(n," and ").concat(c[2]):c[2]=n),t.push(c))}},t}},379:e=>{var t=[];function n(e){for(var n=-1,o=0;o<t.length;o++)if(t[o].identifier===e){n=o;break}return n}function o(e,o){for(var r={},a=[],s=0;s<e.length;s++){var c=e[s],l=o.base?c[0]+o.base:c[0],d=r[l]||0,u="".concat(l," ").concat(d);r[l]=d+1;var p=n(u),m={css:c[1],media:c[2],sourceMap:c[3]};-1!==p?(t[p].references++,t[p].updater(m)):t.push({identifier:u,updater:i(m,o),references:1}),a.push(u)}return a}function i(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;n.update(e=t)}else n.remove()}}e.exports=function(e,i){var r=o(e=e||[],i=i||{});return function(e){e=e||[];for(var a=0;a<r.length;a++){var s=n(r[a]);t[s].references--}for(var c=o(e,i),l=0;l<r.length;l++){var d=n(r[l]);0===t[d].references&&(t[d].updater(),t.splice(d,1))}r=c}}},569:e=>{var t={};e.exports=function(e,n){var o=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var o=n.css,i=n.media,r=n.sourceMap;i?e.setAttribute("media",i):e.removeAttribute("media"),r&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),t.styleTagTransform(o,e)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},339:(e,t,n)=>{n.d(t,{Z:()=>a});var o=n(21),i=n(19);function r(e){const t=e.currentTarget.parentNode.parentNode;if(void 0===t)return;t.classList.toggle("crossout");const n=t.getAttribute("data-task-id");o.q1.completeXOR(n)}const a=class{constructor(e){this.tasks=e??[]}createTableRow(e,t,n,o,a){let s,c,l,d,u,p,m,h;return s=document.createElement("div"),s.classList.add("table-row"),s.setAttribute("data-task-id",a),c=document.createElement("p"),c.classList.toggle("table-title"),c.textContent=e,l=document.createElement("input"),l.setAttribute("type","checkbox"),l.classList.add("table-ckbx"),l.addEventListener("click",r),o&&(s.classList.toggle("crossout"),l.setAttribute("checked","true")),d=document.createElement("div"),d.appendChild(l),d.appendChild(c),d.classList.add("check-box-cont"),s.appendChild(d),u=document.createElement("div"),u.classList.add("table-row-side"),p=document.createElement("p"),m=document.createElement("p"),p.classList.add("dueDate"),m.classList.add("priority"),m.classList.add(n.toLowerCase()),p.textContent=t,m.textContent=n,"table-head"!=a&&(h=new Image,h.src=i,h.classList.add("table-row-img"),h.setAttribute("data-modal-target","#modal"),h.setAttribute("data-task-id",a),m.appendChild(h)),u.appendChild(p),u.appendChild(m),s.appendChild(u),s}createTableTitle(){let e=this.createTableRow("Title","Due Date","Priority","","table-head");return e.classList.toggle("title"),e.querySelector("input").remove(),e}renderTableData(){const e=document.createElement("div");let t;for(let n of this.tasks)t=this.createTableRow(n.title,n.dueDate,n.priority,n.isComplete,n.id),e.appendChild(t);return e}}},19:(e,t,n)=>{e.exports=n.p+"images/30a4464bf104e1590f54.png"},21:(e,t,n)=>{n.d(t,{q1:()=>L,fp:()=>T,Ok:()=>j});var o=n(379),i=n.n(o),r=n(795),a=n.n(r),s=n(569),c=n.n(s),l=n(565),d=n.n(l),u=n(216),p=n.n(u),m=n(589),h=n.n(m),f=n(772),g={};g.styleTagTransform=h(),g.setAttributes=d(),g.insert=c().bind(null,"head"),g.domAPI=a(),g.insertStyleElement=p(),i()(f.Z,g),f.Z&&f.Z.locals&&f.Z.locals;var v=n(434),b={};function x(){document.getElementById("sideMenu").style.marginLeft="0px",document.getElementById("content").style.marginLeft="250px"}function y(){document.getElementById("sideMenu").style.marginLeft="-250px",document.getElementById("content").style.marginLeft="0px"}function k(){const e=this.open?y:x;this.open^=1,e()}b.styleTagTransform=h(),b.setAttributes=d(),b.insert=c().bind(null,"head"),b.domAPI=a(),b.insertStyleElement=p(),i()(v.Z,b),v.Z&&v.Z.locals&&v.Z.locals;var w=n(939);const L=new(n(760).Z);!function(e){const t=document.querySelector("img.header-img[data-nav-icon]"),n=k.bind({open:1});t.addEventListener("click",n)}();const j=document.querySelectorAll("#sideMenu > ul.menu-main > li > a.link");let C="Home";(0,w.X)(C);for(let e=0;e<j.length;e++)j[e].addEventListener("click",E);function E(e){if(!e.target.classList.contains("active")||"Projects"==e.target.textContent){for(let e=0;e<j.length;e++)j[e].classList.remove("active");C=e.target.textContent,L.currFocus=e.target.textContent,e.target.classList.toggle("active"),(0,w.X)(C)}}function T(e){return!e||/^\s*$/.test(e)}},939:(e,t,n)=>{n.d(t,{X:()=>g});var o=n(339),i=n(21);const r=document.querySelector(".overlay"),a=document.querySelector("#task-title-modal"),s=document.querySelector("#task-prio-modal"),c=(document.querySelector("#task-dueDate-modal"),document.querySelector("#task-project-modal")),l=document.querySelector("#task-descrip-modal"),d=document.getElementById("modal-save");let u,p={isUpdate:!1,isAddition:!1,modal:null},m=function(e){var t;this.isUpdate?function(e){const t=i.q1.updateTask(u,a.value,l.value,"",s.value,c.value);g(),t&&(h(e),g())}(this.modal):(t=this.modal,i.q1.addNewTask(a.value,l.value,"",s.value,c.value)&&(h(t),g()))}.bind(p);function h(e){null!=e&&(e.classList.remove("active"),r.classList.remove("active"))}r.addEventListener("click",(()=>{document.querySelectorAll(".modal.active").forEach((e=>{h(e)})),r.classList.remove("active")}));let f=()=>document.getElementById("content");function g(e){void 0===e&&(e=i.q1.currFocus),function(){document.querySelector("#content").remove();const e=document.createElement("div");e.classList.add("content"),e.setAttribute("id","content"),document.body.appendChild(e)}();let t,n,g=f();t=document.createElement("h1"),t.classList.toggle("page-title"),t.textContent=e._capitalize()??"Home",g.appendChild(t);const b=i.q1.projectCounter();if(x(b),"Projects"==e)return void function(e){const t=f();let n,o,r,a;Object.keys(e).forEach((s=>{n=document.createElement("div"),n.classList.add("project-page-link-cont"),o=document.createElement("a"),o.classList.add("project-page-link"),n.appendChild(o),o.addEventListener("click",v),a=(0,i.fp)(s)?"Home":s,o.textContent=`${a._capitalize()}`,r=document.createElement("p"),r.textContent=`${e[s]}  ${e[s]>1?"Tasks":"Task*"}`,n.appendChild(r),r.classList.add("project-page-link-text"),t.appendChild(n)})),x(e)}(b);i.q1.currFocus=e;let y=i.q1.getTasks();const k=document.createElement("div");k.classList.add("table-cont"),n=new o.Z(y);const w=n.createTableTitle(),L=n.renderTableData();k.appendChild(w),k.appendChild(L),g.appendChild(k),d.removeEventListener("click",m),d.addEventListener("click",m),document.querySelectorAll("[data-modal-target]").forEach((e=>{e.addEventListener("click",(t=>{const n=document.querySelector(e.dataset.modalTarget);p.modal=n,u=t.target.getAttribute("data-task-id");const o=i.q1.getTaskById(u);!function(e){let t;c.querySelectorAll("*").forEach((e=>e.remove()));for(let n of e)t=document.createElement("option"),t.value=n,t.textContent=n,c.appendChild(t)}(i.q1.getProjects()),"true"==e.dataset.addBtn?(a.value="",s.value="",c.value="",l.value="",p.isAddition=!0):(a.value=o.title,s.value=o.priority,c.value=o.project,l.value=o.description,p.isUpdate=!0),function(e,t){null!=e&&(e.classList.add("active"),r.classList.add("active"))}(n)}))})),document.querySelectorAll("[data-close-button]").forEach((e=>{e.addEventListener("click",(()=>{h(e.closest(".modal"))}))}))}function v(e){const t=e.target.textContent;if(i.q1.currFocus=t,"Home"==t||"Today"==t)for(let e=0;e<i.Ok.length;e++)"Projects"==i.Ok[e].textContent?i.Ok[e].classList.remove("active"):i.Ok[e].textContent==t&&i.Ok[e].classList.add("active");g(t)}function b(e){const t=document.querySelector("ul.menu-main li a.active");t&&t.classList.remove("active"),console.log(e),g(e.target.textContent)}function x(e){let t,n;const o=function(){let e=document.querySelector(".project-nav-ext");return e.remove(),e=document.createElement("ul"),e.classList.add("project-nav-ext"),document.querySelector("#sideMenu").appendChild(e),e}(),r=Object.keys(e);let a;for(let e of r)a=(0,i.fp)(e)?"home":e,"home"!=a&&"today"!=a&&(t=document.createElement("li"),n=document.createElement("a"),n.setAttribute("href","#"),t.appendChild(n),n.textContent=a._capitalize(),a===i.q1.currFocus&&n.classList.add("active"),n.addEventListener("click",b),o.appendChild(t))}String.prototype._capitalize=function(){return this.charAt(0).toUpperCase()+this.slice(1)}},760:(e,t,n)=>{n.d(t,{Z:()=>a});class o{static id=-1;constructor(e,t,n,i,r,a){this.title=e,this.description=t,this.dueDate="none",this.priority=i,this.isComplete=r,this.id="T"+ ++o.id,this.project=a}setId(){}get title(){return this._title}get description(){return this._description}get dueDate(){return this._dueDate}get priority(){return this._priority}get isComplete(){return this._isComplete}get project(){return this._project}set title(e){this._title=e}set description(e){this._description=e}set dueDate(e){this._dueDate=e}set priority(e){this._priority=e}set isComplete(e){this._isComplete=e}set project(e){this._project=e}}const i=o;var r=n(21);const a=class{constructor(){this.focus="home",this.tasks=[new i("Learn HashMaps","1","none","High",!0,""),new i("Learn Linked Lists","2","none","Medium",!0,""),new i("Learn Arrays","3","none","Low",!0,""),new i("Learn Queues","4","none","Low",!0,""),new i("Learn Stacks","5","none","Medium",!1,""),new i("Learn R/B Trees","6","none","Low",!1,""),new i("Learn Graphs","7","none","Low",!1,"today"),new i("Learn Tuples","8","none","Medium",!0,"today"),new i("Make Trays","8","none","Medium",!1,"subway"),new i("Buy Zone 3 Pass","8","none","High",!1,"college"),new i("Pick Classes","8","none","High",!1,"college")],this.projectsSet=new Set}get currFocus(){return this.focus}set currFocus(e){e&&(e=e.toLowerCase()),this.focus=e??"home"}getTasks(){return"home"==this.currFocus?this.tasks:this.tasks.filter((e=>e.project===this.currFocus&&e.title))}getTaskById(e){return this.tasks.find((t=>t.id===e))}completeXOR(e){this.getTaskById(e).isComplete^=1}projectCounter(){const e={};return this.tasks.forEach((t=>{void 0===e[t.project]&&(e[t.project]=0),t.title&&e[t.project]++,this.projectsSet.add(t.project)})),e}addProject(e){this.tasks.push(new i("","","","","",e.trim()))}getProjects(){return Array.from(this.projectsSet)}updateTask(e,t,n,o,i,a){const s=this.getTaskById(e);if(null!=s)return(0,r.fp)(t)||(0,r.fp)(i)?0:(s.title=t,s.priority=i,s.project=a,s.description=n,1)}addNewTask(e,t,n,o,a){if((0,r.fp)(e)||(0,r.fp)(o))return 0;const s=new i(e,t,n,o,!1,a);return this.tasks.push(s),1}}}},t={};function n(o){var i=t[o];if(void 0!==i)return i.exports;var r=t[o]={id:o,exports:{}};return e[o](r,r.exports,n),r.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var o=t.getElementsByTagName("script");o.length&&(e=o[o.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),n(21),n(939),n(339),n(760)})();