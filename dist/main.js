/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/pageLoader.js":
/*!***************************!*\
  !*** ./src/pageLoader.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "pageLoader": () => (/* binding */ pageLoader),
/* harmony export */   "loadTabMenu": () => (/* binding */ loadTabMenu)
/* harmony export */ });
const contentDIV = document.querySelector("#content");

function webpackTest() {
  const h1 = document.createElement("h1");
  h1.innerText = "OBA ANA BA2EIT HENA";
  h1.classList.add("display-2");
  contentDIV.appendChild(h1);
}

function loadTabMenu() {
  //div container to store tabs
  const tabContainer = document.createElement("div");
  tabContainer.classList.add("container");
  tabContainer.setAttribute("id", "tabDiv");
  // making button group
  const buttonGroupDIV = document.createElement("div");
  buttonGroupDIV.classList.add("btn-group");
  buttonGroupDIV.setAttribute("role", "group");
  buttonGroupDIV.setAttribute("aria-label", "Basic example");
  // making each button
  const aboutBtn = document.createElement("button");
  aboutBtn.setAttribute("type", "button");
  aboutBtn.setAttribute("id", "aboutBtn");

  aboutBtn.classList.add("btn", "btn-outline-primary", "tab");
  aboutBtn.innerText = "About";

  const menuBtn = document.createElement("button");
  menuBtn.setAttribute("type", "button");
  menuBtn.setAttribute("id", "menuBtn");

  menuBtn.classList.add("btn", "btn-outline-primary", "tab");
  menuBtn.innerText = "Menu";

  const contactBtn = document.createElement("button");
  contactBtn.setAttribute("type", "button");
  contactBtn.setAttribute("id", "contactBtn");
  contactBtn.classList.add("btn", "btn-outline-primary", "tab");
  contactBtn.innerText = "Contact Us";

  //add each button to the btn group
  buttonGroupDIV.appendChild(aboutBtn);
  buttonGroupDIV.appendChild(menuBtn);
  buttonGroupDIV.appendChild(contactBtn);

  //add the group to .container
  tabContainer.appendChild(buttonGroupDIV);

  //return the tabcontainer to append inside the loadPage function()
  return tabContainer;
}

/* <div class="btn-group" role="group" aria-label="Basic example">
        <button type="button" class="btn btn-outline-primary tab">About</button>
        <button type="button" class="btn btn-outline-primary tab">Menu</button>
        <button type="button" class="btn btn-outline-primary tab">
          Contact Us
        </button>
      </div> */

function pageLoader() {
  //making h1
  const h1 = document.createElement("h1");
  h1.innerText = "Le Chad Restaurant";
  h1.classList.add("display-1", "mainTitle");

  //making container div
  const containerDiv = document.createElement("div");
  containerDiv.classList.add("container");

  //making row to add columns
  const row = document.createElement("div");
  row.classList.add("row");

  //making 1st column and it's contents
  const heroDIV = document.createElement("div");
  heroDIV.classList.add("col-6");
  const heroTitle = document.createElement("h2");
  heroTitle.innerText = "Our Goals";
  heroTitle.classList.add("display-5", "subTitle");
  const heroParagraph = document.createElement("p");
  heroParagraph.innerText = `We are a restaurant devoted to serving our customers with the most
  chad menu items.`;
  heroParagraph.classList.add("lead");

  // append contents to heroDIV
  heroDIV.append(heroTitle, heroParagraph);

  // make image DIV
  const imageDIV = document.createElement("div");
  imageDIV.classList.add("col-6");
  const chef_hat = document.createElement("img");
  chef_hat.classList.add("img-fluid", "chef-hat");
  chef_hat.src = "http://www.mcicon.com/wp-content/uploads/2021/04/Chef-06.jpg";
  chef_hat.alt = "chef hat image";
  // append contents to image DIV
  imageDIV.append(chef_hat);

  //append the 2 divs to row
  row.append(heroDIV, imageDIV);

  // append row to container
  containerDiv.append(row);

  //FINALLY, append container and h1 to content!
  // make TabMenu to also append to content div
  contentDIV.appendChild(h1);
  const tabMenu = loadTabMenu();
  contentDIV.appendChild(tabMenu);

  contentDIV.appendChild(containerDiv);
}




/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _pageLoader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pageLoader */ "./src/pageLoader.js");


alert("webpack did its thing!!");
//webpackTest();
(0,_pageLoader__WEBPACK_IMPORTED_MODULE_0__.pageLoader)();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ21DOzs7Ozs7O1VDakhuQztVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7O0FDTm1FO0FBQ25FO0FBQ0E7QUFDQTtBQUNBLHVEQUFRIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlX3Byb2plY3QvLi9zcmMvcGFnZUxvYWRlci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2VfcHJvamVjdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2VfcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlX3Byb2plY3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2VfcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZV9wcm9qZWN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGNvbnRlbnRESVYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnRcIik7XHJcblxyXG5mdW5jdGlvbiB3ZWJwYWNrVGVzdCgpIHtcclxuICBjb25zdCBoMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcclxuICBoMS5pbm5lclRleHQgPSBcIk9CQSBBTkEgQkEyRUlUIEhFTkFcIjtcclxuICBoMS5jbGFzc0xpc3QuYWRkKFwiZGlzcGxheS0yXCIpO1xyXG4gIGNvbnRlbnRESVYuYXBwZW5kQ2hpbGQoaDEpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBsb2FkVGFiTWVudSgpIHtcclxuICAvL2RpdiBjb250YWluZXIgdG8gc3RvcmUgdGFic1xyXG4gIGNvbnN0IHRhYkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgdGFiQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJjb250YWluZXJcIik7XHJcbiAgdGFiQ29udGFpbmVyLnNldEF0dHJpYnV0ZShcImlkXCIsIFwidGFiRGl2XCIpO1xyXG4gIC8vIG1ha2luZyBidXR0b24gZ3JvdXBcclxuICBjb25zdCBidXR0b25Hcm91cERJViA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgYnV0dG9uR3JvdXBESVYuY2xhc3NMaXN0LmFkZChcImJ0bi1ncm91cFwiKTtcclxuICBidXR0b25Hcm91cERJVi5zZXRBdHRyaWJ1dGUoXCJyb2xlXCIsIFwiZ3JvdXBcIik7XHJcbiAgYnV0dG9uR3JvdXBESVYuc2V0QXR0cmlidXRlKFwiYXJpYS1sYWJlbFwiLCBcIkJhc2ljIGV4YW1wbGVcIik7XHJcbiAgLy8gbWFraW5nIGVhY2ggYnV0dG9uXHJcbiAgY29uc3QgYWJvdXRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gIGFib3V0QnRuLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJidXR0b25cIik7XHJcbiAgYWJvdXRCdG4uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJhYm91dEJ0blwiKTtcclxuXHJcbiAgYWJvdXRCdG4uY2xhc3NMaXN0LmFkZChcImJ0blwiLCBcImJ0bi1vdXRsaW5lLXByaW1hcnlcIiwgXCJ0YWJcIik7XHJcbiAgYWJvdXRCdG4uaW5uZXJUZXh0ID0gXCJBYm91dFwiO1xyXG5cclxuICBjb25zdCBtZW51QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICBtZW51QnRuLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJidXR0b25cIik7XHJcbiAgbWVudUJ0bi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcIm1lbnVCdG5cIik7XHJcblxyXG4gIG1lbnVCdG4uY2xhc3NMaXN0LmFkZChcImJ0blwiLCBcImJ0bi1vdXRsaW5lLXByaW1hcnlcIiwgXCJ0YWJcIik7XHJcbiAgbWVudUJ0bi5pbm5lclRleHQgPSBcIk1lbnVcIjtcclxuXHJcbiAgY29uc3QgY29udGFjdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgY29udGFjdEJ0bi5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiYnV0dG9uXCIpO1xyXG4gIGNvbnRhY3RCdG4uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJjb250YWN0QnRuXCIpO1xyXG4gIGNvbnRhY3RCdG4uY2xhc3NMaXN0LmFkZChcImJ0blwiLCBcImJ0bi1vdXRsaW5lLXByaW1hcnlcIiwgXCJ0YWJcIik7XHJcbiAgY29udGFjdEJ0bi5pbm5lclRleHQgPSBcIkNvbnRhY3QgVXNcIjtcclxuXHJcbiAgLy9hZGQgZWFjaCBidXR0b24gdG8gdGhlIGJ0biBncm91cFxyXG4gIGJ1dHRvbkdyb3VwRElWLmFwcGVuZENoaWxkKGFib3V0QnRuKTtcclxuICBidXR0b25Hcm91cERJVi5hcHBlbmRDaGlsZChtZW51QnRuKTtcclxuICBidXR0b25Hcm91cERJVi5hcHBlbmRDaGlsZChjb250YWN0QnRuKTtcclxuXHJcbiAgLy9hZGQgdGhlIGdyb3VwIHRvIC5jb250YWluZXJcclxuICB0YWJDb250YWluZXIuYXBwZW5kQ2hpbGQoYnV0dG9uR3JvdXBESVYpO1xyXG5cclxuICAvL3JldHVybiB0aGUgdGFiY29udGFpbmVyIHRvIGFwcGVuZCBpbnNpZGUgdGhlIGxvYWRQYWdlIGZ1bmN0aW9uKClcclxuICByZXR1cm4gdGFiQ29udGFpbmVyO1xyXG59XHJcblxyXG4vKiA8ZGl2IGNsYXNzPVwiYnRuLWdyb3VwXCIgcm9sZT1cImdyb3VwXCIgYXJpYS1sYWJlbD1cIkJhc2ljIGV4YW1wbGVcIj5cclxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4tb3V0bGluZS1wcmltYXJ5IHRhYlwiPkFib3V0PC9idXR0b24+XHJcbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLW91dGxpbmUtcHJpbWFyeSB0YWJcIj5NZW51PC9idXR0b24+XHJcbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLW91dGxpbmUtcHJpbWFyeSB0YWJcIj5cclxuICAgICAgICAgIENvbnRhY3QgVXNcclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgPC9kaXY+ICovXHJcblxyXG5mdW5jdGlvbiBwYWdlTG9hZGVyKCkge1xyXG4gIC8vbWFraW5nIGgxXHJcbiAgY29uc3QgaDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XHJcbiAgaDEuaW5uZXJUZXh0ID0gXCJMZSBDaGFkIFJlc3RhdXJhbnRcIjtcclxuICBoMS5jbGFzc0xpc3QuYWRkKFwiZGlzcGxheS0xXCIsIFwibWFpblRpdGxlXCIpO1xyXG5cclxuICAvL21ha2luZyBjb250YWluZXIgZGl2XHJcbiAgY29uc3QgY29udGFpbmVyRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBjb250YWluZXJEaXYuY2xhc3NMaXN0LmFkZChcImNvbnRhaW5lclwiKTtcclxuXHJcbiAgLy9tYWtpbmcgcm93IHRvIGFkZCBjb2x1bW5zXHJcbiAgY29uc3Qgcm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICByb3cuY2xhc3NMaXN0LmFkZChcInJvd1wiKTtcclxuXHJcbiAgLy9tYWtpbmcgMXN0IGNvbHVtbiBhbmQgaXQncyBjb250ZW50c1xyXG4gIGNvbnN0IGhlcm9ESVYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGhlcm9ESVYuY2xhc3NMaXN0LmFkZChcImNvbC02XCIpO1xyXG4gIGNvbnN0IGhlcm9UaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcclxuICBoZXJvVGl0bGUuaW5uZXJUZXh0ID0gXCJPdXIgR29hbHNcIjtcclxuICBoZXJvVGl0bGUuY2xhc3NMaXN0LmFkZChcImRpc3BsYXktNVwiLCBcInN1YlRpdGxlXCIpO1xyXG4gIGNvbnN0IGhlcm9QYXJhZ3JhcGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICBoZXJvUGFyYWdyYXBoLmlubmVyVGV4dCA9IGBXZSBhcmUgYSByZXN0YXVyYW50IGRldm90ZWQgdG8gc2VydmluZyBvdXIgY3VzdG9tZXJzIHdpdGggdGhlIG1vc3RcclxuICBjaGFkIG1lbnUgaXRlbXMuYDtcclxuICBoZXJvUGFyYWdyYXBoLmNsYXNzTGlzdC5hZGQoXCJsZWFkXCIpO1xyXG5cclxuICAvLyBhcHBlbmQgY29udGVudHMgdG8gaGVyb0RJVlxyXG4gIGhlcm9ESVYuYXBwZW5kKGhlcm9UaXRsZSwgaGVyb1BhcmFncmFwaCk7XHJcblxyXG4gIC8vIG1ha2UgaW1hZ2UgRElWXHJcbiAgY29uc3QgaW1hZ2VESVYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGltYWdlRElWLmNsYXNzTGlzdC5hZGQoXCJjb2wtNlwiKTtcclxuICBjb25zdCBjaGVmX2hhdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XHJcbiAgY2hlZl9oYXQuY2xhc3NMaXN0LmFkZChcImltZy1mbHVpZFwiLCBcImNoZWYtaGF0XCIpO1xyXG4gIGNoZWZfaGF0LnNyYyA9IFwiaHR0cDovL3d3dy5tY2ljb24uY29tL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDIxLzA0L0NoZWYtMDYuanBnXCI7XHJcbiAgY2hlZl9oYXQuYWx0ID0gXCJjaGVmIGhhdCBpbWFnZVwiO1xyXG4gIC8vIGFwcGVuZCBjb250ZW50cyB0byBpbWFnZSBESVZcclxuICBpbWFnZURJVi5hcHBlbmQoY2hlZl9oYXQpO1xyXG5cclxuICAvL2FwcGVuZCB0aGUgMiBkaXZzIHRvIHJvd1xyXG4gIHJvdy5hcHBlbmQoaGVyb0RJViwgaW1hZ2VESVYpO1xyXG5cclxuICAvLyBhcHBlbmQgcm93IHRvIGNvbnRhaW5lclxyXG4gIGNvbnRhaW5lckRpdi5hcHBlbmQocm93KTtcclxuXHJcbiAgLy9GSU5BTExZLCBhcHBlbmQgY29udGFpbmVyIGFuZCBoMSB0byBjb250ZW50IVxyXG4gIC8vIG1ha2UgVGFiTWVudSB0byBhbHNvIGFwcGVuZCB0byBjb250ZW50IGRpdlxyXG4gIGNvbnRlbnRESVYuYXBwZW5kQ2hpbGQoaDEpO1xyXG4gIGNvbnN0IHRhYk1lbnUgPSBsb2FkVGFiTWVudSgpO1xyXG4gIGNvbnRlbnRESVYuYXBwZW5kQ2hpbGQodGFiTWVudSk7XHJcblxyXG4gIGNvbnRlbnRESVYuYXBwZW5kQ2hpbGQoY29udGFpbmVyRGl2KTtcclxufVxyXG5cclxuZXhwb3J0IHsgcGFnZUxvYWRlciwgbG9hZFRhYk1lbnUgfTtcclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBwYWdlTG9hZGVyIGFzIGxvYWRQYWdlLCBsb2FkVGFiTWVudSB9IGZyb20gXCIuL3BhZ2VMb2FkZXJcIjtcclxuXHJcbmFsZXJ0KFwid2VicGFjayBkaWQgaXRzIHRoaW5nISFcIik7XHJcbi8vd2VicGFja1Rlc3QoKTtcclxubG9hZFBhZ2UoKTtcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9