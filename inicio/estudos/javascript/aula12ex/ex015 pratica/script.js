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
            genero = 'masculino'
            if (idade >= 0 && idade < 10){
                img.setAttribute ('src','img/criancamasc250.png')
            }

        }
        res.innerHTML = `[SISTEMA] - ${genero} com ${idade} anos`
        res.appendChild(img)
    }
}