class Pessoa{
    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
    }
}

const pessoa1 = new Pessoa('carlos', 20);
pessoa1.idade = 21
console.log(pessoa1.idade)
const pessoa2 = new Pessoa('mary', 22)
console.log(pessoa2.idade)