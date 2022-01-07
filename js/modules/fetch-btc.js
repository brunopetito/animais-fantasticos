export default function initFetchBtc() {}

async function fetchBtc(url) {
  try {
    const btcResponse = await fetch(url)
    const btcJSON = await btcResponse.json()

    const btcPreco = document.querySelector('.btc-preco')
    btcPreco.innerText = (10000 / btcJSON.BRL.sell).toFixed(4)
  } catch (erro) {
    console.log(erro)
  }
}

fetchBtc('https://blockchain.info/ticker')
