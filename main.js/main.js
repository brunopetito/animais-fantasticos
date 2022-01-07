/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/modules/anima-numeros.js":
/*!*************************************!*\
  !*** ./js/modules/anima-numeros.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initAnimaNumeros)\n/* harmony export */ });\nfunction initAnimaNumeros() {\n  function animaNumeros() {\n    const numeros = document.querySelectorAll('[data-numero]')\n\n    numeros.forEach((numero) => {\n      const total = +numero.innerText\n      const incremento = Math.floor(total / 100)\n\n      let start = 0\n      const timer = setInterval(() => {\n        start += incremento\n        numero.innerText = start\n\n        if (start > total) {\n          numero.innerText = total\n          clearInterval(timer)\n        }\n      }, 25 * Math.random())\n    })\n  }\n  let observer\n  function handleMutation(mutation) {\n    if (mutation[0].target.classList.contains('ativo')) {\n      observer.disconnect()\n      animaNumeros()\n    }\n  }\n\n  const observeTarget = document.querySelector('.numeros')\n  observer = new MutationObserver(handleMutation)\n\n  observer.observe(observeTarget, { attributes: true })\n}\n\n\n//# sourceURL=webpack://animais-fantasticos/./js/modules/anima-numeros.js?");

/***/ }),

/***/ "./js/modules/animation-scroll.js":
/*!****************************************!*\
  !*** ./js/modules/animation-scroll.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initAnimationScroll)\n/* harmony export */ });\nfunction initAnimationScroll() {\r\n  const sections = document.querySelectorAll('[data-anime =\"scroll\"]')\r\n  if (sections.length) {\r\n    const windowMetade = window.innerHeight * 0.6\r\n\r\n    function animaScroll() {\r\n      sections.forEach((section) => {\r\n        const sectionTop = section.getBoundingClientRect().top\r\n        const isSectionVisible = sectionTop - windowMetade < 0\r\n        if (isSectionVisible) {\r\n          section.classList.add('ativo')\r\n        } else if (section.classList.contains('ativo')) {\r\n          // section.classList.remove('ativo')\r\n          //ta comentado pq eu nao gostei de apagar quando o scroll sobe\r\n        }\r\n      })\r\n    }\r\n\r\n    animaScroll()\r\n    window.addEventListener('scroll', animaScroll)\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://animais-fantasticos/./js/modules/animation-scroll.js?");

/***/ }),

/***/ "./js/modules/arccodion.js":
/*!*********************************!*\
  !*** ./js/modules/arccodion.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Accordion)\n/* harmony export */ });\nclass Accordion {\n  constructor(list) {\n    this.accordionList = document.querySelectorAll(list)\n    this.activeClass = 'ativo'\n  }\n\n  toggleAccordion(item) {\n    item.classList.toggle(this.activeClass)\n    item.nextElementSibling.classList.toggle(this.activeClass)\n  }\n\n  //adiciona os eventos ao accordion\n  addAccordionEvent() {\n    this.accordionList.forEach((item) => {\n      item.addEventListener('click', () => {\n        this.toggleAccordion(item)\n      })\n    })\n  }\n  //iniciar função\n  init() {\n    if (this.accordionList.length) {\n      //ativar primeiro item\n      this.toggleAccordion(this.accordionList[0])\n      this.addAccordionEvent()\n    }\n  }\n}\n\n\n//# sourceURL=webpack://animais-fantasticos/./js/modules/arccodion.js?");

/***/ }),

/***/ "./js/modules/dropdown-menu.js":
/*!*************************************!*\
  !*** ./js/modules/dropdown-menu.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initDropdownMenu)\n/* harmony export */ });\n/* harmony import */ var _outsideClick_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./outsideClick.js */ \"./js/modules/outsideClick.js\");\n\n\nfunction initDropdownMenu() {\n  const dropdownMenus = document.querySelectorAll('[data-dropdown]')\n\n  function handleClick(event) {\n    event.preventDefault()\n    this.classList.add('ativo')\n\n    ;(0,_outsideClick_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, ['click', 'touchstart'], () => {\n      this.classList.remove('ativo')\n    })\n  }\n\n  dropdownMenus.forEach((menu) => {\n    ;['click', 'touchstart'].forEach((userEvent) => {\n      menu.addEventListener(userEvent, handleClick)\n    })\n  })\n}\n\n\n//# sourceURL=webpack://animais-fantasticos/./js/modules/dropdown-menu.js?");

/***/ }),

/***/ "./js/modules/fetch-animais.js":
/*!*************************************!*\
  !*** ./js/modules/fetch-animais.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initFecthAnimais)\n/* harmony export */ });\n/* harmony import */ var _anima_numeros_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./anima-numeros.js */ \"./js/modules/anima-numeros.js\");\n\n\nfunction initFecthAnimais() {}\n\nfunction createAnimal(animal) {\n  const div = document.createElement('div')\n  div.classList.add('numero-animal')\n\n  div.innerHTML = `<h3>${animal.specie}</h3><span data-numero>${animal.total}</span>`\n  return div\n}\n\nasync function fetchAnimais(url) {\n  try {\n    const animaisResponse = await fetch(url)\n    const animaisJSON = await animaisResponse.json()\n    const numerosGrid = document.querySelector('.numeros-grid')\n    animaisJSON.forEach((animal) => {\n      const divAnimal = createAnimal(animal)\n      numerosGrid.appendChild(divAnimal)\n    })\n    ;(0,_anima_numeros_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])()\n  } catch (erro) {\n    // eslint-disable-next-line no-console\n    console.log(erro)\n  }\n}\n\nfetchAnimais('./animaisApi.json')\n\n\n//# sourceURL=webpack://animais-fantasticos/./js/modules/fetch-animais.js?");

/***/ }),

/***/ "./js/modules/fetch-btc.js":
/*!*********************************!*\
  !*** ./js/modules/fetch-btc.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initFetchBtc)\n/* harmony export */ });\nfunction initFetchBtc() {}\n\nasync function fetchBtc(url) {\n  try {\n    const btcResponse = await fetch(url)\n    const btcJSON = await btcResponse.json()\n\n    const btcPreco = document.querySelector('.btc-preco')\n    btcPreco.innerText = (10000 / btcJSON.BRL.sell).toFixed(4)\n  } catch (erro) {\n    console.log(erro)\n  }\n}\n\nfetchBtc('https://blockchain.info/ticker')\n\n\n//# sourceURL=webpack://animais-fantasticos/./js/modules/fetch-btc.js?");

/***/ }),

/***/ "./js/modules/funcionamento.js":
/*!*************************************!*\
  !*** ./js/modules/funcionamento.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initFuncionamento)\n/* harmony export */ });\nfunction initFuncionamento() {\n  const funcionamento = document.querySelector('[data-semana]')\n\n  const diasSemana = funcionamento.dataset.semana.split(',').map(Number)\n  const horarioSemana = funcionamento.dataset.horario.split(',').map(Number)\n\n  const dataAgora = new Date()\n\n  const diaAgora = dataAgora.getDay()\n  const horarioAgora = dataAgora.getHours()\n\n  const semanaAberto = diasSemana.indexOf(diaAgora) !== -1\n\n  const horarioAberto =\n    horarioAgora >= horarioSemana[0] && horarioAgora < horarioSemana[1]\n\n  if (semanaAberto && horarioAberto) {\n    funcionamento.classList.add('aberto')\n  } else {\n    funcionamento.classList.add('fechado')\n  }\n}\n\n\n//# sourceURL=webpack://animais-fantasticos/./js/modules/funcionamento.js?");

/***/ }),

/***/ "./js/modules/menu-mobile.js":
/*!***********************************!*\
  !*** ./js/modules/menu-mobile.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initMenuMobile)\n/* harmony export */ });\n/* harmony import */ var _outsideClick_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./outsideClick.js */ \"./js/modules/outsideClick.js\");\n\n\nfunction initMenuMobile() {\n  const menuButton = document.querySelector('[data-menu =\"button\"')\n  const menuList = document.querySelector('[data-menu =\"list\"')\n  const eventos = ['click', 'touchstart']\n\n  function openMenu() {\n    menuList.classList.add('active')\n    menuButton.classList.add('active')\n    ;(0,_outsideClick_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(menuList, eventos, () => {\n      menuList.classList.remove('active')\n      menuButton.classList.remove('active')\n    })\n  }\n\n  if (menuButton) {\n    eventos.forEach((evento) => menuButton.addEventListener(evento, openMenu))\n  }\n}\n\n\n//# sourceURL=webpack://animais-fantasticos/./js/modules/menu-mobile.js?");

/***/ }),

/***/ "./js/modules/modal.js":
/*!*****************************!*\
  !*** ./js/modules/modal.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initModal)\n/* harmony export */ });\nfunction initModal() {\n  const botaoAbrir = document.querySelector('[data-modal= \"abrir\"]')\n  const botaoFechar = document.querySelector('[data-modal= \"fechar\"]')\n  const containerModal = document.querySelector('[data-modal= \"container\"]')\n\n  function toggleModal(event) {\n    event.preventDefault()\n    containerModal.classList.toggle('ativo')\n  }\n\n  function cliqueForaModal(event) {\n    if (event.target === this) toggleModal(event)\n  }\n\n  if (botaoAbrir && botaoFechar && containerModal) {\n    botaoAbrir.addEventListener('click', toggleModal)\n    botaoFechar.addEventListener('click', toggleModal)\n    containerModal.addEventListener('click', cliqueForaModal)\n  }\n}\n\n\n//# sourceURL=webpack://animais-fantasticos/./js/modules/modal.js?");

/***/ }),

/***/ "./js/modules/outsideClick.js":
/*!************************************!*\
  !*** ./js/modules/outsideClick.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ outsideClick)\n/* harmony export */ });\nfunction outsideClick(element, events, callback) {\n  const html = document.documentElement\n  const outside = 'data-outside'\n  function handleOutsideClick(event) {\n    if (!element.contains(event.target)) {\n      element.removeAttribute(outside, ' ')\n\n      events.forEach((userEvent) => {\n        html.removeEventListener(userEvent, handleOutsideClick)\n      })\n\n      callback()\n    }\n  }\n\n  if (!element.hasAttribute(outside)) {\n    events.forEach((userEvent) => {\n      setTimeout(() => html.addEventListener(userEvent, handleOutsideClick))\n    })\n\n    element.setAttribute(outside, ' ')\n  }\n}\n\n\n//# sourceURL=webpack://animais-fantasticos/./js/modules/outsideClick.js?");

/***/ }),

/***/ "./js/modules/scroll-smooth.js":
/*!*************************************!*\
  !*** ./js/modules/scroll-smooth.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ScrollSmooth)\n/* harmony export */ });\nclass ScrollSmooth {\n  constructor(links, options) {\n    this.linksInternos = document.querySelectorAll(links)\n    if (options === undefined) {\n      this.options = { behavior: 'smooth', block: 'start' }\n    } else {\n      this.options = options\n    }\n    this.scrollToSection = this.scrollToSection.bind(this)\n    //bind está fazendo sempre ser referido no this.scrollSection o this 'nativo'\n  }\n\n  scrollToSection(event) {\n    event.preventDefault()\n    const href = event.currentTarget.getAttribute('href')\n    const section = document.querySelector(href)\n    section.scrollIntoView(this.options)\n  }\n\n  addLinkEvent() {\n    this.linksInternos.forEach((link) => {\n      link.addEventListener('click', this.scrollToSection)\n      //o bind está \"negando o this do link aqui!\"\n    })\n  }\n\n  init() {\n    if (this.linksInternos.length) {\n      this.addLinkEvent()\n    }\n\n    return this\n  }\n}\n\n\n//# sourceURL=webpack://animais-fantasticos/./js/modules/scroll-smooth.js?");

/***/ }),

/***/ "./js/modules/tab-nav.js":
/*!*******************************!*\
  !*** ./js/modules/tab-nav.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initTabNav)\n/* harmony export */ });\nclass initTabNav {\n  constructor(menu, content) {\n    this.tabMenu = document.querySelectorAll(menu)\n    this.tabContent = document.querySelectorAll(content)\n    this.activeClass = 'ativo'\n  }\n  //ativa a tab de acordo com o index da mesma\n  activeTab(index) {\n    this.tabContent.forEach((section) => {\n      section.classList.remove('ativo')\n    })\n    const direcao = this.tabContent[index].dataset.anime\n    this.tabContent[index].classList.add('ativo', direcao)\n  }\n\n  //adiciona os eventos as tags\n  addTabNavEvent() {\n    this.tabMenu.forEach((itemMenu, index) => {\n      itemMenu.addEventListener('click', () => {\n        this.activeTab(index)\n      })\n    })\n  }\n\n  init() {\n    if (this.tabMenu.length && this.tabContent.length) {\n      //ativar primeiro item\n      this.activeTab(0)\n      this.addTabNavEvent()\n    }\n  }\n}\n\n\n//# sourceURL=webpack://animais-fantasticos/./js/modules/tab-nav.js?");

/***/ }),

/***/ "./js/modules/tooltip.js":
/*!*******************************!*\
  !*** ./js/modules/tooltip.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initTooltip)\n/* harmony export */ });\nfunction initTooltip() {\n  const tooltips = document.querySelectorAll('[data-tooltip]')\n  const onMouseMove = {\n    handleEvent(event) {\n      this.tooltipBox.style.top = `${event.pageY + 20}px`\n      this.tooltipBox.style.left = `${event.pageX + 20}px`\n    }\n  }\n  const onMouseLeave = {\n    handleEvent() {\n      this.tooltipBox.remove()\n      this.element.removeEventListener('mouseleave', onMouseLeave)\n      this.element.removeEventListener('mousemove', onMouseMove)\n    }\n  }\n\n  function criarTollTipBox(element) {\n    const tooltipBox = document.createElement('div')\n    tooltipBox.classList.add('tooltip')\n    const text = element.getAttribute('aria-label')\n    tooltipBox.innerText = text\n    document.body.appendChild(tooltipBox)\n    return tooltipBox\n  }\n  function onMouseOver() {\n    const tooltipBox = criarTollTipBox(this)\n\n    onMouseMove.tooltipBox = tooltipBox\n    this.addEventListener('mousemove', onMouseMove)\n\n    onMouseLeave.tooltipBox = tooltipBox\n    onMouseLeave.element = this\n    this.addEventListener('mouseleave', onMouseLeave)\n  }\n\n  tooltips.forEach((item) => {\n    item.addEventListener('mouseover', onMouseOver)\n  })\n}\n\n\n//# sourceURL=webpack://animais-fantasticos/./js/modules/tooltip.js?");

/***/ }),

/***/ "./js/script.js":
/*!**********************!*\
  !*** ./js/script.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_scroll_smooth_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/scroll-smooth.js */ \"./js/modules/scroll-smooth.js\");\n/* harmony import */ var _modules_animation_scroll_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/animation-scroll.js */ \"./js/modules/animation-scroll.js\");\n/* harmony import */ var _modules_arccodion_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/arccodion.js */ \"./js/modules/arccodion.js\");\n/* harmony import */ var _modules_tab_nav_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/tab-nav.js */ \"./js/modules/tab-nav.js\");\n/* harmony import */ var _modules_modal_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/modal.js */ \"./js/modules/modal.js\");\n/* harmony import */ var _modules_tooltip_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/tooltip.js */ \"./js/modules/tooltip.js\");\n/* harmony import */ var _modules_dropdown_menu_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/dropdown-menu.js */ \"./js/modules/dropdown-menu.js\");\n/* harmony import */ var _modules_menu_mobile_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/menu-mobile.js */ \"./js/modules/menu-mobile.js\");\n/* harmony import */ var _modules_funcionamento_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/funcionamento.js */ \"./js/modules/funcionamento.js\");\n/* harmony import */ var _modules_fetch_animais_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modules/fetch-animais.js */ \"./js/modules/fetch-animais.js\");\n/* harmony import */ var _modules_fetch_btc_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./modules/fetch-btc.js */ \"./js/modules/fetch-btc.js\");\n\n\n\n\n\n\n\n\n\n\n\n\nconst scrollSmooth = new _modules_scroll_smooth_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('[data-menu=\"suave\"] a[href^=\"#\"]')\nscrollSmooth.init()\n\nconst accordion = new _modules_arccodion_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"]('[data-anime =\"accordion\"] dt')\naccordion.init()\n\nconst tabNav = new _modules_tab_nav_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"](\n  '[data-tab=\"menu\"] li',\n  '[data-tab = \"content\"] section'\n)\ntabNav.init()\n\n;(0,_modules_animation_scroll_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])()\n;(0,_modules_modal_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])()\n;(0,_modules_tooltip_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"])()\n;(0,_modules_dropdown_menu_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"])()\n;(0,_modules_menu_mobile_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"])()\n;(0,_modules_funcionamento_js__WEBPACK_IMPORTED_MODULE_8__[\"default\"])()\n;(0,_modules_fetch_animais_js__WEBPACK_IMPORTED_MODULE_9__[\"default\"])()\n;(0,_modules_fetch_btc_js__WEBPACK_IMPORTED_MODULE_10__[\"default\"])()\n\n\n//# sourceURL=webpack://animais-fantasticos/./js/script.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./js/script.js");
/******/ 	
/******/ })()
;