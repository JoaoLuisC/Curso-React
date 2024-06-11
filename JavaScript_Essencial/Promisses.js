function rand(min,max){
    min *= 500;
    max *= 500;
    return Math.floor(Math.random() * (max-min) + min);
}

function esperaAi (msg, temp){

    if(typeof msg !== "string") reject("Não é uma string");

    return new Promise((resolve,reject) =>{
        setTimeout(()=>{
            resolve(msg);
        }, temp);
    });
}

esperaAi ("Conexão com BD", rand(1,3))
    .then(msg => {
        console.log(msg);
        return esperaAi ("Buscando Dados Na Base" , rand(1,3));
    })
    .then(msg => {
        console.log(msg);
        return esperaAi ("Tratando os dados" , rand(1,3));
    })
    .then(msg =>{
        console.log(msg);
    })
    .then(()=>{
        console.log("Mostrando dados");
    })
    .catch(e => {
        console.log("Erro" , e);
    });