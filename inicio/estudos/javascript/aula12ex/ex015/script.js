function verificar(){
   var data = new Date()
   var ano = data.getFullYear()
   var fano = document.querySelector ('input#txtano')
   var res = document.querySelector('div#res')
   if (fano.value.length == 0 || fano.value > ano){
    res.innerHTML = `<p><strong>[SISTEMA]</strong>: insira um valor de 4 digitos que não seja acima do ano atual.</p>`
   } else{
    var fgen = document.getElementsByName ('radgen')
    var idade = ano - Number(fano.value)
    
    var genero = ''
    var img = document.createElement ('img')
    img.setAttribute ('id', 'foto')
    if(fgen[0].checked){
        genero = 'Masculino'
        if (idade >=0 && idade <10){
            //criança
            img.setAttribute ('src', 'img/criancamasc250.png')
        }else if(idade <21){
            //jovem
            img.setAttribute ('src', 'img/jovemmasc250.png')
        }else if (idade <50){
            //adulto
            img.setAttribute ('src', 'img/adultomasc250.png')
        }else{
            //idoso
            img.setAttribute ('src', 'img/idosomasc250.png')
        }

    }else if (fgen[1].checked){
        genero = 'Feminino'
        if (idade >=0 && idade <10){
            //criança
            img.setAttribute ('src', 'img/criancafem250.png')
        }else if(idade <21){
            //jovem
            img.setAttribute ('src', 'img/jovemfem250.png')
        }else if (idade <50){
            //adulto
            img.setAttribute ('src', 'img/adultafem250.png')
        }else{
            //idoso
            img.setAttribute ('src', 'img/idosafem250.png')
        }
    }
    res.innerHTML = `[SISTEMA] - ${genero} com ${idade} anos`
    res.appendChild(img)
   }
}