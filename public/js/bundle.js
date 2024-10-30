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

/***/ "./public/js/animation.js":
/*!********************************!*\
  !*** ./public/js/animation.js ***!
  \********************************/
/***/ (() => {

eval("new Typed(\"#typed\", {\r\n    strings: [\r\n        \"Ei, você está pronto para transformar sua empresa?\",\r\n        \"Temos algo incrível para te apresentar!\",\r\n        \"Inovando o futuro da sua empresa!\",\r\n        \"Soluções completas, acessíveis e eficazes\",\r\n        \"Se é isso que você procura...\",\r\n        \"Então, é hora de conhecer a ICODENEW!\",\r\n    ],\r\n    typeSpeed: 50,\r\n    backSpeed: 35,\r\n    backDelay: 2000,\r\n    loop: true,\r\n});\n\n//# sourceURL=webpack:///./public/js/animation.js?");

/***/ }),

/***/ "./public/js/app.js":
/*!**************************!*\
  !*** ./public/js/app.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _sidebar_auth_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sidebar-auth.js */ \"./public/js/sidebar-auth.js\");\n/* harmony import */ var _sidebar_auth_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_sidebar_auth_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _animation_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./animation.js */ \"./public/js/animation.js\");\n/* harmony import */ var _animation_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_animation_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _sidebar_shop_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sidebar-shop.js */ \"./public/js/sidebar-shop.js\");\n/* harmony import */ var _sidebar_shop_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_sidebar_shop_js__WEBPACK_IMPORTED_MODULE_2__);\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./public/js/app.js?");

/***/ }),

/***/ "./public/js/sidebar-auth.js":
/*!***********************************!*\
  !*** ./public/js/sidebar-auth.js ***!
  \***********************************/
/***/ (() => {

eval("document.addEventListener('DOMContentLoaded', (event) => {\r\n\r\n    const toggleSidebar = document.getElementById('toggleSidebar');\r\n    const sidebarDropdown = document.getElementById('sidebarDropdown');\r\n\r\n    function toggleDropdown(dropdown) {\r\n        // Primeiro, removemos ou adicionamos a classe 'hidden' imediatamente\r\n        dropdown.classList.toggle('hidden');\r\n\r\n        // Em seguida, aguardamos um repaint antes de alternar opacidade e transição\r\n        setTimeout(() => {\r\n            dropdown.classList.toggle('opacity-0');\r\n            dropdown.classList.toggle('-translate-y-2');\r\n        }, 10); // Esse atraso pequeno ajuda a garantir o efeito de transição suave\r\n    }\r\n\r\n    toggleSidebar.addEventListener('click', () => {\r\n        toggleDropdown(sidebarDropdown);\r\n\r\n        // Certifique-se de ocultar outros dropdowns\r\n        toggleSidebar.classList.toggle('change');\r\n    });\r\n\r\n    // Fechar dropdowns ao clicar fora deles\r\n    window.addEventListener('click', (e) => {\r\n        if (!toggleSidebar.contains(e.target) && !sidebarDropdown.contains(e.target)) {\r\n            sidebarDropdown.classList.add('hidden', 'opacity-0', '-translate-y-2');\r\n            toggleSidebar.classList.remove('change');\r\n        }\r\n    });\r\n\r\n    // Implementar a funcionalidade de busca\r\n\r\n});\n\n//# sourceURL=webpack:///./public/js/sidebar-auth.js?");

/***/ }),

/***/ "./public/js/sidebar-shop.js":
/*!***********************************!*\
  !*** ./public/js/sidebar-shop.js ***!
  \***********************************/
/***/ (() => {

eval("document.addEventListener('DOMContentLoaded', (event) => {\r\n    const userButton = document.getElementById('userButton');\r\n    const userDropdown = document.getElementById('userDropdown');\r\n    const toggleSidebar = document.getElementById('toggleSidebar');\r\n    const sidebarDropdown = document.getElementById('sidebarDropdown');\r\n    const cartButton = document.getElementById('cartButton');\r\n    const cartDropdown = document.getElementById('cartDropdown');\r\n    const searchInput = document.getElementById('searchInput');\r\n    const searchButton = document.getElementById('searchButton');\r\n    const cartItemCount = document.getElementById('cartItemCount');\r\n\r\n    function toggleDropdown(dropdown) {\r\n        dropdown.classList.toggle('hidden');\r\n        setTimeout(() => {\r\n            dropdown.classList.toggle('opacity-0');\r\n            dropdown.classList.toggle('-translate-y-2');\r\n        }, 10);\r\n    }\r\n\r\n    userButton.addEventListener('click', () => {\r\n        toggleDropdown(userDropdown);\r\n        cartDropdown.classList.add('hidden', 'opacity-0', '-translate-y-2');\r\n        sidebarDropdown.classList.add('hidden', 'opacity-0', '-translate-y-2');\r\n        toggleSidebar.classList.remove('change');\r\n    });\r\n\r\n    toggleSidebar.addEventListener('click', () => {\r\n        toggleDropdown(sidebarDropdown);\r\n        userDropdown.classList.add('hidden', 'opacity-0', '-translate-y-2');\r\n        cartDropdown.classList.add('hidden', 'opacity-0', '-translate-y-2');\r\n        toggleSidebar.classList.toggle('change');\r\n    });\r\n\r\n    cartButton.addEventListener('click', () => {\r\n        toggleDropdown(cartDropdown);\r\n        userDropdown.classList.add('hidden', 'opacity-0', '-translate-y-2');\r\n        sidebarDropdown.classList.add('hidden', 'opacity-0', '-translate-y-2');\r\n        toggleSidebar.classList.remove('change');\r\n    });\r\n\r\n    searchButton.addEventListener('click', () => {\r\n        performSearch();\r\n    });\r\n\r\n    searchInput.addEventListener('keypress', (e) => {\r\n        if (e.key === 'Enter') {\r\n            performSearch();\r\n        }\r\n    });\r\n\r\n    // Close dropdowns when clicking outside\r\n    window.addEventListener('click', (e) => {\r\n        if (!userButton.contains(e.target) && !userDropdown.contains(e.target)) {\r\n            userDropdown.classList.add('hidden', 'opacity-0', '-translate-y-2');\r\n        }\r\n        if (!toggleSidebar.contains(e.target) && !sidebarDropdown.contains(e.target)) {\r\n            sidebarDropdown.classList.add('hidden', 'opacity-0', '-translate-y-2');\r\n            toggleSidebar.classList.remove('change');\r\n        }\r\n        if (!cartButton.contains(e.target) && !cartDropdown.contains(e.target)) {\r\n            cartDropdown.classList.add('hidden', 'opacity-0', '-translate-y-2');\r\n        }\r\n    });\r\n\r\n    function performSearch() {\r\n        const searchTerm = searchInput.value;\r\n        console.log('Searching for:', searchTerm);\r\n        // Implement your search functionality here\r\n    }\r\n});\r\n\r\n// Cart functionality\r\nlet cart = [];\r\n\r\nfunction loadCartFromLocalStorage() {\r\n    const storedCart = localStorage.getItem('cart');\r\n    if (storedCart) {\r\n        cart = JSON.parse(storedCart);\r\n        updateCartDisplay();\r\n    }\r\n}\r\n\r\nfunction addToCart(item) {\r\n    const existingItem = cart.find(cartItem => cartItem.id === item.id);\r\n    if (existingItem) {\r\n        existingItem.quantity += 1;\r\n    } else {\r\n        cart.push({\r\n            ...item,\r\n            quantity: 1\r\n        });\r\n    }\r\n    updateCartDisplay();\r\n    saveCartToLocalStorage();\r\n}\r\n\r\nfunction removeFromCart(itemId) {\r\n    const index = cart.findIndex(item => item.id === itemId);\r\n    if (index !== -1) {\r\n        if (cart[index].quantity > 1) {\r\n            cart[index].quantity -= 1;\r\n        } else {\r\n            cart.splice(index, 1);\r\n        }\r\n        updateCartDisplay();\r\n        saveCartToLocalStorage();\r\n    }\r\n}\r\n\r\nfunction updateCartDisplay() {\r\n    const cartItems = document.getElementById('cartItems');\r\n    const cartTotal = document.getElementById('cartTotal');\r\n    const cartItemCount = document.getElementById('cartItemCount');\r\n\r\n    cartItems.innerHTML = '';\r\n    let total = 0;\r\n    let itemCount = 0;\r\n\r\n    cart.forEach(item => {\r\n        const itemElement = document.createElement('div');\r\n        itemElement.classList.add('flex', 'items-center', 'mb-2', 'pb-2', 'border-b');\r\n        itemElement.innerHTML = `\r\n    <img src=\"${item.image}\" alt=\"${item.name}\" class=\"w-10 h-10 object-cover mr-2\">\r\n    <div class=\"flex-1\">\r\n        <div class=\"font-semibold\">${item.name}</div>\r\n        <div class=\"text-sm text-gray-600\">$${item.price.toFixed(2)} x ${item.quantity}</div>\r\n    </div>\r\n    <div class=\"flex items-center\">\r\n        <div class=\"mr-2\">$${(item.price * item.quantity).toFixed(2)}</div>\r\n        <button onclick=\"removeFromCart(${item.id})\" class=\"remove-item text-gray-500 hover:text-red-500\">\r\n            <i class=\"bi bi-trash\"></i>\r\n        </button>\r\n    </div>\r\n`;\r\n        cartItems.appendChild(itemElement);\r\n        total += item.price * item.quantity;\r\n        itemCount += item.quantity;\r\n    });\r\n\r\n    cartTotal.textContent = '$' + total.toFixed(2);\r\n    cartItemCount.textContent = itemCount;\r\n    cartItemCount.classList.toggle('scale-0', itemCount === 0);\r\n}\r\n\r\nfunction saveCartToLocalStorage() {\r\n    localStorage.setItem('cart', JSON.stringify(cart));\r\n}\r\n// You can call this function to add a product to the cart\r\n// For example: addToCart({id: 1, name: 'Product 1', price: 19.99, image: 'path/to/image.jpg'});\n\n//# sourceURL=webpack:///./public/js/sidebar-shop.js?");

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