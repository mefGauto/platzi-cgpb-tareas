let imagenes = [];
imagenes['Ternita'] = 'img/vaca.png';
imagenes['MoronMoron'] = 'img/pollo.png';
imagenes['Bostercito'] = 'img/cerdo.png';

class Pakiman {
  stats(n, v, a){
    this.imagen = new Image();
    this.nombre = n;
    this.vida = v;
    this.ataque = a;

    this.imagen.src = imagenes[this.nombre];
  }
  mostrar(){
    document.appendChild(this.imagen);
  }
}

let tiernita = new Pakiman('Ternita', 180, 40);
let moronMoron = new Pakiman('MoronMoron', 50, 200,);
let bostercito = new Pakiman('Bostercito', 100, 60);
tiernita.mostrar();
