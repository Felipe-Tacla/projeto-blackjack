/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

function desafio() {
   let fraseRodada = confirm(`Bem-vindo ao jogo de BlackJack!
   Quer iniciar uma nova rodada?`)
   let jogador = []
   let computador = [] 

   if(fraseRodada){
      let sorteiaCartas = true
      while (sorteiaCartas) {
         jogador.push(comprarCarta())
         jogador.push(comprarCarta())
         computador.push(comprarCarta())
         computador.push(comprarCarta())

         if((jogador[0].valor === 11 && jogador[1].valor === 11) || computador[0].valor === 11 
         && computador[1].valor === 11) {
            jogador = []
            computador = []
         } else {
            sorteiaCartas = false
         }
      }
      let textoJogador = `Suas cartas são: `
      let textoComputador = `A carta revelada do computador é: `
      
      let valorJogador = 0
      let valorComputador = 0

      for(let i = 0; i < jogador.length; i++) {
         textoJogador += jogador[i].texto + ''
         valorJogador += jogador[i].valor
         console.log(valorJogador)
      }
      for(let i = 0; i < computador.length; i++) {
         textoComputador += computador[i].texto + ''
         valorComputador += computador[i].valor
         console.log(textoComputador)
      }
      let comprarCartasDeNovo = true
      while(comprarCartasDeNovo) {
         if(valorJogador > 21){
            break
         }
         let revelarCarta = confirm (`${textoJogador} A carta revelada do computador é: ${computador[0].texto} Deseja comprar mais uma carta?`)
         

         if(revelarCarta) {
            let novaCarta = comprarCarta()
            jogador.push(novaCarta)
            valorJogador += novaCarta.valor
            textoJogador = `${novaCarta.texto}`
         } else {
            comprarCartasDeNovo = false
         }
      }
      
      while(valorComputador < valorJogador && valorJogador < 21) {
         let novaCarta = comprarCarta()
         computador.push(novaCarta)
         valorComputador += novaCarta.valor
         textoComputador += `${novaCarta.texto}`
      }

      let resultado = ``
      if(valorJogador > 21) {
         resultado = 'O computador ganhou!'
      } else if (valorComputador > 21) {
         resultado = 'O jogador ganhou!'
      } else if (valorComputador > valorJogador) {
         resultado = 'O computador ganhou!'
      } else if (valorJogador > valorComputador) {
         resultado = 'O jogador ganhou!'
      } else {
         resultado = 'Empate!'
      }

      alert (`${textoJogador} - Pontuação: ${valorJogador}
${textoComputador} - Pontuação: ${valorComputador} 
${resultado}`)

   } else {
      alert(`O jogo acabou!`)
   }
}
desafio()