function verificar(){
    var anoAtual = new Date().getFullYear();
    var anoNasc = document.querySelector ('input#anonasc').value;
    var res = document.querySelector ('div#res');
    if(anoNasc.length == 0 || anoNasc > anoAtual){
        res.innerHTML = `<p style ="color:#fda543">verifique os dados e tente novamente</p>`;
    }else{
        var selecionaGenero = document.getElementsByName ('radiogenero');
        var idade = anoAtual - Number(anoNasc)
        genero = ''
        var img = document.createElement ('img')
        img.setAttribute ('id', 'foto');

        if(selecionaGenero[0].checked){
            genero = 'Masculino'

            if (idade > 0 && idade < 10){
                img.setAttribute ('src', 'img/criancamasc250.png')
            }else if (idade <= 21){
                img.setAttribute ('src' , 'img/jovemmasc250.png')
            }else if (idade <= 50){
                img.setAttribute ('src' , 'img/adultomasc250.png')
            }else {
                img.setAttribute ('src' , 'img/idosomasc250.png')
            }

        }
        if(selecionaGenero[1].checked){
            genero = 'Feminino'

            if (idade > 0 && idade < 10){
                img.setAttribute ('src', 'img/criancafem250.png')
            }else if (idade <= 21){
                img.setAttribute ('src' , 'img/jovemfem250.png')
            }else if (idade <= 50){
                img.setAttribute ('src' , 'img/adultafem250.png')
            }else {
                img.setAttribute ('src' , 'img/idosafem250.png')
            }

        }
        res.innerHTML = `<p style ="text-align: center">${genero} com ${idade} anos  </p>`
        res.appendChild(img)
        
    }

}