/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/addTaskUI.js":
/*!**************************!*\
  !*** ./src/addTaskUI.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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



/***/ }),

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

/***/ "./src/tasks.js":
/*!**********************!*\
  !*** ./src/tasks.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class Task {
  constructor(description, completed, index) {
    this.description = description;
    this.completed = completed;
    this.index = index;
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Task);

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
/*!********************!*\
  !*** ./src/add.js ***!
  \********************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Task": () => (/* reexport safe */ _tasks_js__WEBPACK_IMPORTED_MODULE_1__["default"]),
/* harmony export */   "addTask": () => (/* binding */ addTask),
/* harmony export */   "list": () => (/* binding */ list)
/* harmony export */ });
/* harmony import */ var _addTaskUI_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addTaskUI.js */ "./src/addTaskUI.js");
/* harmony import */ var _tasks_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tasks.js */ "./src/tasks.js");



const list = [];

const addTask = (description, completed, index) => {
  const task = new _tasks_js__WEBPACK_IMPORTED_MODULE_1__["default"](description, completed, index);
  list.push(task);
  (0,_addTaskUI_js__WEBPACK_IMPORTED_MODULE_0__.appendTask)(task);
  localStorage.setItem('tasks', JSON.stringify(list));
};


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQWlDO0FBQ0U7QUFDQztBQUNzQjs7QUFFMUQ7QUFDQTs7QUFFQTtBQUNBLDBCQUEwQix1Q0FBUTtBQUNsQyxzQkFBc0Isc0NBQU87QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUkseURBQWE7QUFDakI7QUFDQTs7QUFFQTtBQUNBLDBCQUEwQixzQ0FBTztBQUNqQyxzQkFBc0IsdUNBQVE7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsSUFBSTtBQUNKLElBQUksc0RBQVM7QUFDYjtBQUNBOztBQUVBO0FBQ0E7QUFDQSwyRUFBMkUsWUFBWSx3QkFBd0IsV0FBVyxnQkFBZ0IsaUJBQWlCO0FBQzNKO0FBQ0Esb0JBQW9CLHNDQUFPO0FBQzNCO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUksd0RBQVk7QUFDaEIsR0FBRztBQUNIOzs7Ozs7Ozs7Ozs7Ozs7O0FDMURBO0FBQ0E7O0FBRUE7O0FBRUEsa0NBQWtDLE1BQU07QUFDeEM7O0FBRUE7O0FBRUEsMEJBQTBCLGlCQUFpQjtBQUMzQyxzREFBc0QsTUFBTTtBQUM1RCwyQkFBMkIsTUFBTTtBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlLFNBQVM7Ozs7Ozs7Ozs7Ozs7O0FDbkJ4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFlLElBQUk7Ozs7Ozs7Ozs7Ozs7OztBQ1BuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQzFCQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZjRDO0FBQ2Q7O0FBRTlCOztBQUVBO0FBQ0EsbUJBQW1CLGlEQUFJO0FBQ3ZCO0FBQ0EsRUFBRSx5REFBVTtBQUNaO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9Uby1Eby1MaXN0Ly4vc3JjL2FkZFRhc2tVSS5qcyIsIndlYnBhY2s6Ly9Uby1Eby1MaXN0Ly4vc3JjL3JlbW92ZS5qcyIsIndlYnBhY2s6Ly9Uby1Eby1MaXN0Ly4vc3JjL3Rhc2tzLmpzIiwid2VicGFjazovL1RvLURvLUxpc3QvLi9zcmMvdXBkYXRlLmpzIiwid2VicGFjazovL1RvLURvLUxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vVG8tRG8tTGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vVG8tRG8tTGlzdC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL1RvLURvLUxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9Uby1Eby1MaXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vVG8tRG8tTGlzdC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9Uby1Eby1MaXN0Ly4vc3JjL2FkZC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW92ZVNyYyBmcm9tICcuL21vdmUucG5nJztcbmltcG9ydCB0cmFzaFNyYyBmcm9tICcuL3RyYXNoLnBuZyc7XG5pbXBvcnQgY2xlYXJUYXNrIGZyb20gJy4vcmVtb3ZlLmpzJztcbmltcG9ydCB7IHVwZGF0ZVN0YXR1cywgY29uZmlybUNoYW5nZSB9IGZyb20gJy4vdXBkYXRlLmpzJztcblxuY29uc3QgdGFrc0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50by1kby1saXN0Jyk7XG5jb25zdCBkZWxldGVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2xlYXInKTtcblxuY29uc3QgY29uZmlybUNoYW5nZVVJID0gKHRhc2ssIHRhc2tEYXRhLCBlZGl0VGFrc0ltZywgbGlzdCkgPT4ge1xuICBpZiAoZWRpdFRha3NJbWcuc3JjID09PSB0cmFzaFNyYykge1xuICAgIGVkaXRUYWtzSW1nLnNyYyA9IG1vdmVTcmM7XG4gICAgZGVsZXRlQnRuLnRleHRDb250ZW50ID0gJ0NsZWFyIGFsbCBjb21wbGV0ZWQnO1xuICAgIGRlbGV0ZUJ0bi5jbGFzc0xpc3QucmVtb3ZlKCdtYWtlQ2hhbmdlcycpO1xuICAgIGRlbGV0ZUJ0bi5zdHlsZS5mb250U2l6ZSA9ICcxNnB4JztcbiAgICB0YXNrLmNoaWxkcmVuWzBdLmNoaWxkcmVuWzFdLnNldEF0dHJpYnV0ZSgnY29udGVudGVkaXRhYmxlJywgJ2ZhbHNlJyk7XG4gICAgZWRpdFRha3NJbWcucGFyZW50Tm9kZS5zdHlsZS5iYWNrZ3JvdW5kID0gJ2luaGVyaXQnO1xuICAgIGNvbmZpcm1DaGFuZ2UodGFzaywgdGFza0RhdGEsIGxpc3QpO1xuICB9XG59O1xuXG5jb25zdCBlZGl0VGFzayA9ICh0YXNrLCB0YXNrRGF0YSwgZWRpdFRha3NJbWcsIGxpc3QpID0+IHtcbiAgaWYgKGVkaXRUYWtzSW1nLnNyYyA9PT0gbW92ZVNyYykge1xuICAgIGVkaXRUYWtzSW1nLnNyYyA9IHRyYXNoU3JjO1xuICAgIGVkaXRUYWtzSW1nLnBhcmVudE5vZGUuc3R5bGUuYmFja2dyb3VuZCA9ICdyZ2JhKDIxNCwgMjE0LCAxNDgsIDAuNTM0KSc7XG4gICAgdGFzay5jaGlsZHJlblswXS5jaGlsZHJlblsxXS5zZXRBdHRyaWJ1dGUoJ2NvbnRlbnRlZGl0YWJsZScsICd0cnVlJyk7XG4gICAgZGVsZXRlQnRuLnRleHRDb250ZW50ID0gJ0NoaWNrIGhlcmUgdG8gc2F2ZSBjaGFuZ2VzJztcbiAgICBkZWxldGVCdG4uY2xhc3NMaXN0LmFkZCgnbWFrZUNoYW5nZXMnKTtcbiAgICBkZWxldGVCdG4uc3R5bGUuZm9udFNpemUgPSAnMjRweCc7XG4gICAgZGVsZXRlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgY29uZmlybUNoYW5nZVVJKHRhc2ssIHRhc2tEYXRhLCBlZGl0VGFrc0ltZywgbGlzdCk7XG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgY2xlYXJUYXNrKHRhc2tEYXRhLmluZGV4LCBsaXN0KTtcbiAgfVxufTtcblxuY29uc3QgYXBwZW5kVGFzayA9IChpdGVtLCBsaXN0KSA9PiB7XG4gIGNvbnN0IHRhc2tVSSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gIHRhc2tVSS5pbm5lckhUTUwgPSBgPGRpdiBjbGFzcz1cInRhc2tcIj48aW5wdXQgdHlwZT0nY2hlY2tib3gnIGlkID0gdGFzay0ke2l0ZW0uaW5kZXh9IGNsYXNzID0gJ2NoZWNrJyB2YWx1ZT0ke2l0ZW0uaW5kZXh9PjxwIHNpemU9JzEyJz4ke2l0ZW0uZGVzY3JpcHRpb259PC9wPjwvZGl2PmA7XG4gIGNvbnN0IGVkaXRUYWtzSW1nID0gbmV3IEltYWdlKCk7XG4gIGVkaXRUYWtzSW1nLnNyYyA9IG1vdmVTcmM7XG4gIHRhc2tVSS5hcHBlbmRDaGlsZChlZGl0VGFrc0ltZyk7XG4gIGVkaXRUYWtzSW1nLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGVkaXRUYXNrKHRhc2tVSSwgaXRlbSwgZWRpdFRha3NJbWcsIGxpc3QpO1xuICB9KTtcbiAgdGFrc0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0YXNrVUkpO1xuICBjb25zdCBjaGVja0JveCA9IHRhc2tVSS5jaGlsZHJlblswXS5jaGlsZHJlblswXTtcblxuICBpZiAoaXRlbS5jb21wbGV0ZWQpIHtcbiAgICBjaGVja0JveC5jaGVja2VkID0gdHJ1ZTtcbiAgICB0YXNrVUkuY2hpbGRyZW5bMF0uc3R5bGUudGV4dERlY29yYXRpb24gPSAnbGluZS10aHJvdWdoJztcbiAgfVxuXG4gIGNoZWNrQm94LnN0eWxlLmN1cnNvciA9ICdwb2ludGVyJztcbiAgZWRpdFRha3NJbWcuc3R5bGUuY3Vyc29yID0gJ3BvaW50ZXInO1xuICBjaGVja0JveC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICB1cGRhdGVTdGF0dXModGFza1VJLCBpdGVtLCBjaGVja0JveCwgbGlzdCk7XG4gIH0pO1xufTtcblxuZXhwb3J0IHsgYXBwZW5kVGFzaywgZWRpdFRhc2sgfTsiLCJjb25zdCBjbGVhclRhc2sgPSAoaW5kZXgsIGxpc3QpID0+IHtcbiAgaWYgKGxpc3QubGVuZ3RoID09PSAwKSByZXR1cm47XG5cbiAgbGlzdC5zcGxpY2UoaW5kZXggLSAxLCAxKTtcblxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjdGFzay0ke2luZGV4fWApLnBhcmVudE5vZGUucGFyZW50Tm9kZS5yZW1vdmUoKTtcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Rhc2tzJywgSlNPTi5zdHJpbmdpZnkobGlzdCkpO1xuXG4gIGlmIChsaXN0Lmxlbmd0aCA9PT0gMCkgcmV0dXJuO1xuXG4gIGZvciAobGV0IGkgPSBpbmRleCAtIDE7IGkgPCBsaXN0Lmxlbmd0aDsgaSArPSAxKSB7XG4gICAgY29uc3QgbmV4dENoZWNrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI3Rhc2stJHtpICsgMn1gKTtcbiAgICBuZXh0Q2hlY2suaWQgPSBgdGFzay0ke2kgKyAxfWA7XG4gICAgbmV4dENoZWNrLnZhbHVlIC09IDE7XG4gICAgbGlzdFtpXS5pbmRleCAtPSAxO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0YXNrcycsIEpTT04uc3RyaW5naWZ5KGxpc3QpKTtcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgY2xlYXJUYXNrOyIsImNsYXNzIFRhc2sge1xuICBjb25zdHJ1Y3RvcihkZXNjcmlwdGlvbiwgY29tcGxldGVkLCBpbmRleCkge1xuICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICB0aGlzLmNvbXBsZXRlZCA9IGNvbXBsZXRlZDtcbiAgICB0aGlzLmluZGV4ID0gaW5kZXg7XG4gIH1cbn1cbmV4cG9ydCBkZWZhdWx0IFRhc2s7IiwiY29uc3QgdXBkYXRlU3RhdHVzID0gKHRhc2ssIHRhc2tEYXRhLCBjaGVja0JveCwgbGlzdCkgPT4ge1xuICBpZiAoY2hlY2tCb3guY2hlY2tlZCkge1xuICAgIHRhc2suY2hpbGRyZW5bMF0uc3R5bGUudGV4dERlY29yYXRpb24gPSAnbGluZS10aHJvdWdoJztcbiAgICB0YXNrRGF0YS5jb21wbGV0ZWQgPSB0cnVlO1xuICAgIGxpc3QuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgICAgaWYgKGVsZW1lbnQuaW5kZXggPT09IHRhc2tEYXRhLmluZGV4KSB7XG4gICAgICAgIGVsZW1lbnQuY29tcGxldGVkID0gdHJ1ZTtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Rhc2tzJywgSlNPTi5zdHJpbmdpZnkobGlzdCkpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0YXNrcycsIEpTT04uc3RyaW5naWZ5KGxpc3QpKTtcbiAgfSBlbHNlIHtcbiAgICB0YXNrLmNoaWxkcmVuWzBdLnN0eWxlLnRleHREZWNvcmF0aW9uID0gJ25vbmUnO1xuICAgIHRhc2tEYXRhLmNvbXBsZXRlZCA9IGZhbHNlO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0YXNrcycsIEpTT04uc3RyaW5naWZ5KGxpc3QpKTtcbiAgfVxufTtcblxuY29uc3QgY29uZmlybUNoYW5nZSA9ICh0YXNrLCB0YXNrRGF0YSwgbGlzdCkgPT4ge1xuICB0YXNrRGF0YS5kZXNjcmlwdGlvbiA9IHRhc2suY2hpbGRyZW5bMF0uY2hpbGRyZW5bMV0udGV4dENvbnRlbnQ7XG4gIGxpc3QuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgIGlmIChlbGVtZW50LmluZGV4ID09PSB0YXNrRGF0YS5pbmRleCkge1xuICAgICAgZWxlbWVudC5kZXNjcmlwdGlvbiA9IHRhc2suY2hpbGRyZW5bMF0uY2hpbGRyZW5bMV0udGV4dENvbnRlbnQ7XG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndGFza3MnLCBKU09OLnN0cmluZ2lmeShsaXN0KSk7XG4gICAgfVxuICB9KTtcbn07XG5cbmV4cG9ydCB7IHVwZGF0ZVN0YXR1cywgY29uZmlybUNoYW5nZSB9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsImltcG9ydCB7IGFwcGVuZFRhc2sgfSBmcm9tICcuL2FkZFRhc2tVSS5qcyc7XG5pbXBvcnQgVGFzayBmcm9tICcuL3Rhc2tzLmpzJztcblxuY29uc3QgbGlzdCA9IFtdO1xuXG5jb25zdCBhZGRUYXNrID0gKGRlc2NyaXB0aW9uLCBjb21wbGV0ZWQsIGluZGV4KSA9PiB7XG4gIGNvbnN0IHRhc2sgPSBuZXcgVGFzayhkZXNjcmlwdGlvbiwgY29tcGxldGVkLCBpbmRleCk7XG4gIGxpc3QucHVzaCh0YXNrKTtcbiAgYXBwZW5kVGFzayh0YXNrKTtcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Rhc2tzJywgSlNPTi5zdHJpbmdpZnkobGlzdCkpO1xufTtcblxuZXhwb3J0IHtcbiAgYWRkVGFzayxcbiAgbGlzdCxcbiAgVGFzayxcbn07Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9