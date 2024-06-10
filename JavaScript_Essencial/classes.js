class pessoa{
    constructor(nome , sobrenome){
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    falar(){
        console.log(`${this.nome} está falando`);
    }

}

const p1 = new pessoa ("joao","cardoso");

console.log(p1);
console.log(p1.falar);