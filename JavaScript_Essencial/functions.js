//declaração de função   (Function hoisting) - a engine do js vai elevar as 
//    declarações de funções e variaveis definidas como var para o topo do js

// function falaOI () {
//     console.log("oi");
// }

const umDadoQualquer = function (){
    console.log("um dado qualquer");
}

umDadoQualquer(); 

// OU

function executaFunction (func){
    func();
}
executaFunction(umDadoQualquer);


//arrow function

const funcArrow = ( ) => {
    console.log("sou uma arrow function");
}


//dentro de um objeto

const obj = { 
    falar(){
        console.log("função dentro de objeto");
    }
};

obj.falar();