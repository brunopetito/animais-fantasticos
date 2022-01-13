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

/***/ "./js/modules/ScrollAnima.js":
/*!***********************************!*\
  !*** ./js/modules/ScrollAnima.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ScrollAnima)\n/* harmony export */ });\n/* harmony import */ var _debounce_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./debounce.js */ \"./js/modules/debounce.js\");\n\nclass ScrollAnima {\n  constructor(sections) {\n    this.sections = document.querySelectorAll(sections)\n    this.windowMetade = window.innerHeight * 0.6\n\n    //ta sendo usado como callback entao tem que fazer o bind\n    //para o this nao referenciar ao window.\n    this.checkDistance = (0,_debounce_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this.checkDistance.bind(this), 50)\n  }\n\n  // Pega a distancia de cada item em relaçao ao topo do site\n  getDistance() {\n    this.distance = [...this.sections].map((section) => {\n      const offset = section.offsetTop\n      return {\n        element: section,\n        offset: Math.floor(offset - this.windowMetade)\n      }\n    })\n  }\n\n  // Verifica a distancia em cada objeto em relação ao scroll do site\n  checkDistance() {\n    this.distance.forEach((item) => {\n      if (window.pageYOffset > item.offset) {\n        item.element.classList.add('ativo')\n      } else if (item.element.classList.contains('ativo')) {\n        item.element.classList.remove('ativo')\n      }\n    })\n  }\n\n  init() {\n    if (this.sections.length) {\n      this.getDistance()\n      this.checkDistance()\n      window.addEventListener('scroll', this.checkDistance)\n    }\n    return this\n  }\n  //Remove o event de scroll\n  stop() {\n    window.removeEventListener('scroll', this.checkDistance)\n  }\n}\n\n\n//# sourceURL=webpack://animais-fantasticos/./js/modules/ScrollAnima.js?");

/***/ }),

/***/ "./js/modules/anima-numeros.js":
/*!*************************************!*\
  !*** ./js/modules/anima-numeros.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ AnimaNumeros)\n/* harmony export */ });\nclass AnimaNumeros {\n  constructor(numeros, observerTarget, observerClass) {\n    this.numeros = document.querySelectorAll(numeros)\n    this.observerTarget = document.querySelector(observerTarget)\n    this.observerClass = observerClass\n\n    //tem que usar o bind pois é usada como callback\n    this.handleMutation = this.handleMutation.bind(this)\n  }\n  // É static pois nao depende de nada de dentro do constructor (nao usa this)\n  // na hora de usar essa funçao devemos usar this.constructor.incrementarNumero\n  // ela é um método do construtor, não do objeto criado\n\n  //Recebe um elemento do dom, com número em seu texto\n  // incrementa a partir de - até o número final\n  static incrementarNumero(numero) {\n    const total = +numero.innerText\n    const incremento = Math.floor(total / 100)\n\n    let start = 0\n    const timer = setInterval(() => {\n      start += incremento\n      numero.innerText = start\n\n      if (start > total) {\n        numero.innerText = total\n        clearInterval(timer)\n      }\n    }, 25 * Math.random())\n  }\n  // ativa incrementar número a cada número selecionado do dom\n  animaNumeros() {\n    this.numeros.forEach((numero) => this.constructor.incrementarNumero(numero))\n  }\n\n  // Função que ocorre quando a mutação ocorrer\n  handleMutation(mutation) {\n    if (mutation[0].target.classList.contains(this.observerClass)) {\n      this.observer.disconnect()\n      this.animaNumeros()\n    }\n  }\n  // Adiciona o MutationObserver para verificar\n  // Quando a classe ativo é adicionada ao elemento target\n  addMutationObserver() {\n    this.observer = new MutationObserver(this.handleMutation)\n    this.observer.observe(this.observerTarget, { attributes: true })\n  }\n\n  init() {\n    if (this.numeros.length && this.observerTarget) {\n      this.addMutationObserver()\n    }\n    return this\n  }\n}\n\n\n//# sourceURL=webpack://animais-fantasticos/./js/modules/anima-numeros.js?");

/***/ }),

/***/ "./js/modules/arccodion.js":
/*!*********************************!*\
  !*** ./js/modules/arccodion.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Accordion)\n/* harmony export */ });\nclass Accordion {\n  constructor(list) {\n    this.accordionList = document.querySelectorAll(list)\n    this.activeClass = 'ativo'\n  }\n\n  toggleAccordion(item) {\n    item.classList.toggle(this.activeClass)\n    item.nextElementSibling.classList.toggle(this.activeClass)\n  }\n\n  //adiciona os eventos ao accordion\n  addAccordionEvent() {\n    this.accordionList.forEach((item) => {\n      item.addEventListener('click', () => {\n        this.toggleAccordion(item)\n      })\n    })\n  }\n  //iniciar função\n  init() {\n    if (this.accordionList.length) {\n      //ativar primeiro item\n      this.toggleAccordion(this.accordionList[0])\n      this.addAccordionEvent()\n    }\n    return this\n  }\n}\n\n\n//# sourceURL=webpack://animais-fantasticos/./js/modules/arccodion.js?");

/***/ }),

/***/ "./js/modules/debounce.js":
/*!********************************!*\
  !*** ./js/modules/debounce.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ debounce)\n/* harmony export */ });\nfunction debounce(callback, delay) {\n  let timer\n  return (...args) => {\n    if (timer) clearTimeout(timer)\n    timer = setTimeout(() => {\n      callback(...args)\n      timer = null\n    }, delay)\n  }\n}\n\n\n//# sourceURL=webpack://animais-fantasticos/./js/modules/debounce.js?");

/***/ }),

/***/ "./js/modules/dropdown-menu.js":
/*!*************************************!*\
  !*** ./js/modules/dropdown-menu.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ DropdownMenu)\n/* harmony export */ });\n/* harmony import */ var _outsideClick_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./outsideClick.js */ \"./js/modules/outsideClick.js\");\n\n\nclass DropdownMenu {\n  constructor(dropdownMenus, events) {\n    this.dropdownMenus = document.querySelectorAll(dropdownMenus)\n    this.activeClass = 'ativo'\n    this.activeDropdownMenu = this.activeDropdownMenu.bind(this)\n    //define touchstart e click como argumentos padrão de events\n    //caso o usuario nao defina\n    if (events === undefined) this.events = ['click', 'touchstart']\n    else this.events = events\n  }\n\n  //Ativa o dropdownmenu e adiciona a funçao que observa o clique fora dele\n  activeDropdownMenu(event) {\n    event.preventDefault()\n\n    const element = event.currentTarget\n\n    element.classList.add(this.activeClass)\n\n    ;(0,_outsideClick_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(element, this.events, () => {\n      element.classList.remove('ativo')\n    })\n  }\n\n  // Adiciona os eventos ao dropdownmenu\n  addDropdownMenusEvent() {\n    this.dropdownMenus.forEach((menu) => {\n      this.events.forEach((userEvent) => {\n        menu.addEventListener(userEvent, this.activeDropdownMenu)\n      })\n    })\n  }\n\n  init() {\n    if (this.dropdownMenus.length) {\n      this.addDropdownMenusEvent()\n    }\n    return this\n  }\n}\n\n\n//# sourceURL=webpack://animais-fantasticos/./js/modules/dropdown-menu.js?");

/***/ }),

/***/ "./js/modules/fetch-animais.js":
/*!*************************************!*\
  !*** ./js/modules/fetch-animais.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ fetchAnimais)\n/* harmony export */ });\n/* harmony import */ var _anima_numeros_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./anima-numeros.js */ \"./js/modules/anima-numeros.js\");\n\n\nfunction fetchAnimais(url, target) {\n  // Cria a div contendo informações\n  // com o total de animais\n  function createAnimal(animal) {\n    const div = document.createElement('div')\n    div.classList.add('numero-animal')\n    div.innerHTML = `<h3>${animal.specie}</h3><span data-numero>${animal.total}</span>`\n    return div\n  }\n\n  // Preenche cada animal no DOM\n  const numerosGrid = document.querySelector(target)\n  function preencherAnimais(animal) {\n    const divAnimal = createAnimal(animal)\n    numerosGrid.appendChild(divAnimal)\n  }\n\n  // Anima os números de cada animal\n  function animaAnimaisNumeros() {\n    const animaNumeros = new _anima_numeros_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('[data-numero]', '.numeros', 'ativo')\n    animaNumeros.init()\n  }\n\n  // Puxa os animais através de um arquivo json\n  // e cria cada animal utilizando createAnimal\n  async function criarAnimais() {\n    try {\n      // Fetch, espera a resposta e transforma em json\n      const animaisResponse = await fetch(url)\n      const animaisJSON = await animaisResponse.json()\n\n      // Após a transformação de json, ativa as funções\n      // para preencher e animar os números\n      animaisJSON.forEach((animal) => preencherAnimais(animal))\n      animaAnimaisNumeros()\n    } catch (erro) {\n      console.log(erro)\n    }\n  }\n\n  return criarAnimais()\n}\n\n\n//# sourceURL=webpack://animais-fantasticos/./js/modules/fetch-animais.js?");

/***/ }),

/***/ "./js/modules/fetch-btc.js":
/*!*********************************!*\
  !*** ./js/modules/fetch-btc.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ fetchBtc)\n/* harmony export */ });\nfunction fetchBtc(url, target) {\n  fetch(url)\n    .then((response) => response.json())\n    .then((bitcoin) => {\n      const btcPreco = document.querySelector(target)\n      btcPreco.innerText = (1000 / bitcoin.BRL.sell).toFixed(4)\n    })\n    .catch((erro) => console.log(Error(erro)))\n}\n\n\n//# sourceURL=webpack://animais-fantasticos/./js/modules/fetch-btc.js?");

/***/ }),

/***/ "./js/modules/funcionamento.js":
/*!*************************************!*\
  !*** ./js/modules/funcionamento.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Funcionamento)\n/* harmony export */ });\nclass Funcionamento {\n  constructor(funcionamento, activeClass) {\n    this.funcionamento = document.querySelector(funcionamento)\n    this.activeClass = activeClass\n  }\n\n  dadosFuncionamento() {\n    this.diasSemana = this.funcionamento.dataset.semana.split(',').map(Number)\n    this.horarioSemana = this.funcionamento.dataset.horario\n      .split(',')\n      .map(Number)\n  }\n\n  dadosAgora() {\n    this.dataAgora = new Date()\n    this.diaAgora = this.dataAgora.getDay()\n    this.horarioAgora = this.dataAgora.getUTCHours() - 3\n  }\n\n  estaAberto() {\n    const semanaAberto = this.diasSemana.indexOf(this.diaAgora) !== -1\n\n    const horarioAberto =\n      this.horarioAgora >= this.horarioSemana[0] &&\n      this.horarioAgora < this.horarioSemana[1]\n\n    return semanaAberto && horarioAberto\n  }\n\n  ativaAberto() {\n    if (this.estaAberto()) {\n      this.funcionamento.classList.add(this.activeClass)\n    } else {\n      this.funcionamento.classList.add('fechado')\n    }\n  }\n\n  init() {\n    if (this.funcionamento) {\n      this.dadosFuncionamento()\n      this.dadosAgora()\n      this.ativaAberto()\n    }\n    return this\n  }\n}\n\n\n//# sourceURL=webpack://animais-fantasticos/./js/modules/funcionamento.js?");

/***/ }),

/***/ "./js/modules/menu-mobile.js":
/*!***********************************!*\
  !*** ./js/modules/menu-mobile.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ MenuMobile)\n/* harmony export */ });\n/* harmony import */ var _outsideClick_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./outsideClick.js */ \"./js/modules/outsideClick.js\");\n\n\nclass MenuMobile {\n  constructor(btn, list, events) {\n    this.menuButton = document.querySelector(btn)\n    this.menuList = document.querySelector(list)\n    this.activeClass = 'active'\n\n    if (events === undefined) this.events = ['click', 'touchstart']\n    else this.events = events\n\n    this.openMenu = this.openMenu.bind(this)\n  }\n\n  openMenu(event) {\n    event.preventDefault()\n    this.menuList.classList.add(this.activeClass)\n    this.menuButton.classList.add(this.activeClass)\n    ;(0,_outsideClick_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this.menuList, this.events, () => {\n      this.menuList.classList.remove(this.activeClass)\n      this.menuButton.classList.remove(this.activeClass)\n    })\n  }\n\n  addMenuMobileEvents() {\n    this.events.forEach((evento) =>\n      this.menuButton.addEventListener(evento, this.openMenu)\n    )\n  }\n  init() {\n    if (this.menuButton && this.menuList) {\n      this.addMenuMobileEvents()\n    }\n    return this\n  }\n}\n\n\n//# sourceURL=webpack://animais-fantasticos/./js/modules/menu-mobile.js?");

/***/ }),

/***/ "./js/modules/modal.js":
/*!*****************************!*\
  !*** ./js/modules/modal.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initModal)\n/* harmony export */ });\nclass initModal {\n  constructor(botaoAbrir, botaoFechar, containerModal) {\n    this.botaoAbrir = document.querySelector(botaoAbrir)\n    this.botaoFechar = document.querySelector(botaoFechar)\n    this.containerModal = document.querySelector(containerModal)\n\n    //bind this ao callback para fazer referencia\n    //ao objeto da classe\n    this.eventToggleModal = this.eventToggleModal.bind(this)\n    this.cliqueForaModal = this.cliqueForaModal.bind(this)\n  }\n  //abre ou fecha o modal\n  toggleModal() {\n    this.containerModal.classList.toggle('ativo')\n  }\n  //adiciona o evento de toggle ao modal\n  eventToggleModal(event) {\n    event.preventDefault()\n    this.toggleModal()\n  }\n  // fecha o modal ao clicar do lado de fora\n  cliqueForaModal(event) {\n    if (event.target === this.containerModal) this.toggleModal()\n  }\n\n  //adiciona os eventos aos elementos do modal\n  addModalEvents() {\n    this.botaoAbrir.addEventListener('click', this.eventToggleModal)\n    this.botaoFechar.addEventListener('click', this.eventToggleModal)\n    this.containerModal.addEventListener('click', this.cliqueForaModal)\n  }\n\n  init() {\n    if (this.botaoAbrir && this.botaoFechar && this.containerModal) {\n      this.addModalEvents()\n    }\n    return this\n  }\n}\n\n\n//# sourceURL=webpack://animais-fantasticos/./js/modules/modal.js?");

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

/***/ "./js/modules/slide.js":
/*!*****************************!*\
  !*** ./js/modules/slide.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Slide\": () => (/* binding */ Slide),\n/* harmony export */   \"default\": () => (/* binding */ SlideNav)\n/* harmony export */ });\n/* harmony import */ var _debounce_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./debounce.js */ \"./js/modules/debounce.js\");\n\n\nclass Slide {\n  constructor(slide, wrapper) {\n    this.slide = document.querySelector(slide)\n    this.wrapper = document.querySelector(wrapper)\n    this.dist = { finalPosition: 0, startX: 0, movement: 0 }\n    this.activeClass = 'active'\n    this.changeEvent = new Event('changeEvent')\n  }\n\n  transition(active) {\n    this.slide.style.transition = active ? 'transform .3s' : ''\n  }\n\n  moveSlide(distX) {\n    this.dist.movePosition = distX\n    this.slide.style.transform = `translate3d(${distX}px, 0, 0)`\n  }\n\n  updatePosition(clientX) {\n    this.dist.movement = (this.dist.startX - clientX) * 1.6\n    return this.dist.finalPosition - this.dist.movement\n  }\n\n  onStart(event) {\n    let movetype\n    if (event.type === 'mousedown') {\n      event.preventDefault()\n      this.dist.startX = event.clientX\n      movetype = 'mousemove'\n    } else {\n      this.dist.startX = event.changedTouches[0].clientX\n      movetype = 'touchmove'\n    }\n    this.wrapper.addEventListener(movetype, this.onMove)\n    this.transition(false)\n  }\n\n  onMove(event) {\n    const pointerPosition =\n      event.type === 'mousemove'\n        ? event.clientX\n        : event.changedTouches[0].clientX\n    const finalPosition = this.updatePosition(pointerPosition)\n    this.moveSlide(finalPosition)\n  }\n\n  onEnd(event) {\n    const movetype = event.type === 'mouseup' ? 'mousemove' : 'touchmove'\n    this.wrapper.removeEventListener(movetype, this.onMove)\n    this.dist.finalPosition = this.dist.movePosition\n    this.transition(true)\n    this.changeSlideOnEnd()\n  }\n\n  changeSlideOnEnd() {\n    if (this.dist.movement > 120 && this.index.next !== undefined) {\n      this.activeNextSlide()\n    } else if (this.dist.movement < -120 && this.index.prev !== undefined) {\n      this.activePrevSlide()\n    } else {\n      this.changeSlide(this.index.active)\n    }\n  }\n\n  addSlideEvents() {\n    this.wrapper.addEventListener('mousedown', this.onStart)\n    this.wrapper.addEventListener('touchstart', this.onStart)\n    this.wrapper.addEventListener('mouseup', this.onEnd)\n    this.wrapper.addEventListener('touchend', this.onEnd)\n  }\n\n  // Slides config\n\n  slidePosition(slide) {\n    const margin = (this.wrapper.offsetWidth - slide.offsetWidth) / 2\n    return -(slide.offsetLeft - margin)\n  }\n\n  slidesConfig() {\n    this.slideArray = [...this.slide.children].map((element) => {\n      const position = this.slidePosition(element)\n      return { position, element }\n    })\n  }\n\n  slidesIndexNav(index) {\n    const last = this.slideArray.length - 1\n    this.index = {\n      prev: index ? index - 1 : undefined,\n      active: index,\n      next: index === last ? undefined : index + 1\n    }\n  }\n\n  changeSlide(index) {\n    const activeSlide = this.slideArray[index]\n    this.moveSlide(activeSlide.position)\n    this.slidesIndexNav(index)\n    this.dist.finalPosition = activeSlide.position\n    this.changeActiveClass()\n    this.wrapper.dispatchEvent(this.changeEvent)\n  }\n\n  changeActiveClass() {\n    this.slideArray.forEach((item) =>\n      item.element.classList.remove(this.activeClass)\n    )\n    this.slideArray[this.index.active].element.classList.add(this.activeClass)\n  }\n\n  activePrevSlide() {\n    if (this.index.prev !== undefined) this.changeSlide(this.index.prev)\n  }\n\n  activeNextSlide() {\n    if (this.index.next !== undefined) this.changeSlide(this.index.next)\n  }\n\n  onResize() {\n    setTimeout(() => {\n      this.slidesConfig()\n      this.changeSlide(this.index.active)\n    }, 1000)\n  }\n\n  addResizeEvent() {\n    window.addEventListener('resize', this.onResize)\n  }\n\n  bindEvents() {\n    this.onStart = this.onStart.bind(this)\n    this.onMove = this.onMove.bind(this)\n    this.onEnd = this.onEnd.bind(this)\n\n    this.onResize = (0,_debounce_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this.onResize.bind(this), 200)\n\n    this.activePrevSlide = this.activePrevSlide.bind(this)\n    this.activeNextSlide = this.activeNextSlide.bind(this)\n  }\n\n  init() {\n    this.bindEvents()\n    this.transition(true)\n    this.addSlideEvents()\n    this.slidesConfig()\n    this.addResizeEvent()\n    this.changeSlide(2)\n    return this\n  }\n}\n\nclass SlideNav extends Slide {\n  constructor(slide, wrapper) {\n    super(slide, wrapper)\n    this.bindControlEvents()\n  }\n  addArrow(prev, next) {\n    this.prevElement = document.querySelector(prev)\n    this.nextElement = document.querySelector(next)\n    this.addArrowEvent()\n  }\n\n  addArrowEvent() {\n    this.prevElement.addEventListener('click', this.activePrevSlide)\n    this.nextElement.addEventListener('click', this.activeNextSlide)\n  }\n\n  createControl() {\n    const control = document.createElement('ul')\n    control.dataset.control = 'slide'\n\n    this.slideArray.forEach((item, index) => {\n      control.innerHTML += `<li><a href=\"#slide${index + 1}\">${\n        index + 1\n      }</a></li>`\n    })\n    this.wrapper.appendChild(control)\n    return control\n  }\n\n  eventControl(item, index) {\n    item.addEventListener('click', (event) => {\n      event.preventDefault()\n      this.changeSlide(index)\n    })\n    this.wrapper.addEventListener('changeEvent', this.activeControlItem)\n  }\n\n  activeControlItem() {\n    this.controlArray.forEach((item) => item.classList.remove(this.activeClass))\n    this.controlArray[this.index.active].classList.add(this.activeClass)\n  }\n\n  addControl(customControl) {\n    this.control =\n      document.querySelector('.custom-controls') || this.createControl()\n    this.controlArray = [...this.control.children]\n    this.controlArray.forEach(this.eventControl)\n    this.activeControlItem()\n  }\n  bindControlEvents() {\n    this.eventControl = this.eventControl.bind(this)\n    this.activeControlItem = this.activeControlItem.bind(this)\n  }\n}\n\n\n//# sourceURL=webpack://animais-fantasticos/./js/modules/slide.js?");

/***/ }),

/***/ "./js/modules/tab-nav.js":
/*!*******************************!*\
  !*** ./js/modules/tab-nav.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initTabNav)\n/* harmony export */ });\nclass initTabNav {\n  constructor(menu, content) {\n    this.tabMenu = document.querySelectorAll(menu)\n    this.tabContent = document.querySelectorAll(content)\n    this.activeClass = 'ativo'\n  }\n  //ativa a tab de acordo com o index da mesma\n  activeTab(index) {\n    this.tabContent.forEach((section) => {\n      section.classList.remove('ativo')\n    })\n    const direcao = this.tabContent[index].dataset.anime\n    this.tabContent[index].classList.add('ativo', direcao)\n  }\n\n  //adiciona os eventos as tags\n  addTabNavEvent() {\n    this.tabMenu.forEach((itemMenu, index) => {\n      itemMenu.addEventListener('click', () => {\n        this.activeTab(index)\n      })\n    })\n  }\n\n  init() {\n    if (this.tabMenu.length && this.tabContent.length) {\n      //ativar primeiro item\n      this.activeTab(0)\n      this.addTabNavEvent()\n    }\n    return this\n  }\n}\n\n\n//# sourceURL=webpack://animais-fantasticos/./js/modules/tab-nav.js?");

/***/ }),

/***/ "./js/modules/tooltip.js":
/*!*******************************!*\
  !*** ./js/modules/tooltip.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Tooltip)\n/* harmony export */ });\nclass Tooltip {\n  constructor(tooltips) {\n    this.tooltips = document.querySelectorAll(tooltips)\n\n    //bind do ovjetto da classe aos callbacks\n    this.onMouseLeave = this.onMouseLeave.bind(this)\n    this.onMouseMove = this.onMouseMove.bind(this)\n    this.onMouseOver = this.onMouseOver.bind(this)\n  }\n\n  // move a tooltip de base com seus estilos\n  // de acordo com a posição do mouse\n  onMouseMove(event) {\n    this.tooltipBox.style.top = `${event.pageY + 20}px`\n    if (event.pageX + 240 > window.innerWidth) {\n      this.tooltipBox.style.left = `${event.pageX - 190}px`\n    } else {\n      this.tooltipBox.style.left = `${event.pageX + 20}px`\n    }\n  }\n  // Remove a tooltip e os eventos de mousemove e mouselevae\n  onMouseLeave({ currentTarget }) {\n    this.tooltipBox.remove()\n    currentTarget.removeEventListener('mouseleave', this.onMouseLeave)\n    currentTarget.removeEventListener('mousemove', this.onMouseMove)\n  }\n\n  // Cria a tooltip box e coloca no body\n\n  criarToolTipBox(element) {\n    const tooltipBox = document.createElement('div')\n    tooltipBox.classList.add('tooltip')\n    const text = element.getAttribute('aria-label')\n    tooltipBox.innerText = text\n    document.body.appendChild(tooltipBox)\n    this.tooltipBox = tooltipBox\n  }\n\n  // Cria a tooltip e adiciona os eventos\n  onMouseOver({ currentTarget }) {\n    //cria a tooltipbox e coloca em uma propriedade\n    this.criarToolTipBox(currentTarget)\n    currentTarget.addEventListener('mousemove', this.onMouseMove)\n    currentTarget.addEventListener('mouseleave', this.onMouseLeave)\n  }\n\n  // Adiciona os eventos de mouseover a cada tooltip\n  addTooltipsEvent() {\n    this.tooltips.forEach((item) => {\n      item.addEventListener('mouseover', this.onMouseOver)\n    })\n  }\n\n  init() {\n    if (this.tooltips.length) {\n      this.addTooltipsEvent()\n    }\n    return this\n  }\n}\n\n\n//# sourceURL=webpack://animais-fantasticos/./js/modules/tooltip.js?");

/***/ }),

/***/ "./js/script.js":
/*!**********************!*\
  !*** ./js/script.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_scroll_smooth_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/scroll-smooth.js */ \"./js/modules/scroll-smooth.js\");\n/* harmony import */ var _modules_ScrollAnima_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/ScrollAnima.js */ \"./js/modules/ScrollAnima.js\");\n/* harmony import */ var _modules_arccodion_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/arccodion.js */ \"./js/modules/arccodion.js\");\n/* harmony import */ var _modules_tab_nav_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/tab-nav.js */ \"./js/modules/tab-nav.js\");\n/* harmony import */ var _modules_modal_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/modal.js */ \"./js/modules/modal.js\");\n/* harmony import */ var _modules_tooltip_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/tooltip.js */ \"./js/modules/tooltip.js\");\n/* harmony import */ var _modules_dropdown_menu_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/dropdown-menu.js */ \"./js/modules/dropdown-menu.js\");\n/* harmony import */ var _modules_menu_mobile_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/menu-mobile.js */ \"./js/modules/menu-mobile.js\");\n/* harmony import */ var _modules_funcionamento_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/funcionamento.js */ \"./js/modules/funcionamento.js\");\n/* harmony import */ var _modules_fetch_animais_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modules/fetch-animais.js */ \"./js/modules/fetch-animais.js\");\n/* harmony import */ var _modules_slide_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./modules/slide.js */ \"./js/modules/slide.js\");\n/* harmony import */ var _modules_fetch_btc_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./modules/fetch-btc.js */ \"./js/modules/fetch-btc.js\");\n\n\n\n\n\n\n\n\n\n\n\n\n\nconst scrollSmooth = new _modules_scroll_smooth_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('[data-menu=\"suave\"] a[href^=\"#\"]')\nscrollSmooth.init()\n\nconst accordion = new _modules_arccodion_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"]('[data-anime =\"accordion\"] dt')\naccordion.init()\n\nconst tabNav = new _modules_tab_nav_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"](\n  '[data-tab=\"menu\"] li',\n  '[data-tab = \"content\"] section'\n)\ntabNav.init()\n\nconst modal = new _modules_modal_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"](\n  '[data-modal= \"abrir\"]',\n  '[data-modal= \"fechar\"]',\n  '[data-modal= \"container\"]'\n)\nmodal.init()\n\nconst tooltip = new _modules_tooltip_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"]('[data-tooltip]')\ntooltip.init()\n\nconst scrollAnima = new _modules_ScrollAnima_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]('[data-anime =\"scroll\"]')\nscrollAnima.init()\n\nconst dropdownMenu = new _modules_dropdown_menu_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"]('[data-dropdown]')\ndropdownMenu.init()\n\nconst menuMobile = new _modules_menu_mobile_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"]('[data-menu =\"button\"', '[data-menu =\"list\"')\nmenuMobile.init()\n\nconst funcionamento = new _modules_funcionamento_js__WEBPACK_IMPORTED_MODULE_8__[\"default\"]('[data-semana]', 'active')\nfuncionamento.init()\n\n;(0,_modules_fetch_animais_js__WEBPACK_IMPORTED_MODULE_9__[\"default\"])('./animaisapi.json', '.numeros-grid')\n;(0,_modules_fetch_btc_js__WEBPACK_IMPORTED_MODULE_11__[\"default\"])('https://blockchain.info/ticker', '.btc-preco')\n\nconst slide = new _modules_slide_js__WEBPACK_IMPORTED_MODULE_10__[\"default\"]('.slide', '.slide-wrapper')\n\nslide.init()\nslide.addControl('.custom-controls')\n\n\n//# sourceURL=webpack://animais-fantasticos/./js/script.js?");

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