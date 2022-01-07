export default function initAccordion() {
  const accordionList = document.querySelectorAll(
    '[data-anime ="accordion"] dt'
  )
  const activeClass = 'ativo'

  function activeAccordion() {
    this.classList.toggle(activeClass)
    this.nextElementSibling.classList.toggle(activeClass)
  }

  if (accordionList.length) {
    accordionList[0].classList.add(activeClass)
    accordionList[0].nextElementSibling.classList.add(activeClass)

    accordionList.forEach((item) => {
      // eslint-disable-next-line no-use-before-define
      item.addEventListener('click', activeAccordion)
    })
  }
}
