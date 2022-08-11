function carregar(){
    var hora = new Date().getHours()
    var msg = document.querySelector ('div p#msg')
    var img = document.querySelector('div img#imagem')
    msg.innerHTML = `agora é exatamente: ${hora} horas`
    if (hora >= 0 && hora <= 12){
        img.src = 'imagens/fotomanha.png'
        document.body.style.background ='#f5bbad'
    } else if (hora >= 13 && hora <= 18){
        img.src = 'imagens/fototarde.png'
        document.body.style.background ='#e48c22'
    }else {
        img.src = 'imagens/fotonoite.png'
        document.body.style.background ='#231909'
    }

}