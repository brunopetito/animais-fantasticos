import ScrollSmooth from './modules/scroll-smooth.js'
import initAnimationScroll from './modules/animation-scroll.js'
import Accordion from './modules/arccodion.js'
import TabNav from './modules/tab-nav.js'
import Modal from './modules/modal.js'
import Tooltip from './modules/tooltip.js'
import initDropdownMenu from './modules/dropdown-menu.js'
import initMenuMobile from './modules/menu-mobile.js'
import initFuncionamento from './modules/funcionamento.js'
import fetchAnimais from './modules/fetch-animais.js'
import fetchBtc from './modules/fetch-btc.js'

const scrollSmooth = new ScrollSmooth('[data-menu="suave"] a[href^="#"]')
scrollSmooth.init()

const accordion = new Accordion('[data-anime ="accordion"] dt')
accordion.init()

const tabNav = new TabNav(
  '[data-tab="menu"] li',
  '[data-tab = "content"] section'
)
tabNav.init()

const modal = new Modal(
  '[data-modal= "abrir"]',
  '[data-modal= "fechar"]',
  '[data-modal= "container"]'
)
modal.init()

const tooltip = new Tooltip('[data-tooltip]')
tooltip.init()

initAnimationScroll()

initDropdownMenu()
initMenuMobile()
initFuncionamento()

fetchAnimais('../../animaisapi.json', '.numeros-grid')
fetchBtc('https://blockchain.info/ticker', '.btc-preco')
