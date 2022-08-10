var agora = new Date()
var min = new Date()
var hora = 15
var minutos = min.getMinutes()
console.log (`agora sao exatamtnte ${hora} horas ${minutos} min`)
if (hora >= 6 && hora <= 11){
    console.log (' bom dia')

}else if (hora >= 12 && hora < 18){
    console.log ('boa tarde')
} else if (hora >= 1 && hora <=5){
    console.log ('boa madrugada')
}else{
    console.log ('boa noite')
}