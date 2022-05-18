const palavras = ['HUMANO','RASTEJAR', 'DESLOCAMENTO', 'SERINGA', 'ROCHA', 'AVIAO', 'DESFILE', 'MACACO', 'PICADA', 'PIX', 'PROGRAMACAO', 'PROGRAMADOR', 'ARULA', 'CAVALO', 'CORINGA']

const palavraSecreta = palavras[Math.floor(Math.random()*palavras.length)]

const letrasErradas = []
const letrasCorretas = []


const iniciandoJogo = document.querySelector("#iniciar-jogo")
iniciandoJogo.addEventListener("click",() => {
    
    mudarTela('.tela-inicio','.tela-jogando')
    mostrarQuantidadeLetras()

    document.addEventListener("keydown", (evento) => {
        const codigo = evento.keyCode; //intervalo[65-90]
    
        if(isLetra(codigo)){
            const letra = evento.key.toUpperCase()
    
            if(letrasErradas.includes(letra)){
                mostrarAvisoLetraRepetida()
            }else{
                if(palavraSecreta.includes(letra)){
                    letrasCorretas.push(letra)
                }else{
                    letrasErradas.push(letra)
                }
            }
            atualizarJogo()
        }
    })
})