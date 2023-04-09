
principal();

function turncard(carta) {
    const carta1 = carta.querySelector(".l1");
    carta1.classList.add("front");
    const carta2 = carta.querySelector(".l2");
    carta2.classList.add("back");
    cardsel = document.querySelector(".selected");
    console.log(cardsel);
    carta.classList.add("selected");
}


function principal(){
    const cardo = document.querySelector('.cards');
    let carts=[];
    carts.length = prompt('Quantas Cartas?');
    let resto = carts.length % 2;
    let acertos = 0;
    let i = 0;
    if (resto == 0 && carts.length > 2 && carts.length < 15) {
    while (i < carts.length) {
        cardo.innerHTML = cardo.innerHTML + '<li onclick="turncard(this)" class="card"> <div class="l1 face"><img src="./imagens/front 12.png"></div> <div class="l2 back-face face"><img class=img src="./imagens/bobrossparrot.gif"></div> </li>';
        i++;
    }
}
else {principal()}

}