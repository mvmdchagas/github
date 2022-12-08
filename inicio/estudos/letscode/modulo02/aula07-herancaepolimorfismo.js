class Pessoa{
    constructor (nome, idade){
        this.nome = nome;
        this.idade = idade;
    }
}

class Cidadao extends Pessoa{
    constructor(nome, idade, rg, cpf){
        super(nome, idade);
        this.rg = rg;
        this.cpf = cpf
    }
}
const cidadao = new Cidadao('lucas', '28', '0000000', '00000000000')
console.log (cidadao instanceof Cidadao)