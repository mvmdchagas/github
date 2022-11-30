function verificar(){
    var ano = new Date().getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div p#res')
    if(fano.value.length == 0 || fano.value > ano){
        res.innerHTML = ('<p><strong>[ERRO]</strong> Dados inválidos</p>')
    }else{
        var generoEscolhido = document.getElementsByName('escolhaGenero')
        var idade = ano - Number(fano.value)
        var genero = ''

        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if(generoEscolhido[0].checked){
           genero = '<p>Masculino</p>'
           if (idade >= 0 && idade < 10){
            //criança
            img.setAttribute ('src', 'img/criancamasc250.png')
           } else if(idade < 21){
            //jovem
            img.setAttribute ('src', 'img/jovemmasc250.png')
           }else if (idade < 50){
            //adulto
            img.setAttribute ('src', 'img/adultomasc250.png')
           } else{
            // idoso
            img.setAttribute ('src', 'img/idosomasc250.png')
           }
        }else if (generoEscolhido[1].checked){
            genero = '<p>Feminino</p>'
            if (idade >= 0 && idade < 10){
                //criança
                img.setAttribute ('src', 'img/criancafem250.png')
               } else if(idade < 21){
                //jovem
                img.setAttribute ('src', 'img/jovemfem250.png')
               }else if (idade < 50){
                //adulto
                img.setAttribute ('src', 'img/adultafem250.png')
               } else{
                // idoso
                img.setAttribute ('src', 'img/idosafem250.png')
               }
        }
        res.innerHTML = `<p>${genero} com ${idade} anos</p>`
        res.appendChild(img)
    }
}