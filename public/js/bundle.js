/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./public/js/app.js":
/*!**************************!*\
  !*** ./public/js/app.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _sidebar_auth_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sidebar-auth.js */ \"./public/js/sidebar-auth.js\");\n/* harmony import */ var _sidebar_auth_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_sidebar_auth_js__WEBPACK_IMPORTED_MODULE_0__);\n\n\n//# sourceURL=webpack:///./public/js/app.js?");

/***/ }),

/***/ "./public/js/sidebar-auth.js":
/*!***********************************!*\
  !*** ./public/js/sidebar-auth.js ***!
  \***********************************/
/***/ (() => {

eval("document.addEventListener('DOMContentLoaded', (event) => {\r\n\r\n    const toggleSidebar = document.getElementById('toggleSidebar');\r\n    const sidebarDropdown = document.getElementById('sidebarDropdown');\r\n\r\n    function toggleDropdown(dropdown) {\r\n        // Primeiro, removemos ou adicionamos a classe 'hidden' imediatamente\r\n        dropdown.classList.toggle('hidden');\r\n\r\n        // Em seguida, aguardamos um repaint antes de alternar opacidade e transição\r\n        setTimeout(() => {\r\n            dropdown.classList.toggle('opacity-0');\r\n            dropdown.classList.toggle('-translate-y-2');\r\n        }, 10); // Esse atraso pequeno ajuda a garantir o efeito de transição suave\r\n    }\r\n\r\n    toggleSidebar.addEventListener('click', () => {\r\n        toggleDropdown(sidebarDropdown);\r\n\r\n        // Certifique-se de ocultar outros dropdowns\r\n        toggleSidebar.classList.toggle('change');\r\n    });\r\n\r\n    // Fechar dropdowns ao clicar fora deles\r\n    window.addEventListener('click', (e) => {\r\n        if (!toggleSidebar.contains(e.target) && !sidebarDropdown.contains(e.target)) {\r\n            sidebarDropdown.classList.add('hidden', 'opacity-0', '-translate-y-2');\r\n            toggleSidebar.classList.remove('change');\r\n        }\r\n    });\r\n\r\n    // Implementar a funcionalidade de busca\r\n\r\n});\n\n//# sourceURL=webpack:///./public/js/sidebar-auth.js?");

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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./public/js/app.js");
/******/ 	
/******/ })()
;