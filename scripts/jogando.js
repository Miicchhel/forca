let listaPalavras = ['LIVROS','PIZZA','CAFEZAL', 'FUTEBOL','CONFEITARIA']
palavra = escolherPalavra(listaPalavras)

let teclado = document.querySelector('.teclado')
let showDica = document.querySelector('.show-dica')
let showBoneco = document.querySelectorAll('.forca-parte')
let erros = 0
let acertos = 0
let parada = document.querySelector('.show-dica').innerText


const iniciandoJogo = document.querySelector("#iniciar-jogo")
iniciandoJogo.addEventListener("click",() => {
    
    mudarTela('.tela-inicio','.tela-jogando')
    mostrarDica(palavra)
    ligarTeclado()
})