export default class ScrollSmooth {
  constructor(links, options) {
    this.linksInternos = document.querySelectorAll(links)
    if (options === undefined) {
      this.options = { behavior: 'smooth', block: 'start' }
    } else {
      this.options = options
    }
    this.scrollToSection = this.scrollToSection.bind(this)
    //bind está fazendo sempre ser referido no this.scrollSection o this 'nativo'
  }

  scrollToSection(event) {
    event.preventDefault()
    const href = event.currentTarget.getAttribute('href')
    const section = document.querySelector(href)
    section.scrollIntoView(this.options)
  }

  addLinkEvent() {
    this.linksInternos.forEach((link) => {
      link.addEventListener('click', this.scrollToSection)
      //o bind está "negando o this do link aqui!"
    })
  }

  init() {
    if (this.linksInternos.length) {
      this.addLinkEvent()
    }

    return this
  }
}
