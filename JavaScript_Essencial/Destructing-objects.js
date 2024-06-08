const pessoas = {
    name: "joao luis",
    lastName: "cardoso",
    age: 22,
    address: {
        road: "Rua Brasil",
        numberHouse: 27,
        city: "machado",
    }
}

// const { name, lastName, age } = pessoas;
// console.log(name , lastName, age);

const { address: {road , numberHouse, city } } = pessoas;
console.log(road, numberHouse, city);

const { name: n} = pessoas;
console.log(n); //joao luis
