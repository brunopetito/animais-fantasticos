import outsideClick from './outsideClick.js'

export default class DropdownMenu {
  constructor(dropdownMenus, events) {
    this.dropdownMenus = document.querySelectorAll(dropdownMenus)
    this.activeClass = 'ativo'
    this.activeDropdownMenu = this.activeDropdownMenu.bind(this)
    //define touchstart e click como argumentos padrão de events
    //caso o usuario nao defina
    if (events === undefined) this.events = ['click', 'touchstart']
    else this.events = events
  }

  //Ativa o dropdownmenu e adiciona a funçao que observa o clique fora dele
  activeDropdownMenu(event) {
    event.preventDefault()
    const element = event.currentTarget

    element.classList.add(this.activeClass)

    outsideClick(element, this.events, () => {
      element.classList.remove('ativo')
    })
  }

  // Adiciona os eventos ao dropdownmenu
  addDropdownMenusEvent() {
    this.dropdownMenus.forEach((menu) => {
      this.events.forEach((userEvent) => {
        menu.addEventListener(userEvent, this.activeDropdownMenu)
      })
    })
  }

  init() {
    if (this.dropdownMenus.length) {
      this.addDropdownMenusEvent()
    }
    return this
  }
}
