export default function initScrollSmooth() {
  const linksInternos = document.querySelectorAll(
    '[data-menu="suave"] a[href^="#"]'
  )

  // eslint-disable-next-line no-unused-vars
  function scrollToSection(event) {
    event.preventDefault()
    const href = event.currentTarget.getAttribute('href')
    const section = document.querySelector(href)
    section.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })

    linksInternos.forEach((link) => {
      link.addEventListener('click', scrollToSection)
    })
  }
}
