//FILTER

//Retorne os numeros maiores que 10
const numeros = [ 5, 80, 50, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

//meu metodo

// const numM10 = [];
// let j = 0;
// for(i=0; i<numeros.length; i++){ 
//     if(numeros[i]>10){
//         numM10[j] = numeros[i];
//         j++;  
//     }  
// }

// console.log(numM10);

//metodo do curso

// function callbackFilter(valor, indice, array){
//     if(valor > 10){
//         return true;
//     }else{
//         false
//     };
// }

const numFiltrados = numeros.filter(value => value > 10);

console.log(numFiltrados); //[ 80, 50, 11, 15, 22, 27 ]


//filtre o nome das pessoas com mais de 5 letras
//retorne as pessoas com mais de 50 anos
//retorne as pessoas cujo o nome termina com a
const pessoas = [
    { nome: 'Ana', idade: 28 },
    { nome: 'Bruno', idade: 55 },
    { nome: 'Carla', idade: 25 },
    { nome: 'Diego', idade: 40 },
    { nome: 'Elaine', idade: 60 },
    { nome: 'Felipe', idade: 30 }
];

const pessoasNomeGrande = pessoas.filter(obj => obj.nome.length >= 5);
console.log(pessoasNomeGrande);

const pessoasVelhas = pessoas.filter(obj => obj.idade >= 50);
console.log(pessoasVelhas);

const pessoasNomeA = pessoas.filter(obj => obj.nome.toLowerCase().endsWith("a"));
console.log(pessoasNomeA);

