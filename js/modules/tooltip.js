export default class Tooltip {
  constructor(tooltips) {
    this.tooltips = document.querySelectorAll(tooltips)

    //bind do ovjetto da classe aos callbacks
    this.onMouseLeave = this.onMouseLeave.bind(this)
    this.onMouseMove = this.onMouseMove.bind(this)
    this.onMouseOver = this.onMouseOver.bind(this)
  }

  // move a tooltip de base com seus estilos
  // de acordo com a posição do mouse
  onMouseMove(event) {
    this.tooltipBox.style.top = `${event.pageY + 20}px`
    if (event.pageX + 240 > window.innerWidth) {
      this.tooltipBox.style.left = `${event.pageX - 190}px`
    } else {
      this.tooltipBox.style.left = `${event.pageX + 20}px`
    }
  }
  // Remove a tooltip e os eventos de mousemove e mouselevae
  onMouseLeave({ currentTarget }) {
    this.tooltipBox.remove()
    currentTarget.removeEventListener('mouseleave', this.onMouseLeave)
    currentTarget.removeEventListener('mousemove', this.onMouseMove)
  }

  // Cria a tooltip box e coloca no body

  criarToolTipBox(element) {
    const tooltipBox = document.createElement('div')
    tooltipBox.classList.add('tooltip')
    const text = element.getAttribute('aria-label')
    tooltipBox.innerText = text
    document.body.appendChild(tooltipBox)
    this.tooltipBox = tooltipBox
  }

  // Cria a tooltip e adiciona os eventos
  onMouseOver({ currentTarget }) {
    //cria a tooltipbox e coloca em uma propriedade
    this.criarToolTipBox(currentTarget)
    currentTarget.addEventListener('mousemove', this.onMouseMove)
    currentTarget.addEventListener('mouseleave', this.onMouseLeave)
  }

  // Adiciona os eventos de mouseover a cada tooltip
  addTooltipsEvent() {
    this.tooltips.forEach((item) => {
      item.addEventListener('mouseover', this.onMouseOver)
    })
  }

  init() {
    if (this.tooltips.length) {
      this.addTooltipsEvent()
    }
    return this
  }
}
