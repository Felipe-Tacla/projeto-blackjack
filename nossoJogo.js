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

console.log(`Boas vindas ao jogo de BlackJack!`)

const novoJogo = confirm(`Quer iniciar uma nova rodada?`)

function blackJack21 (){
  if(novoJogo){
    let cartaUser1 = comprarCarta()
    let cartaUser2 = comprarCarta()
    let computadorCarta1 = comprarCarta()
    let computadorCarta2 = comprarCarta()

    let scoreUser = cartaUser1.valor + cartaUser2.valor
    let scoreComputador = computadorCarta1.valor + computadorCarta2.valor

    console.log(`Usuário - cartas: ${cartaUser1.texto} ${cartaUser2.texto} - pontuação ${scoreUser}`)
    console.log(`Computador - cartas: ${computadorCarta1.texto} ${computadorCarta2.texto} - pontuação ${scoreComputador}`)

   if (scoreUser > scoreComputador){
    console.log(`O usuário ganhou!`)
  } else if (scoreComputador > scoreUser){
    console.log(`O computador ganhou!`)
  } else if (scoreUser === scoreComputador){
    console.log(`Empate!`)
  }
  
  
  
} else {
    console.log('O jogo acabou, caso queira jogar novamente recarregue a página!');
  } 
}
blackJack21()