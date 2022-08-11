function verificar(){
   var data = new Date()
   var ano = data.getFullYear()
   var fano = document.querySelector ('input#txtano')
   var res = document.querySelector('div#res')
   if (fano.value.length == 0 || fano.value > ano){
    res.innerHTML = `<p><strong>[ERRO]</strong>: dados invalidos, tente novamente.</p>`
   } else{
    var gen = document.querySelector ('radgen')
    var idade = ano - Number(fano.value)
   }
}