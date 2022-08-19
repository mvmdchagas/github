function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var txtano = document.querySelector('input#txtano')
    var res = document.querySelector ('div#res')
    if (txtano.value.length == 0 || txtano.value > ano) {
        res.innerHTML =`[ERRO] insira o ano em 4 digitos e que não seja acima do ano atual`

    }else{
        var selecionaGenero = document.getElementsByName('radiogenero')
        var idade = ano - Number(txtano.value)
        genero = ''
        var img = document.createElement ('img')
        img.setAttribute ('id', 'foto')
        if(selecionaGenero[0].checked){
            genero = 'MASCULINO'
            if (idade >= 0 && idade < 10){
                img.setAttribute ('src','img/criancamasc250.png')
            }else if (idade <= 21){
                img.setAttribute ('src','img/jovemmasc250.png' )
            }else if (idade <= 50){
                img.setAttribute ('src','img/adultomasc250.png')
            }else {
                img.setAttribute ('src', 'img/idosomasc250.png')
            }
        }
        if (selecionaGenero[1].checked){
            genero = 'FEMININO'
            if (idade >= 0 && idade < 10){
                img.setAttribute ('src','img/criancafem250.png')
            }else if (idade <= 21){
                img.setAttribute ('src','img/jovemfem250.png' )
            }else if (idade <= 50){
                img.setAttribute ('src','img/adultafem250.png')
            }else {
                img.setAttribute ('src', 'img/idosafem250.png')
            }
        }
        res.innerHTML = `<p>[SISTEMA] - GÊNERO: ${genero}, IDADE: ${idade} ANOS  </p>`
        res.appendChild(img)
    }
}