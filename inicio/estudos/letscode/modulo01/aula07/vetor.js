/*
let vetor = [10,20,30,40,50];
vetor[2] = 'ola'
console.log (vetor[2]);
*/

/*
let vetor = [];
for (let i = 0; i<10; i++){
    vetor.push(i);
}
console.log (vetor);
*/
vetor = [10,20,30,40,50,60,70,80,90];

/*let 
for (let i=0; i<vetor.length; i++){
    console.log(vetor[i])

for (let numero of vetor){
    console.log(numero)
}
}*/
for (let indice in vetor){
    console.log (vetor[indice])
}