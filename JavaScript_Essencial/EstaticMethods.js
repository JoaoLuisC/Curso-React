class controleRemoto {
    constructor(tv){
        this.tv = tv;
        this.volume = 0;
    }

    aumentarVolume(){
        this.volume += 1;
    }

    diminuirVolume(){
        this.volume -= 1;
    }

    static trocaPilha(){
        console.log("trocando pilha");
    }
}


const controle1 = new controleRemoto("LG");
controle1.aumentarVolume();
controle1.aumentarVolume();
controle1.aumentarVolume();

console.log(controle1.volume);

controleRemoto.trocaPilha();