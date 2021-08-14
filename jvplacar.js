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
let arraydePontosA = []
let arraydePontosB = []
let totaldePontosA = 0
let totaldePontosB = 0

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
  if (pontoA >= 25 && pontoA - pontoB >= 2) {
    // nessa função criamos a diferença de dois ponto que o time tem que ter para se ganhar um set **&&** E ** sendo verdadeiro
    // if -> condição, o que faze se a condição for verdadeira
    alert(`${nomeTimeA} venceu o set!`)
    setA = setA + 1 // soma 1 ao valor anterior do set
    setA_HTML.innerText = setA // o que de fato exibe na tela
    salvarEZerarPlacarDoSetAnterior() // para rodar e ir para a outra função.
    verificarFimdoJogo()
  } //else {  else-> o que fazer se a condição for falsa
  // alert('time A não venceu ainda...')}
  if (pontoB >= 25 && pontoB - pontoA >= 2) {
    alert(`${nomeTimeB} venceu o set!`)
    setB = setB + 1
    setB_HTML.innerText = setB
    salvarEZerarPlacarDoSetAnterior()
    verificarFimdoJogo()
  }
}
function verificarFimdoJogo() {
  if (setA == 3) {
    //timeA ganhou o jogo
    for (let item of arraydePontosA) {
      totaldePontosA = totaldePontosA + item
    }
    alert(`${nomeTimeA} venceu o jogo fazendo ${totaldePontosA} pontos!`)
  }
  if (setB == 3) {
    for (let item of arraydePontosB) {
      totaldePontosB = totaldePontosB + item
    }
    alert(`${nomeTimeB} venceu o jogo fazendo ${totaldePontosB} pontos!`)
  }
}

function salvarEZerarPlacarDoSetAnterior() {
  //salvar a pontuação do set nos arrays => verificar no inspecionar/console e arraydePontosA
  arraydePontosA.push(pontoA)
  arraydePontosB.push(pontoB)
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

//Arrays é um conjunto de dados ordenados guardados numa mesma variável (também conhecido como vetores ou listas); conjunto de dados guardados em ordem, usamos um indice, o indice ou onde tudo começa é no 0, exempo se eu tenho um Array de tamanho 4 o índice/index(que é a posição de cada item na lista) começa no 0 e termina no 3(no exempo a baixo). Podemos ter array com números, nomes, booleano

//let arryDeNotas = [10, 8, 9,5];
//arrayDenNotas[0] => sabe qual o índice está na posição 0
//arrayDeNotas.length => sabe qual o tamanho da Array/lista
//arrayDeNotas.push(8) => função específica do Array que adiciona um elemento do ao fim da lista.
//arrayDeNotas[1] = 7 => substituir um número da lista.
//arrayDeNotas.pop() => tirar um elemento do final, não informa nada pois ele sempre tira o último
//arrayDeNotas.unshift(5) => adiciona um item ao início da lista
//arrayDeNotas.shift() => remove um item do início da lista,

//For Loop=> utilizado para repetir determinado código, um deles é o for (let item of arrayDeNotas) {
// console.log(item); } => repete o mesmo codigo 10/08/09/05
