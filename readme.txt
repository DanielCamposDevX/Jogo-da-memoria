O jeito era fazer uma array que coloca as cartas em sua posição e colocar números para as imagens e essa arrya trocar de imagens automáticamente
 if (cardsel !== null) {
        if (cardsel !== carta) {
            carta1.classList.remove("front");
            carta2.classList.remove("back");
        }
        else{
        acertos++
        }
    }
    else { }