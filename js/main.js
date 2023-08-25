const ROBOTRON = document.querySelector('#robotron');

const CONTROLES = document.querySelectorAll('.controle-ajuste');
const ESTATISTICAS = document.querySelectorAll('[data-estatistica]');

const PECAS = {
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
    "nucleos": {
        "forca": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -24
    },
    "pernas": {
        "forca": 27,
        "poder": 21,
        "energia": -32,
        "velocidade": 42
    },
    "foguetes": {
        "forca": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": -2
    }
}

CONTROLES.forEach(controle => {
    controle.addEventListener('click', (evento) => {
        manipulaDados(evento.target.dataset.operador, controle.parentNode);
        atualizaDados(evento.target.dataset.peca, evento.target.dataset.operador);
    })
})

function trocaImagem(cor){
    document.querySelector(".robo").src="img/Robotron 2000 - " + cor + ".png";
 }

function manipulaDados(operacao, controle) {
    const PECA = controle.querySelector('[data-contador]');

    if (operacao === '-') {
        PECA.value = parseInt(PECA.value) - 1;
    } else {
        PECA.value = parseInt(PECA.value) + 1;
    }
}

function atualizaDados(peca, operacao) {
    ESTATISTICAS.forEach((elemento) => {
        if (operacao === '-')
            elemento.textContent = parseInt(elemento.textContent) - PECAS[peca][elemento.dataset.estatistica];
        else
            elemento.textContent = parseInt(elemento.textContent) + PECAS[peca][elemento.dataset.estatistica];
    })
}