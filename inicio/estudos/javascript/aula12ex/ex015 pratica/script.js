function verificar(){
    var ano = new Date().getFullYear()
    var txtano = document.querySelector('input#txtano')
    var res = document.getElementById ('res')
    if (txtano.value.length == 0 || txtano.value > ano) {
        res.innerHTML =`[ERRO] insira o ano em 4 digitos e que não seja acima do ano atual`

    }else{
        var selecionaGenero = document.getElementsByName('radiogenero')
        var idade = ano.Number(txtano.value)
        genero = ''
        
    }
}