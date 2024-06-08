// const numeros = [1, 2, 3, 4, 5, 6 , 7, 8, 9];
// const [um, ,tres, , cinco, ,sete, ...rest] = numeros;
// console.log(um, tres, cinco, sete, rest);

const arrayDeArrys = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
];

// const [, [, , seis]] = arrayDeArrys;
// console.log(seis);

const [lista1, lista2, lista3] = arrayDeArrys;
console.log(lista3);
const [ , , nove] = lista3;
console.log(nove);