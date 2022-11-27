const controle = document.querySelectorAll("[data-controle]")                       // para não corrermos o risco de o front end mexer nas classes ou conteudos textuais, usamos os data atributts
const estatisticas = document.querySelectorAll("[data-estatistica]")                // valor da força / poder / ernergia / velocidade
const pecas = {
    "bracos": {
        "forca": 29,
        "poder": 35,
        "energia": -21,
        "velocidade": -5
    },

    "blindagem": {
        "forca": 41,
        "poder": 20,
        "energia": 0,
        "velocidade": -20
    },
    "nucleos":{
        "forca": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -24
    },
    "pernas":{
        "forca": 27,
        "poder": 21,
        "energia": -32,
        "velocidade": 42
    },
    "foguetes":{
        "forca": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": -2
    }
}

controle.forEach( (elemento) => {
    elemento.addEventListener("click", (evento) => {                                // toda função de click tem um parametro do evento, de tudo que rolou alí
        manipulaDados(evento.target.dataset.controle, evento.target.parentNode)     // target -> onde aconteceu o evento // deixa de ser valor textual de onde aconteceu o evento e passa a ser o valor do datta attributs, desprendendo do html // e o pai do elemento que foi clicado
        atualizaEstatisticas(evento.target.dataset.peca)                            // que é o dataatributts que colocamos nos botões para especificar a peça
    })
})

function manipulaDados(operacao, controle) {                                        // controle é o pai do elemento que foi clicado
    const peca = controle.querySelector("[data-contador]")                          // como a gente chamou essa constante dentro da função, só irá pegar o data atributs do elemento que ocorreu o evento de click

    if(operacao == "-") {
        peca.value = parseInt(peca.value) - 1                                       // transforma a array em um número inteiro
    } else {
        peca.value = parseInt(peca.value) + 1
    }
}

function atualizaEstatisticas(peca) {

    console.log(peca)                                                               // quem o usuario clicou
    console.log(pecas[peca])                                                        // estou indo na nossa array pecas e procurando o objeto peca, ex: pecas.bracos

    estatisticas.forEach( (elemento) => {                                           // estamos percorrendo valor da força / poder / ernergia / velocidade     

        console.log(elemento)                                                       // elemento é justamente qual dos valores está sendo percorrido no momento -> <p class="estatistica-numero" data-estatistica="forca">797</p>
        console.log(elemento.dataset.estatistica)                                   // é o nome do dataatributs que está sendo percorrido -> forca
        console.log(elemento.textContent)                                           // é o valor textual presente no local que está sendo percorrido -> 768

        elemento.textContent = parseInt(elemento.textContent) + pecas[peca][elemento.dataset.estatistica] // 768 = 768 + pecas[bracos][forca] -> tirando da array
    })
}

function trocaImagem(cor){
    document.querySelector(".robo").src="./img/Robotron 2000 - " + cor + ".png";
 }