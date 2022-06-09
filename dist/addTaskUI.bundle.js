/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/remove.js":
/*!***********************!*\
  !*** ./src/remove.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const clearTask = (index, list) => {
  if (list.length === 0) return;

  list.splice(index - 1, 1);

  document.querySelector(`#task-${index}`).parentNode.parentNode.remove();
  localStorage.setItem('tasks', JSON.stringify(list));

  if (list.length === 0) return;

  for (let i = index - 1; i < list.length; i += 1) {
    const nextCheck = document.querySelector(`#task-${i + 2}`);
    nextCheck.id = `task-${i + 1}`;
    nextCheck.value -= 1;
    list[i].index -= 1;
    localStorage.setItem('tasks', JSON.stringify(list));
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (clearTask);

/***/ }),

/***/ "./src/update.js":
/*!***********************!*\
  !*** ./src/update.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "confirmChange": () => (/* binding */ confirmChange),
/* harmony export */   "updateStatus": () => (/* binding */ updateStatus)
/* harmony export */ });
const updateStatus = (task, taskData, checkBox, list) => {
  if (checkBox.checked) {
    task.children[0].style.textDecoration = 'line-through';
    taskData.completed = true;
    list.forEach((element) => {
      if (element.index === taskData.index) {
        element.completed = true;
        localStorage.setItem('tasks', JSON.stringify(list));
      }
    });
    localStorage.setItem('tasks', JSON.stringify(list));
  } else {
    task.children[0].style.textDecoration = 'none';
    taskData.completed = false;
    localStorage.setItem('tasks', JSON.stringify(list));
  }
};

const confirmChange = (task, taskData, list) => {
  taskData.description = task.children[0].children[1].textContent;
  list.forEach((element) => {
    if (element.index === taskData.index) {
      element.description = task.children[0].children[1].textContent;
      localStorage.setItem('tasks', JSON.stringify(list));
    }
  });
};



/***/ }),

/***/ "./src/move.png":
/*!**********************!*\
  !*** ./src/move.png ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "0cdea37dae77c92671b5.png";

/***/ }),

/***/ "./src/trash.png":
/*!***********************!*\
  !*** ./src/trash.png ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "667a1805229ae33e7d3d.png";

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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**************************!*\
  !*** ./src/addTaskUI.js ***!
  \**************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "appendTask": () => (/* binding */ appendTask),
/* harmony export */   "editTask": () => (/* binding */ editTask)
/* harmony export */ });
/* harmony import */ var _move_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./move.png */ "./src/move.png");
/* harmony import */ var _trash_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./trash.png */ "./src/trash.png");
/* harmony import */ var _remove_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./remove.js */ "./src/remove.js");
/* harmony import */ var _update_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./update.js */ "./src/update.js");





const taksContainer = document.querySelector('.to-do-list');
const deleteBtn = document.querySelector('.clear');

const confirmChangeUI = (task, taskData, editTaksImg, list) => {
  if (editTaksImg.src === _trash_png__WEBPACK_IMPORTED_MODULE_1__) {
    editTaksImg.src = _move_png__WEBPACK_IMPORTED_MODULE_0__;
    deleteBtn.textContent = 'Clear all completed';
    deleteBtn.classList.remove('makeChanges');
    deleteBtn.style.fontSize = '16px';
    task.children[0].children[1].setAttribute('contenteditable', 'false');
    editTaksImg.parentNode.style.background = 'inherit';
    (0,_update_js__WEBPACK_IMPORTED_MODULE_3__.confirmChange)(task, taskData, list);
  }
};

const editTask = (task, taskData, editTaksImg, list) => {
  if (editTaksImg.src === _move_png__WEBPACK_IMPORTED_MODULE_0__) {
    editTaksImg.src = _trash_png__WEBPACK_IMPORTED_MODULE_1__;
    editTaksImg.parentNode.style.background = 'rgba(214, 214, 148, 0.534)';
    task.children[0].children[1].setAttribute('contenteditable', 'true');
    deleteBtn.textContent = 'Chick here to save changes';
    deleteBtn.classList.add('makeChanges');
    deleteBtn.style.fontSize = '24px';
    deleteBtn.addEventListener('click', () => {
      confirmChangeUI(task, taskData, editTaksImg, list);
    });
  } else {
    (0,_remove_js__WEBPACK_IMPORTED_MODULE_2__["default"])(taskData.index, list);
  }
};

const appendTask = (item, list) => {
  const taskUI = document.createElement('li');
  taskUI.innerHTML = `<div class="task"><input type='checkbox' id = task-${item.index} class = 'check' value=${item.index}><p size='12'>${item.description}</p></div>`;
  const editTaksImg = new Image();
  editTaksImg.src = _move_png__WEBPACK_IMPORTED_MODULE_0__;
  taskUI.appendChild(editTaksImg);
  editTaksImg.addEventListener('click', () => {
    editTask(taskUI, item, editTaksImg, list);
  });
  taksContainer.appendChild(taskUI);
  const checkBox = taskUI.children[0].children[0];

  if (item.completed) {
    checkBox.checked = true;
    taskUI.children[0].style.textDecoration = 'line-through';
  }

  checkBox.style.cursor = 'pointer';
  editTaksImg.style.cursor = 'pointer';
  checkBox.addEventListener('click', () => {
    (0,_update_js__WEBPACK_IMPORTED_MODULE_3__.updateStatus)(taskUI, item, checkBox, list);
  });
};


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkVGFza1VJLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUE7O0FBRUEsa0NBQWtDLE1BQU07QUFDeEM7O0FBRUE7O0FBRUEsMEJBQTBCLGlCQUFpQjtBQUMzQyxzREFBc0QsTUFBTTtBQUM1RCwyQkFBMkIsTUFBTTtBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlLFNBQVM7Ozs7Ozs7Ozs7Ozs7OztBQ25CeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUMxQkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNmaUM7QUFDRTtBQUNDO0FBQ3NCOztBQUUxRDtBQUNBOztBQUVBO0FBQ0EsMEJBQTBCLHVDQUFRO0FBQ2xDLHNCQUFzQixzQ0FBTztBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSx5REFBYTtBQUNqQjtBQUNBOztBQUVBO0FBQ0EsMEJBQTBCLHNDQUFPO0FBQ2pDLHNCQUFzQix1Q0FBUTtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxJQUFJO0FBQ0osSUFBSSxzREFBUztBQUNiO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDJFQUEyRSxZQUFZLHdCQUF3QixXQUFXLGdCQUFnQixpQkFBaUI7QUFDM0o7QUFDQSxvQkFBb0Isc0NBQU87QUFDM0I7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBSSx3REFBWTtBQUNoQixHQUFHO0FBQ0giLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9Uby1Eby1MaXN0Ly4vc3JjL3JlbW92ZS5qcyIsIndlYnBhY2s6Ly9Uby1Eby1MaXN0Ly4vc3JjL3VwZGF0ZS5qcyIsIndlYnBhY2s6Ly9Uby1Eby1MaXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL1RvLURvLUxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL1RvLURvLUxpc3Qvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9Uby1Eby1MaXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vVG8tRG8tTGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL1RvLURvLUxpc3Qvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vVG8tRG8tTGlzdC8uL3NyYy9hZGRUYXNrVUkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgY2xlYXJUYXNrID0gKGluZGV4LCBsaXN0KSA9PiB7XG4gIGlmIChsaXN0Lmxlbmd0aCA9PT0gMCkgcmV0dXJuO1xuXG4gIGxpc3Quc3BsaWNlKGluZGV4IC0gMSwgMSk7XG5cbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI3Rhc2stJHtpbmRleH1gKS5wYXJlbnROb2RlLnBhcmVudE5vZGUucmVtb3ZlKCk7XG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0YXNrcycsIEpTT04uc3RyaW5naWZ5KGxpc3QpKTtcblxuICBpZiAobGlzdC5sZW5ndGggPT09IDApIHJldHVybjtcblxuICBmb3IgKGxldCBpID0gaW5kZXggLSAxOyBpIDwgbGlzdC5sZW5ndGg7IGkgKz0gMSkge1xuICAgIGNvbnN0IG5leHRDaGVjayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCN0YXNrLSR7aSArIDJ9YCk7XG4gICAgbmV4dENoZWNrLmlkID0gYHRhc2stJHtpICsgMX1gO1xuICAgIG5leHRDaGVjay52YWx1ZSAtPSAxO1xuICAgIGxpc3RbaV0uaW5kZXggLT0gMTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndGFza3MnLCBKU09OLnN0cmluZ2lmeShsaXN0KSk7XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNsZWFyVGFzazsiLCJjb25zdCB1cGRhdGVTdGF0dXMgPSAodGFzaywgdGFza0RhdGEsIGNoZWNrQm94LCBsaXN0KSA9PiB7XG4gIGlmIChjaGVja0JveC5jaGVja2VkKSB7XG4gICAgdGFzay5jaGlsZHJlblswXS5zdHlsZS50ZXh0RGVjb3JhdGlvbiA9ICdsaW5lLXRocm91Z2gnO1xuICAgIHRhc2tEYXRhLmNvbXBsZXRlZCA9IHRydWU7XG4gICAgbGlzdC5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgICBpZiAoZWxlbWVudC5pbmRleCA9PT0gdGFza0RhdGEuaW5kZXgpIHtcbiAgICAgICAgZWxlbWVudC5jb21wbGV0ZWQgPSB0cnVlO1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndGFza3MnLCBKU09OLnN0cmluZ2lmeShsaXN0KSk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Rhc2tzJywgSlNPTi5zdHJpbmdpZnkobGlzdCkpO1xuICB9IGVsc2Uge1xuICAgIHRhc2suY2hpbGRyZW5bMF0uc3R5bGUudGV4dERlY29yYXRpb24gPSAnbm9uZSc7XG4gICAgdGFza0RhdGEuY29tcGxldGVkID0gZmFsc2U7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Rhc2tzJywgSlNPTi5zdHJpbmdpZnkobGlzdCkpO1xuICB9XG59O1xuXG5jb25zdCBjb25maXJtQ2hhbmdlID0gKHRhc2ssIHRhc2tEYXRhLCBsaXN0KSA9PiB7XG4gIHRhc2tEYXRhLmRlc2NyaXB0aW9uID0gdGFzay5jaGlsZHJlblswXS5jaGlsZHJlblsxXS50ZXh0Q29udGVudDtcbiAgbGlzdC5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgaWYgKGVsZW1lbnQuaW5kZXggPT09IHRhc2tEYXRhLmluZGV4KSB7XG4gICAgICBlbGVtZW50LmRlc2NyaXB0aW9uID0gdGFzay5jaGlsZHJlblswXS5jaGlsZHJlblsxXS50ZXh0Q29udGVudDtcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0YXNrcycsIEpTT04uc3RyaW5naWZ5KGxpc3QpKTtcbiAgICB9XG4gIH0pO1xufTtcblxuZXhwb3J0IHsgdXBkYXRlU3RhdHVzLCBjb25maXJtQ2hhbmdlIH07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiaW1wb3J0IG1vdmVTcmMgZnJvbSAnLi9tb3ZlLnBuZyc7XG5pbXBvcnQgdHJhc2hTcmMgZnJvbSAnLi90cmFzaC5wbmcnO1xuaW1wb3J0IGNsZWFyVGFzayBmcm9tICcuL3JlbW92ZS5qcyc7XG5pbXBvcnQgeyB1cGRhdGVTdGF0dXMsIGNvbmZpcm1DaGFuZ2UgfSBmcm9tICcuL3VwZGF0ZS5qcyc7XG5cbmNvbnN0IHRha3NDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG8tZG8tbGlzdCcpO1xuY29uc3QgZGVsZXRlQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNsZWFyJyk7XG5cbmNvbnN0IGNvbmZpcm1DaGFuZ2VVSSA9ICh0YXNrLCB0YXNrRGF0YSwgZWRpdFRha3NJbWcsIGxpc3QpID0+IHtcbiAgaWYgKGVkaXRUYWtzSW1nLnNyYyA9PT0gdHJhc2hTcmMpIHtcbiAgICBlZGl0VGFrc0ltZy5zcmMgPSBtb3ZlU3JjO1xuICAgIGRlbGV0ZUJ0bi50ZXh0Q29udGVudCA9ICdDbGVhciBhbGwgY29tcGxldGVkJztcbiAgICBkZWxldGVCdG4uY2xhc3NMaXN0LnJlbW92ZSgnbWFrZUNoYW5nZXMnKTtcbiAgICBkZWxldGVCdG4uc3R5bGUuZm9udFNpemUgPSAnMTZweCc7XG4gICAgdGFzay5jaGlsZHJlblswXS5jaGlsZHJlblsxXS5zZXRBdHRyaWJ1dGUoJ2NvbnRlbnRlZGl0YWJsZScsICdmYWxzZScpO1xuICAgIGVkaXRUYWtzSW1nLnBhcmVudE5vZGUuc3R5bGUuYmFja2dyb3VuZCA9ICdpbmhlcml0JztcbiAgICBjb25maXJtQ2hhbmdlKHRhc2ssIHRhc2tEYXRhLCBsaXN0KTtcbiAgfVxufTtcblxuY29uc3QgZWRpdFRhc2sgPSAodGFzaywgdGFza0RhdGEsIGVkaXRUYWtzSW1nLCBsaXN0KSA9PiB7XG4gIGlmIChlZGl0VGFrc0ltZy5zcmMgPT09IG1vdmVTcmMpIHtcbiAgICBlZGl0VGFrc0ltZy5zcmMgPSB0cmFzaFNyYztcbiAgICBlZGl0VGFrc0ltZy5wYXJlbnROb2RlLnN0eWxlLmJhY2tncm91bmQgPSAncmdiYSgyMTQsIDIxNCwgMTQ4LCAwLjUzNCknO1xuICAgIHRhc2suY2hpbGRyZW5bMF0uY2hpbGRyZW5bMV0uc2V0QXR0cmlidXRlKCdjb250ZW50ZWRpdGFibGUnLCAndHJ1ZScpO1xuICAgIGRlbGV0ZUJ0bi50ZXh0Q29udGVudCA9ICdDaGljayBoZXJlIHRvIHNhdmUgY2hhbmdlcyc7XG4gICAgZGVsZXRlQnRuLmNsYXNzTGlzdC5hZGQoJ21ha2VDaGFuZ2VzJyk7XG4gICAgZGVsZXRlQnRuLnN0eWxlLmZvbnRTaXplID0gJzI0cHgnO1xuICAgIGRlbGV0ZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIGNvbmZpcm1DaGFuZ2VVSSh0YXNrLCB0YXNrRGF0YSwgZWRpdFRha3NJbWcsIGxpc3QpO1xuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIGNsZWFyVGFzayh0YXNrRGF0YS5pbmRleCwgbGlzdCk7XG4gIH1cbn07XG5cbmNvbnN0IGFwcGVuZFRhc2sgPSAoaXRlbSwgbGlzdCkgPT4ge1xuICBjb25zdCB0YXNrVUkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICB0YXNrVUkuaW5uZXJIVE1MID0gYDxkaXYgY2xhc3M9XCJ0YXNrXCI+PGlucHV0IHR5cGU9J2NoZWNrYm94JyBpZCA9IHRhc2stJHtpdGVtLmluZGV4fSBjbGFzcyA9ICdjaGVjaycgdmFsdWU9JHtpdGVtLmluZGV4fT48cCBzaXplPScxMic+JHtpdGVtLmRlc2NyaXB0aW9ufTwvcD48L2Rpdj5gO1xuICBjb25zdCBlZGl0VGFrc0ltZyA9IG5ldyBJbWFnZSgpO1xuICBlZGl0VGFrc0ltZy5zcmMgPSBtb3ZlU3JjO1xuICB0YXNrVUkuYXBwZW5kQ2hpbGQoZWRpdFRha3NJbWcpO1xuICBlZGl0VGFrc0ltZy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBlZGl0VGFzayh0YXNrVUksIGl0ZW0sIGVkaXRUYWtzSW1nLCBsaXN0KTtcbiAgfSk7XG4gIHRha3NDb250YWluZXIuYXBwZW5kQ2hpbGQodGFza1VJKTtcbiAgY29uc3QgY2hlY2tCb3ggPSB0YXNrVUkuY2hpbGRyZW5bMF0uY2hpbGRyZW5bMF07XG5cbiAgaWYgKGl0ZW0uY29tcGxldGVkKSB7XG4gICAgY2hlY2tCb3guY2hlY2tlZCA9IHRydWU7XG4gICAgdGFza1VJLmNoaWxkcmVuWzBdLnN0eWxlLnRleHREZWNvcmF0aW9uID0gJ2xpbmUtdGhyb3VnaCc7XG4gIH1cblxuICBjaGVja0JveC5zdHlsZS5jdXJzb3IgPSAncG9pbnRlcic7XG4gIGVkaXRUYWtzSW1nLnN0eWxlLmN1cnNvciA9ICdwb2ludGVyJztcbiAgY2hlY2tCb3guYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgdXBkYXRlU3RhdHVzKHRhc2tVSSwgaXRlbSwgY2hlY2tCb3gsIGxpc3QpO1xuICB9KTtcbn07XG5cbmV4cG9ydCB7IGFwcGVuZFRhc2ssIGVkaXRUYXNrIH07Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9