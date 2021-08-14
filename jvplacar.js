const nomeTimeA = prompt('Digite o nome do time A') // Dar um alert que permite que se digite coisas.
const nomeTimeB = prompt('Digite o nome do time B')

const nomeA_HTML = document.getElementById('nomeTimeA') // função que retorna o HTML --> conceito const pontoA_HTML = documente*pega o html todoa*.getElementById*pega o elemento que tem o id*('esse id')
const nomeB_HTML = document.getElementById('nomeTimeB')
const pontoA_HTML = document.getElementById('pontuacaoA')
const pontoB_HTML = document.getElementById('pontuacaoB')
const setA_HTML = document.getElementById('setA')
const setB_HTML = document.getElementById('setB')

nomeA_HTML.innerText = nomeTimeA //Me dá o texto dentro do html
nomeB_HTML.innerText = nomeTimeB

let pontoA = 0
let pontoB = 0
let setA = 0
let setB = 0
pontoA_HTML.innerText = pontoA // o que é exibido no placar do time A
pontoB_HTML.innerText = pontoB

pontoA_HTML.addEventListener('click', function () {
  //O que estiver aqui dentro será executado, quando o pontoA_HTML for clicado
  // pontoB_HTML.addEventListener*qual html*('click*qual evento você quer escutar*', function ()*função anonima* {
  //quando você dectecta que um usuário clica na tela
  pontoA = pontoA + 1 // outra opção pe pontoA++ => soma 1 ao valor anterior
  pontoA_HTML.innerText = pontoA
  verificarFimDoSet()
})

pontoB_HTML.addEventListener('click', function () {
  pontoB = pontoB + 1
  pontoB_HTML.innerText = pontoB
  verificarFimDoSet()
})

function verificarFimDoSet() {
  if (pontoA >= 21 && pontoA - pontoB >= 2) {
    // nessa função criamos a diferença de dois ponto que o time tem que ter para se ganhar um set **&&** E ** sendo verdadeiro
    // if -> condição, o que faze se a condição for verdadeira
    alert('Time A venceu o set!')
    setA = setA + 1 // soma 1 ao valor anterior do set
    setA_HTML.innerText = setA // o que de fato exibe na tela
    zerarPlacardoSetAnterior() // para rodar e ir para a outra função.
  } //else {  else-> o que fazer se a condição for falsa
  // alert('time A não venceu ainda...')}
  if (pontoB >= 21 && pontoB - pontoA >= 2) {
    alert('Time B venceu o set!')
    setB = setB + 1
    setB_HTML.innerText = setB
    zerarPlacardoSetAnterior()
  }
}
function zerarPlacardoSetAnterior() {
  //Zerar o placar, pra iniciar um novo set
  pontoA = 0
  pontoB = 0
  //atulizar a tela
  pontoA_HTML.innerText = pontoA
  pontoB_HTML.innerText = pontoB
}

//----------------------------------------------------------
//function darOiParaAlguem() { -> Declara a função que é um bloco de código que executa uma tarefa específica ou calcula um valor  -> sintaxe como é escrita --> function nomeDaFunc (params) { o códico á utilizar}
// alert('Oi')}

//darOiParaAlguem() -> invocar a função

//function darOiParaAlguem(nome) {
//Declara a função
//  alert(`Oi, ${nome}`) // parecido o let
//}

//darOiParaAlguem('Thais') // invoca/chama a função  --> dentro do parenteses é o argumento

//DOM - document, guarda o código retorna o html/javascript
