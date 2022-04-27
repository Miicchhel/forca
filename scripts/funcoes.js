function mudarTela(atual, proxima){
    var containerAtual = document.querySelector(atual);
    containerAtual.style.display = "none";

    var containerProximo = document.querySelector(proxima);
    containerProximo.style.display = "flex";
}
