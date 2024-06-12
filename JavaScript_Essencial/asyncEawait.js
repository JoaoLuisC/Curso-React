function rand(min = 0, max = 3) {
    min *= 500;
    max *= 500;
    return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, temp) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof msg !== "string") {
                reject("Cai no erro!");
                return;
            }
            resolve(msg.toUpperCase() + '- Passei na promise');
            return
        }, temp);
    });
}


// esperaAi ("fase 1", rand())
//     .then(msg => {
//         console.log(msg);
//         return esperaAi ("fase 2" , rand());
//     })
//     .then(msg => {
//         console.log(msg);
//         return esperaAi ("fase 3" , rand());
//     })
//     .then(msg =>{
//         console.log(msg);
//     })
//     .catch(e => {
//         console.log("Erro" , e);
//     });

const num = 1;

async function executa() {
    try {
        const fase1 = await esperaAi("fase 1", rand());
        console.log(fase1);

        const fase2 = await esperaAi("fase 2", rand());
        console.log(fase2);

        const fase3 = await esperaAi("fase 3", rand());
        console.log(fase3);

        console.log("acabou as fases");
    } catch (e) {
        console.log(e);
    }
}

executa();
