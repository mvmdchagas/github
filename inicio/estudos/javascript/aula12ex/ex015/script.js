function verificar (){
    var anoAtual = new Date().getFullYear();
    var anoNascimento = document.querySelector ('input#anonasc').value;
    var res = document.querySelector ('div#res');
    if (anoNascimento.length == 0 || anoNascimento > anoAtual){
        res.innerHTML = `<p><strong style="color:red">[Erro]</strong> tente novamente</p>`;
    }else {
        var escolhaGenero = document.getElementsByName('input#radiogenero');
        idade = anoAtual - Number (anoNascimento) ;

    }
}