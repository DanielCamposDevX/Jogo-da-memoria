let cont = 0;
let time = 0;
setInterval(timer, 1000);
function timer() {
    time++;
    let tempo = document.querySelector('.time');
    tempo.innerHTML = time;
}
principal();


function principal() {
    const cardtypes = [];
    cardtypes[0] = '<button data-test="card" onclick="turncard(this)" class="card v"> <div class="l1 face"><img data-test="face-up-image" src="./imagens/front 12.png"></div> <div class="l2 back-face face"><img data-test="face-down-image" class=img src="./imagens/bobrossparrot.gif"></div> </button>';
    cardtypes[1] = '<button data-test="card" onclick="turncard(this)" class="card v"> <div class="l1 face"><img data-test="face-up-image" src="./imagens/front 12.png"></div> <div class="l2 back-face face"><img data-test="face-down-image" class=img src="./imagens/bobrossparrot.gif"></div> </button>';
    cardtypes[2] = '<button data-test="card" onclick="turncard(this)" class="card v"> <div class="l1 face"><img data-test="face-up-image" src="./imagens/front 12.png"></div> <div class="l2 back-face face"><img data-test="face-down-image" class=img src="./imagens/explodyparrot.gif"></div> </button>';
    cardtypes[3] = '<button data-test="card" onclick="turncard(this)" class="card v"> <div class="l1 face"><img data-test="face-up-image" src="./imagens/front 12.png"></div> <div class="l2 back-face face"><img data-test="face-down-image" class=img src="./imagens/explodyparrot.gif"></div> </button>';
    cardtypes[4] = '<button data-test="card" onclick="turncard(this)" class="card v"> <div class="l1 face"><img data-test="face-up-image" src="./imagens/front 12.png"></div> <div class="l2 back-face face"><img data-test="face-down-image" class=img src="./imagens/fiestaparrot.gif"></div> </button>';
    cardtypes[5] = '<button data-test="card" onclick="turncard(this)" class="card v"> <div class="l1 face"><img data-test="face-up-image" src="./imagens/front 12.png"></div> <div class="l2 back-face face"><img data-test="face-down-image" class=img src="./imagens/fiestaparrot.gif"></div> </button>';
    cardtypes[6] = '<button data-test="card" onclick="turncard(this)" class="card v"> <div class="l1 face"><img data-test="face-up-image" src="./imagens/front 12.png"></div> <div class="l2 back-face face"><img data-test="face-down-image" class=img src="./imagens/metalparrot.gif"></div> </button>';
    cardtypes[7] = '<button data-test="card" onclick="turncard(this)" class="card v"> <div class="l1 face"><img data-test="face-up-image" src="./imagens/front 12.png"></div> <div class="l2 back-face face"><img data-test="face-down-image" class=img src="./imagens/metalparrot.gif"></div> </button>';
    cardtypes[8] = '<button data-test="card" onclick="turncard(this)" class="card v"> <div class="l1 face"><img data-test="face-up-image" src="./imagens/front 12.png"></div> <div class="l2 back-face face"><img data-test="face-down-image" class=img src="./imagens/revertitparrot.gif"></div> </button>';
    cardtypes[9] = '<button data-test="card" onclick="turncard(this)" class="card v"> <div class="l1 face"><img data-test="face-up-image" src="./imagens/front 12.png"></div> <div class="l2 back-face face"><img data-test="face-down-image" class=img src="./imagens/revertitparrot.gif"></div> </button>';
    cardtypes[10] = '<button data-test="card" onclick="turncard(this)" class="card v"> <div class="l1 face"><img data-test="face-up-image" src="./imagens/front 12.png"></div> <div class="l2 back-face face"><img data-test="face-down-image" class=img src="./imagens/unicornparrot.gif"></div> </button>';
    cardtypes[11] = '<button data-test="card" onclick="turncard(this)" class="card v"> <div class="l1 face"><img data-test="face-up-image" src="./imagens/front 12.png"></div> <div class="l2 back-face face"><img data-test="face-down-image" class=img src="./imagens/unicornparrot.gif"></div> </button>';
    cardtypes[12] = '<button data-test="card" onclick="turncard(this)" class="card v"> <div class="l1 face"><img data-test="face-up-image" src="./imagens/front 12.png"></div> <div class="l2 back-face face"><img data-test="face-down-image" class=img src="./imagens/tripletsparrot.gif"></div> </button>';
    cardtypes[13] = '<button data-test="card" onclick="turncard(this)" class="card v"> <div class="l1 face"><img data-test="face-up-image" src="./imagens/front 12.png"></div> <div class="l2 back-face face"><img data-test="face-down-image" class=img src="./imagens/tripletsparrot.gif"></div> </button>';
    const cardo = document.querySelector('.cards');
    const carts = [];
    let quant= prompt('Quantas Cartas?');
    let resto = quant % 2;
    let acertos = 0;
    let i = 0;
    if (resto == 0 && quant > 2 && quant < 15) {
        while (i < quant) {
            carts[i] = cardtypes[i];
            i++;
        }
        carts.sort(comparador);
        i = 0;
        while (i < quant) {
            cardo.innerHTML = cardo.innerHTML + carts[i];
            i++;
        }
    }
    else { principal() }
}

function turncard(carta) {
    const carta1 = carta.querySelector(".l1");
    carta1.classList.add("front");
    const carta2 = carta.querySelector(".l2");
    carta2.classList.add("back");
    cont++;
    setTimeout(cardcomp, 1000, carta);
}

function cardcomp(carta) {
    cardsel = document.querySelector(".selected");
    console.log(cardsel);
    if (cardsel != null) {
        if (cardsel.innerHTML == carta.innerHTML && cardsel != carta) {
            carta.disabled = true;
            cardsel.disabled = true;
            cardsel.classList.remove("selected");
            carta.classList.remove("selected");
            cardsel.classList.remove("v");
            carta.classList.remove("v");

}
        else {
            const carta1 = carta.querySelector(".l1");
            carta1.classList.remove("front");
            const carta2 = carta.querySelector(".l2");
            carta2.classList.remove("back");
            const cardsele = document.querySelector(".selected");
            const cardsel1 = cardsele.querySelector(".l1");
            cardsel1.classList.remove("front");
            const cardsel2 = cardsele.querySelector(".l2");
            cardsel2.classList.remove("back");
            cardsel.classList.remove("selected");
            carta.classList.remove("selected");
        }
    }
    else { carta.classList.add("selected"); }
    const fim = document.querySelector(".v")
    console.log(fim)
    if (fim == null) {
        const tempo = document.querySelector('.time');
        alert('Você ganhou em ' + cont + ' jogadas! A duração do jogo foi de ' + tempo.innerHTML + ' segundos!')
        let resposta = prompt("Gostaria de jogar novamente?")
        reini(resposta);
    }
}
function reini(resposta) {
    if (resposta == 'sim') {
        let cards = document.querySelector('.cards')
        cards.innerHTML = '';
            principal();
    }
    else {
        if (resposta == 'não') {

        }
        else {
            reini(resposta);
        }
    }
}




function comparador() {
    return Math.random() - 0.5;
}
