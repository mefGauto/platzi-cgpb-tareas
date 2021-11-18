let imagenes = [];
imagenes['500'] = 'img/100.jpeg';

class Billete{
    constructor(v,c){
        this.imagen = new Image();
        this.valor = v;
        this.cantidad = c;

        this.imagen.src = imagenes[this.valor];
    }
}

let b500 = new Billete(500, 2);
let b100 = new Billete(100, 5);
let b50 = new Billete(50, 10);
let b20 = new Billete(20, 10);
let b10 = new Billete(10, 20);
let b5 = new Billete(5, 30);

let caja = [];
caja.push(b500);
caja.push(b100);
caja.push(b50);
caja.push(b20);
caja.push(b10);
caja.push(b5);

let bi; 

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
          if(e.cantidad > 0) { 
            for(bi = 1; bi <=e.cantidad; bi++){
                r.innerHTML += "<img src=" + "e.imagen.src" + "/>" + "<br />";
            }
            r.innerHTML += + e.cantidad + ' billetes de $' + e.valor + '<br />';
          }
        }
    }
}
