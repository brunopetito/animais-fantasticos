export default class ScrollAnima {
  constructor(sections) {
    this.sections = document.querySelectorAll(sections)
    this.windowMetade = window.innerHeight * 0.6

    //ta sendo usado como callback entao tem que fazer o bind
    //para o this nao referenciar ao window.
    this.animaScroll = this.animaScroll.bind(this)
  }

  animaScroll() {
    this.sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top
      const isSectionVisible = sectionTop - this.windowMetade < 0
      if (isSectionVisible) {
        section.classList.add('ativo')
      } else if (section.classList.contains('ativo')) {
        // section.classList.remove('ativo')
        //ta comentado pq eu nao gostei de apagar quando o scroll sobe
      }
    })
  }

  init() {
    this.animaScroll()
    window.addEventListener('scroll', this.animaScroll)
  }
}
