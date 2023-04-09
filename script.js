let cont = 0;
principal();


function principal() {
    const cardtypes = [];
    cardtypes[0] = '<li onclick="turncard(this)" class="card v"> <div class="l1 face"><img src="./imagens/front 12.png"></div> <div class="l2 back-face face"><img class=img src="./imagens/bobrossparrot.gif"></div> </li>';
    cardtypes[1] = '<li onclick="turncard(this)" class="card v"> <div class="l1 face"><img src="./imagens/front 12.png"></div> <div class="l2 back-face face"><img class=img src="./imagens/bobrossparrot.gif"></div> </li>';
    cardtypes[2] = '<li onclick="turncard(this)" class="card v"> <div class="l1 face"><img src="./imagens/front 12.png"></div> <div class="l2 back-face face"><img class=img src="./imagens/explodyparrot.gif"></div> </li>';
    cardtypes[3] = '<li onclick="turncard(this)" class="card v"> <div class="l1 face"><img src="./imagens/front 12.png"></div> <div class="l2 back-face face"><img class=img src="./imagens/explodyparrot.gif"></div> </li>';
    cardtypes[4] = '<li onclick="turncard(this)" class="card v"> <div class="l1 face"><img src="./imagens/front 12.png"></div> <div class="l2 back-face face"><img class=img src="./imagens/fiestaparrot.gif"></div> </li>';
    cardtypes[5] = '<li onclick="turncard(this)" class="card v"> <div class="l1 face"><img src="./imagens/front 12.png"></div> <div class="l2 back-face face"><img class=img src="./imagens/fiestaparrot.gif"></div> </li>';
    cardtypes[6] = '<li onclick="turncard(this)" class="card v"> <div class="l1 face"><img src="./imagens/front 12.png"></div> <div class="l2 back-face face"><img class=img src="./imagens/metalparrot.gif"></div> </li>';
    cardtypes[7] = '<li onclick="turncard(this)" class="card v"> <div class="l1 face"><img src="./imagens/front 12.png"></div> <div class="l2 back-face face"><img class=img src="./imagens/metalparrot.gif"></div> </li>';
    cardtypes[8] = '<li onclick="turncard(this)" class="card v"> <div class="l1 face"><img src="./imagens/front 12.png"></div> <div class="l2 back-face face"><img class=img src="./imagens/revertitparrot.gif"></div> </li>';
    cardtypes[9] = '<li onclick="turncard(this)" class="card v"> <div class="l1 face"><img src="./imagens/front 12.png"></div> <div class="l2 back-face face"><img class=img src="./imagens/revertitparrot.gif"></div> </li>';
    cardtypes[10] = '<li onclick="turncard(this)" class="card v"> <div class="l1 face"><img src="./imagens/front 12.png"></div> <div class="l2 back-face face"><img class=img src="./imagens/unicornparrot.gif"></div> </li>';
    cardtypes[11] = '<li onclick="turncard(this)" class="card v"> <div class="l1 face"><img src="./imagens/front 12.png"></div> <div class="l2 back-face face"><img class=img src="./imagens/unicornparrot.gif"></div> </li>';
    cardtypes[12] = '<li onclick="turncard(this)" class="card v"> <div class="l1 face"><img src="./imagens/front 12.png"></div> <div class="l2 back-face face"><img class=img src="./imagens/tripletsparrot.gif"></div> </li>';
    cardtypes[13] = '<li onclick="turncard(this)" class="card v"> <div class="l1 face"><img src="./imagens/front 12.png"></div> <div class="l2 back-face face"><img class=img src="./imagens/tripletsparrot.gif"></div> </li>';

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
        if (cardsel.innerHTML == carta.innerHTML) {
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
        alert('Parabéns!!! Você ganhou em ' + cont + ' jogadas')

    }

}



function comparador() {
    return Math.random() - 0.5;
}
