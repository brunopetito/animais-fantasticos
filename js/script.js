import ScrollSmooth from './modules/scroll-smooth.js'
import initAnimationScroll from './modules/animation-scroll.js'
import Accordion from './modules/arccodion.js'
import TabNav from './modules/tab-nav.js'
import initModal from './modules/modal.js'
import initTooltip from './modules/tooltip.js'
import initDropdownMenu from './modules/dropdown-menu.js'
import initMenuMobile from './modules/menu-mobile.js'
import initFuncionamento from './modules/funcionamento.js'
import initFecthAnimais from './modules/fetch-animais.js'
import initFetchBtc from './modules/fetch-btc.js'

const scrollSmooth = new ScrollSmooth('[data-menu="suave"] a[href^="#"]')
scrollSmooth.init()

const accordion = new Accordion('[data-anime ="accordion"] dt')
accordion.init()

const tabNav = new TabNav(
  '[data-tab="menu"] li',
  '[data-tab = "content"] section'
)
tabNav.init()

initAnimationScroll()
initModal()
initTooltip()
initDropdownMenu()
initMenuMobile()
initFuncionamento()
initFecthAnimais()
initFetchBtc()
