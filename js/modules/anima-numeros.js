export default class AnimaNumeros {
  constructor(numeros, observerTarget, observerClass) {
    this.numeros = document.querySelectorAll(numeros)
    this.observerTarget = document.querySelector(observerTarget)
    this.observerClass = observerClass

    //tem que usar o bind pois é usada como callback
    this.handleMutation = this.handleMutation.bind(this)
  }
  // É static pois nao depende de nada de dentro do constructor (nao usa this)
  // na hora de usar essa funçao devemos usar this.constructor.incrementarNumero
  // ela é um método do construtor, não do objeto criado

  //Recebe um elemento do dom, com número em seu texto
  // incrementa a partir de - até o número final
  static incrementarNumero(numero) {
    const total = +numero.innerText
    const incremento = Math.floor(total / 100)

    let start = 0
    const timer = setInterval(() => {
      start += incremento
      numero.innerText = start

      if (start > total) {
        numero.innerText = total
        clearInterval(timer)
      }
    }, 25 * Math.random())
  }
  // ativa incrementar número a cada número selecionado do dom
  animaNumeros() {
    this.numeros.forEach((numero) => this.constructor.incrementarNumero(numero))
  }

  // Função que ocorre quando a mutação ocorrer
  handleMutation(mutation) {
    if (mutation[0].target.classList.contains(this.observerClass)) {
      this.observer.disconnect()
      this.animaNumeros()
    }
  }
  // Adiciona o MutationObserver para verificar
  // Quando a classe ativo é adicionada ao elemento target
  addMutationObserver() {
    this.observer = new MutationObserver(this.handleMutation)
    this.observer.observe(this.observerTarget, { attributes: true })
  }

  init() {
    if (this.numeros.length && this.observerTarget) {
      this.addMutationObserver()
    }
    return this
  }
}
