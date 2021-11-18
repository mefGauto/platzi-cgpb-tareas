class Billete{
    constructor(v,c){
        this.valor = v,
        this.cantidad = c;
    }
}

let caja = [];
caja.push( new Billete(50, 10) );
caja.push( new Billete(20, 20) );
caja.push( new Billete(10, 30) );

let dinero;

let entregado = [];

let div = 0;

let papeles = 0;

let r = document.createElement('p');
let body = document.querySelector('body');
body.appendChild(r);

let b = document.querySelector('#extraer');
b.addEventListener('click', entregarDinero);

function entregarDinero(){
    let bi;
    let t = document.querySelector('#plata');
    dinero = parseInt(t.value);

    for(bi of caja){

        if(dinero > 0){
            div = Math.floor(dinero / bi.valor);

            if(div > bi.cantidad){
                papeles = bi.cantidad;
            }else{
                papeles = div;
            }

        entregado.push( new Billete(bi.valor, papeles) );
        dinero = dinero - (bi.valor * papeles);
        }
    }
    if (dinero > 0){
        r.innerHTML = 'Si me pones mas plata mejor pa';
    }else{
        for(let e of entregado)
        {
            r.innerHTML = r.innerHTML + e.cantidad + ' billetes de $' + e.valor + '<br />';
            
        }
    }
}