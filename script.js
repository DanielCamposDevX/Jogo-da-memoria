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
    cardtypes[0] = '<div data-test="card" onclick="turncard(this)" class="card v"> <div data-test="face-up-image" class="l1 face"><img src="./imagens/front 12.png"></div> <div data-test="face-down-image" class="l2 back-face face"><img class=img src="./imagens/bobrossparrot.gif"></div> </div>';
    cardtypes[1] = '<div data-test="card" onclick="turncard(this)" class="card v"> <div data-test="face-up-image" class="l1 face"><img src="./imagens/front 12.png"></div> <div data-test="face-down-image" class="l2 back-face face"><img class=img src="./imagens/bobrossparrot.gif"></div> </div>';
    cardtypes[2] = '<div data-test="card" onclick="turncard(this)" class="card v"> <div data-test="face-up-image" class="l1 face"><img src="./imagens/front 12.png"></div> <div data-test="face-down-image" class="l2 back-face face"><img class=img src="./imagens/explodyparrot.gif"></div> </div>';
    cardtypes[3] = '<div data-test="card" onclick="turncard(this)" class="card v"> <div data-test="face-up-image" class="l1 face"><img src="./imagens/front 12.png"></div> <div data-test="face-down-image" class="l2 back-face face"><img class=img src="./imagens/explodyparrot.gif"></div> </div>';
    cardtypes[4] = '<div data-test="card" onclick="turncard(this)" class="card v"> <div data-test="face-up-image" class="l1 face"><img src="./imagens/front 12.png"></div> <div data-test="face-down-image" class="l2 back-face face"><img class=img src="./imagens/fiestaparrot.gif"></div> </div>';
    cardtypes[5] = '<div data-test="card" onclick="turncard(this)" class="card v"> <div data-test="face-up-image" class="l1 face"><img src="./imagens/front 12.png"></div> <div data-test="face-down-image" class="l2 back-face face"><img class=img src="./imagens/fiestaparrot.gif"></div> </div>';
    cardtypes[6] = '<div data-test="card" onclick="turncard(this)" class="card v"> <div data-test="face-up-image" class="l1 face"><img src="./imagens/front 12.png"></div> <div data-test="face-down-image" class="l2 back-face face"><img class=img src="./imagens/metalparrot.gif"></div> </div>';
    cardtypes[7] = '<div data-test="card" onclick="turncard(this)" class="card v"> <div data-test="face-up-image" class="l1 face"><img src="./imagens/front 12.png"></div> <div data-test="face-down-image" class="l2 back-face face"><img class=img src="./imagens/metalparrot.gif"></div> </div>';
    cardtypes[8] = '<div data-test="card" onclick="turncard(this)" class="card v"> <div data-test="face-up-image" class="l1 face"><img src="./imagens/front 12.png"></div> <div data-test="face-down-image" class="l2 back-face face"><img class=img src="./imagens/revertitparrot.gif"></div> </div>';
    cardtypes[9] = '<div data-test="card" onclick="turncard(this)" class="card v"> <div data-test="face-up-image" class="l1 face"><img src="./imagens/front 12.png"></div> <div data-test="face-down-image" class="l2 back-face face"><img class=img src="./imagens/revertitparrot.gif"></div> </div>';
    cardtypes[10] = '<div data-test="card" onclick="turncard(this)" class="card v"> <div data-test="face-up-image" class="l1 face"><img src="./imagens/front 12.png"></div> <div data-test="face-down-image" class="l2 back-face face"><img class=img src="./imagens/unicornparrot.gif"></div> </div>';
    cardtypes[11] = '<div data-test="card" onclick="turncard(this)" class="card v"> <div data-test="face-up-image" class="l1 face"><img src="./imagens/front 12.png"></div> <div data-test="face-down-image" class="l2 back-face face"><img class=img src="./imagens/unicornparrot.gif"></div> </div>';
    cardtypes[12] = '<div data-test="card" onclick="turncard(this)" class="card v"> <div data-test="face-up-image" class="l1 face"><img src="./imagens/front 12.png"></div> <div data-test="face-down-image" class="l2 back-face face"><img class=img src="./imagens/tripletsparrot.gif"></div> </div>';
    cardtypes[13] = '<div data-test="card" onclick="turncard(this)" class="card v"> <div data-test="face-up-image" class="l1 face"><img src="./imagens/front 12.png"></div> <div data-test="face-down-image" class="l2 back-face face"><img class=img src="./imagens/tripletsparrot.gif"></div> </div>';

    const cardo = document.querySelector('.cards');
    let carts = [];
    carts.length = prompt('Quantas Cartas?');
    let resto = carts.length % 2;
    let acertos = 0;
    let i = 0;
    if (resto == 0 && carts.length > 2 && carts.length < 15) {
        while (i < carts.length) {
            carts[i] = cardtypes[i];
            i++;
        }
        carts.sort(comparador);
        i = 0;
        while (i < carts.length) {
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
    }
}





function comparador() {
    return Math.random() - 0.5;
}
