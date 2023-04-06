let i = 0;
const cardo = document.querySelector('.cards');
let carts = prompt('Quantas Cartas?');
let resto = carts % 2;
if (resto == 0 && carts > 2 && carts < 15) {
    while (i < carts) {
        cardo.innerHTML = cardo.innerHTML + '<div class="card"><div class="front-face face">Frente</div><div class="back-face face"></div></div>';
        i++;
    }
}


else { }