function reiniciarJogo(){
    window.location.reload()
}

function escolherPalavra(lista){
    let palavra = lista[Math.floor(Math.random(listaPalavras)*listaPalavras.length)]
    return palavra
}

function mostrarDica(palavra){
    for(let i = 0; i < palavra.length; i++){
        showDica.innerHTML += `<span class='l${i}'>_</span>`
    }
}

function mostrarLetra(letra){
    for(let i = 0; i < palavra.length; i++){
        if(palavra[i]==letra){
            document.querySelector(`.l${i}`).innerHTML = letra
        }
    }
}

function mostrarBoneco(erro){
    showBoneco[erro].style.display = 'block'
}

function analizarJogo(){
    parada = document.querySelector('.show-dica').innerText
    if(parada == palavra){
        setTimeout(()=>{
            alert('Você venceu!')
        },500)
        reiniciarJogo()
    }
}

function addNovaPalavra(){
    const palavraNova = document.querySelector('#texto-palavra')
    const btn = document.querySelector('#salvar-comecar')

    btn.addEventListener('click',()=>{
        let palavra = palavraNova.value
        console.log(palavra.toUpperCase())
        listaPalavras.push(palavra.toUpperCase())
        mudarTela('.tela-add-palavra','.tela-inicio')
    })
}

function mudarTela(atual, proxima){
    var containerAtual = document.querySelector(atual);
    containerAtual.style.display = "none";

    var containerProximo = document.querySelector(proxima);
    containerProximo.style.display = "flex";
}

function ligarTeclado(){

    teclado.addEventListener('click',function(teclas){
        let letraTeclado = teclas.target.innerText
        let letraSelecionada = document.querySelector(`.${letraTeclado}`)      
    
        if(palavra.includes(letraTeclado)){
            mostrarLetra(letraTeclado)
            analizarJogo()
            letraSelecionada.style.backgroundColor = 'green'
            acertos += 1
        }else{
            letraSelecionada.style.backgroundColor = 'red'

            if(erros < showBoneco.length-1){
                mostrarBoneco(erros)
                erros += 1
            }
            else{
                mostrarBoneco(erros)
                setTimeout(()=>{
                    alert('Você perdeu!')
                },500)
                reiniciarJogo()
            }
        }
        letraSelecionada.style.color = 'white'
    })

}
