/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate"]("main",{

/***/ "./modules/modalWindow.js":
/*!********************************!*\
  !*** ./modules/modalWindow.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\r\n\r\nclass ModalWindow {\r\n   constructor({\r\n       overlay,\r\n       modal,\r\n       closeBtn,\r\n       openBtn,\r\n       animation = {\r\n            overlayOpen:'animate__fadeIn',\r\n            overlayClose:'animate__fadeOut',\r\n            typeOpen: 'animate__fadeIn',\r\n            typeClose: 'animate__fadeOut'\r\n        },\r\n   }){\r\n    this.overlay = document.querySelector(overlay),\r\n    this.modal = document.querySelector(modal),\r\n    this.closeBtn = document.querySelector(closeBtn),\r\n    this.openBtn = document.querySelector(openBtn),\r\n    this.animation = animation;\r\n   };\r\n\r\n   //----Подключаем анимацию-----\r\n   linkedAnimate(){\r\n       const link = document.createElement('link');\r\n       link.setAttribute('rel', 'stylesheet');\r\n       link.setAttribute('href', 'https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css');\r\n       document.head.append(link);\r\n   };\r\n\r\n   modalEvent(){\r\n       this.openBtn.addEventListener('click', this.openModal.bind(this));\r\n       this.closeBtn.addEventListener('click', this.closeModal.bind(this));\r\n       this.overlay.addEventListener('click', this.closeModal.bind(this));\r\n   };\r\n\r\n   //--------Открытие модального окна--------\r\n   openModal(event){\r\n       event.preventDefault();\r\n       \r\n       this.overlay.style.display = 'block'\r\n       this.overlay.classList.remove(this.animation.overlayClose);\r\n       this.overlay.classList.add('animate__animated', this.animation.overlayOpen);\r\n       setTimeout(this.animateModal.bind(this), 1000);\r\n   };\r\n\r\n   animateModal(){\r\n        this.modal.style.display = 'block';\r\n        this.modal.classList.remove(this.animation.typeClose);\r\n        this.modal.classList.add('animate__animated', this.animation.typeOpen);\r\n   };\r\n\r\n   //--------Закрытие модального окна-------\r\n   closeModal(){\r\n        setTimeout(this.closeOverlay.bind(this), 500);\r\n       \r\n       this.modal.classList.remove(this.animation.typeOpen);\r\n       this.modal.classList.add(this.animation.typeClose);\r\n       setTimeout(this.setMod.bind(this), 300);\r\n   }\r\n\r\n   closeOverlay(){\r\n       this.overlay.classList.remove(this.animation.overlayOpen);\r\n       this.overlay.classList.add(this.animation.overlayClose);\r\n       setTimeout(this.setOver.bind(this), 300);\r\n   }\r\n\r\n   setOver(){\r\n        this.overlay.style.display = 'none';\r\n        this.clearStyle();\r\n   }\r\n\r\n   setMod(){\r\n        this.modal.style.display = 'none';\r\n   }\r\n\r\n   //----чистим классы и стили после использования----\r\n   clearStyle(){\r\n       this.modal.classList.remove('animate__animated', this.animation.typeOpen, this.animation.typeClose);\r\n       this.overlay.classList.remove('animate__animated', this.animation.overlayOpen, this.animation.overlayClose);\r\n       this.modal.removeAttribute('style');\r\n       this.overlay.removeAttribute('style');\r\n   }\r\n\r\n   init(){\r\n       this.linkedAnimate();\r\n       this.modalEvent();\r\n       console.log(this)\r\n   };\r\n} \r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ModalWindow);\r\n\n\n//# sourceURL=webpack:///./modules/modalWindow.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ 	"use strict";
/******/ 
/******/ 	/* webpack/runtime/getFullHash */
/******/ 	(() => {
/******/ 		__webpack_require__.h = () => ("6b267599c1c01435c147")
/******/ 	})();
/******/ 	
/******/ }
);