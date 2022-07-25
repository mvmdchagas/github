let sinal = 'aba';
switch (sinal){
    case 'verde':
    console.log("semafaro aberto, prossiga !");
    break;
    case 'amarelo':
    console.log("Semafaro amarelo, não acelere !");
    break;
    case 'vermelho':
    console.log("semafaro vermelho, pare !");
    break;
    default:
    console.log('valor não permitido')
    break;
}