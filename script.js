let i = 0;
const cardo = document.querySelector('.cards');
let carts = prompt('Quantas Cartas?');
let resto = carts % 2;
let acertos = 0;

function turncard(carta) {
    const carta1 = carta.querySelector(".l1");
    carta1.classList.add("front");
    const carta2 = carta.querySelector(".l2");
    carta2.classList.add("back");
    cardsel = document.querySelector(".selected");
    console.log(cardsel);
    carta.classList.add("selected");
}



if (resto == 0 && carts > 2 && carts < 15) {
    while (i < carts) {
        cardo.innerHTML = cardo.innerHTML + '<div onclick="turncard(this)" class="card"><div class="l1 face"><img src="./imagens/front 12.png"></div><div class="l2 back-face face"><img class=img src="./imagens/bobrossparrot.gif"></div></div>';
        i++;
    }
}
else { }