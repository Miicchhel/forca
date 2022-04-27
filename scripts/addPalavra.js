var listaDePalavras = [];

var salvar = document.querySelector('#salvar-comecar')
salvar.addEventListener('click',function(){

    var inputAddPalavra = document.querySelector('#adicionando-palavra');
    inputAddPalavra.addEventListener('input', function(){})

    if(listaDePalavras.includes(inputAddPalavra.value)==false){
        listaDePalavras.push(inputAddPalavra.value)
    }else{
        alert('hey, essa palavra já existe no dicionario de palavras');
    }
})
