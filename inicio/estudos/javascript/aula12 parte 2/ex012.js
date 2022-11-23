let horas = new Date().getHours()
let minutos = new Date().getMinutes()
console.log (`horario local: ${horas} : ${minutos}`)

if(horas >= 00 && horas <= 6){
    console.log ('boa madrugada')
}else 
    if(horas > 6 && horas <=11){
    console.log ('bom dia')
}else if(horas >= 12 && horas <= 18){
    console.log ('boa tarde')
}else{
    console.log ('boa noite')
}

