function carregar(){
    let horaAtual = new Date().getHours();
    let min = new Date().getMinutes();
    let msg = document.querySelector ('main div p#msg');
    let img = document.querySelector ('main div img#imagem');
    msg.innerHTML = `${horaAtual} : ${min}`;
    
    if (horaAtual >= 00 && horaAtual <=5){
        img.src = 'imagens/fotomadrugada.png'
        document.body.style.background = '#2d6c89'
    }else
        if(horaAtual >=6  && horaAtual <= 11){
            img.src = 'imagens/fotomanha.png'
            document.body.style.background = '#fff79e'
    }else
        if(horaAtual >=12 && horaAtual <=18){
            img.src = 'imagens/fototarde.png'
            document.body.style.background = '#ffb787'
        }
    else{
        img.src = 'imagens/fotonoite.png'
        document.body.style.background = '#4d5b67'
    }

}