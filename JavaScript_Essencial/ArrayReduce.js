//some todos os numeros
//retorne um array com os pares
//retorne um array com o dobro dos valores

const numeros = [ 5, 80, 50, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

const somaNumeros = numeros.reduce((acc , value) => acc+=value);
console.log(somaNumeros);//236

const somaNumeros2 = numeros.reduce((acc , value) => acc+=value , 10);
console.log(somaNumeros2);//246


//retorne a pessoa mais velha
const pessoas = [
    { nome: 'Ana', idade: 28 },
    { nome: 'Bruno', idade: 55 },
    { nome: 'Carla', idade: 25 },
    { nome: 'Diego', idade: 40 },
    { nome: 'Elaine', idade: 60 },
    { nome: 'Felipe', idade: 30 }
];

const pessoaVelha = pessoas.reduce((acc, value) => {
    if(acc.idade > value.idade) return acc;
    return value;
})
console.log(pessoaVelha);