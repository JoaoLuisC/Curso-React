function rand(min,max){
    min *= 500;
    max *= 500;
    return Math.floor(Math.random() * (max-min) + min);
}

function esperaAi (msg, temp){

    if(typeof msg !== "string") reject(false);

    return new Promise((resolve,reject) =>{
        setTimeout(()=>{
            resolve(msg);
        }, temp);
    });
}

//promisse.all

const promises = [
    "valor 1",
    esperaAi("promise 1", 3000),
    esperaAi("promise 2", 400),
    esperaAi("promise 3", 1000),
    "valor x"
];

Promise.all(promises)
    .then(valor => {
        console.log(valor);
    })
    .catch(e =>{
        console.log(e);
    })

 // promisse.race 

 const promises2 = [
    esperaAi("promise 1", 3000),
    esperaAi("promise 2", 400),
    esperaAi("promise 3", 1000)
];

Promise.race(promises2)
    .then(valor => {
        console.log(valor);
    })
    .catch(e =>{
        console.log(e);
    });