function mudarTela(atual, proxima){
    var containerAtual = document.querySelector(atual);
    containerAtual.style.display = "none";

    var containerProximo = document.querySelector(proxima);
    containerProximo.style.display = "flex";
}

function reiniciarJogo(){
    window.location.reload()
}

function isLetra(codigo){
    return (codigo >= 65) && (codigo <= 90)
}

function mostrarAvisoLetraRepetida(){
    alert("você já digitou essa letra!")
}

function atualizarJogo(){
    mostrarLetrasErradas()
    mostrarLetrasCorretas()
    desenharBoneco()
    checarJogo()
}

function mostrarQuantidadeLetras(){
    let espacos = ''
    for(let i = 0; i < palavraSecreta.length; i++){
        espacos += '_ '
    }
    const container = document.querySelector('.palavra-secreta')
    container.innerHTML = espacos
}

function mostrarLetrasErradas(){
    const div = document.querySelector(".area-erros")
    div.innerHTML = ''
    letrasErradas.forEach(letra => {
        div.innerHTML += `<span> ${letra}</span>`
    })
}

function mostrarLetrasCorretas(){
    if(letrasCorretas.length === 0){
        mostrarQuantidadeLetras()
    }else{
        const div = document.querySelector(".palavra-secreta")
        div.innerHTML = ''
        palavraSecreta.split('').forEach(letra => {
            if(letrasCorretas.includes(letra)){
                div.innerHTML += `<span>${letra}</span>`
            }else{
                div.innerHTML += '_ '
            }
        })
    }
}

function desenharBoneco(){
    const parteCorpo = document.querySelectorAll(".forca-parte")
    for(let i = 0; i < letrasErradas.length; i++){
        parteCorpo[i].style.display = "block"
    }
}

function checarJogo(){
    const checkPalavra = document.querySelector('.palavra-secreta')
    let msg = ''

    if(letrasErradas.length === 6){
        msg = "Fim de Jogo. Você perdeu!"
    }

    if(palavraSecreta === checkPalavra.innerText){
        msg = "Parabéns, você ganhou!"
    }

    if(msg){
        setTimeout(()=>{
            alert(msg)
            reiniciarJogo()
        },50)
    }
}

// mudarTela('#container-add-palavra','#container-jogando')

function addNovaPalavra(){
    const palavraNova = document.querySelector('#texto-palavra')
    const btn = document.querySelector('#salvar-comecar')

    btn.addEventListener('click',()=>{
        palavras.push(palavraNova.value)
        mudarTela('#container-add-palavra','#container-jogando')
    })
    
}