//map

//dobre os numeros
const numeros = [5, 80, 50, 1, 2, 3, 5];

//dobre os numeros

const dobrarNumeros = numeros.map(valor => valor * 2);
console.log(dobrarNumeros);//  10, 160, 100, 2, 4,   6,  10


//para cada elemento retorne apenas uma string com o nome da pessoa
//remova a chave "nome" do objeto
//Adicione uma chave "id" em cada objeto

const pessoas = [
    { nome: 'Ana', idade: 28 },
    { nome: 'Bruno', idade: 55 },
    { nome: 'Carla', idade: 25 },
    { nome: 'Diego', idade: 40 },
    { nome: 'Elaine', idade: 60 },
    { nome: 'Felipe', idade: 30 }
];

const retornaPessoa = pessoas.map(obj => obj.nome);
console.log(retornaPessoa);

const removeNome = pessoas.map(obj => ({idade: obj.idade}));
console.log(removeNome);

// const addId = pessoas.map(function(obj,i){
//     obj.id = i+1;
//     return obj;
// });

const addIdNovo = pessoas.map((obj, i) => {
    const newObj = {... obj};
    newObj.id = i+1;
    return newObj
})

console.log(addIdNovo);

