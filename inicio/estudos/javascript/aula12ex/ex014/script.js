    function carregar(){
    var msg = document.querySelector ('div#msg')
    var img = document.querySelector('img#imagem')
    var hora = new Date().getHours()

    msg.innerHTML = `<p>agora são ${hora} horas</p>`
    if(hora >= 0 && hora < 12){
        img.src ='imagens/fotomanha.png'
        document.body.style.background = '#ffeda1'
    } else if (hora >= 12 && hora <= 18){
        img.src = 'imagens/fototarde.png'
        document.body.style.background = '#bb858a'
    }else {
        img.src = 'imagens/fotonoite.png'
        document.body.style.background = '#fe8d00'
    }
}