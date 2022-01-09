import ScrollSmooth from './modules/scroll-smooth.js'
import ScrollAnima from './modules/ScrollAnima.js'
import Accordion from './modules/arccodion.js'
import TabNav from './modules/tab-nav.js'
import Modal from './modules/modal.js'
import Tooltip from './modules/tooltip.js'
import DropdownMenu from './modules/dropdown-menu.js'
import MenuMobile from './modules/menu-mobile.js'
import Funcionamento from './modules/funcionamento.js'
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

const scrollAnima = new ScrollAnima('[data-anime ="scroll"]')
scrollAnima.init()

const dropdownMenu = new DropdownMenu('[data-dropdown]')
dropdownMenu.init()

const menuMobile = new MenuMobile('[data-menu ="button"', '[data-menu ="list"')
menuMobile.init()

const funcionamento = new Funcionamento('[data-semana]', 'active')
funcionamento.init()

fetchAnimais('./animaisapi.json', '.numeros-grid')
fetchBtc('https://blockchain.info/ticker', '.btc-preco')
