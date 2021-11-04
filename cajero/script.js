class Billete{
    constructor(v,c){
        this.valor = v,
        this.cantidad = c;
    }
}

let caja = [];
caja.push( new Billete(50, 3) );
caja.push( new Billete(20, 2) );
caja.push( new Billete(10, 2) );

let dinero = 210;

let entregado = [];

let div = 0;

let papeles = 0;