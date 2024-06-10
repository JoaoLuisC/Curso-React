//Retorne a soma do dobro de todos os pares

    const numeros = [ 5, 80, 50, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

const questao = numeros.filter(value => value % 2 === 0).
map(value => value*2).reduce((acc,value) => acc + value);

console.log(questao);
//filer retorna : [ 80, 50, 2, 8, 22 ]
//map retorna: [ 160, 100, 4, 16, 44 ]
//reduce retorna: 324