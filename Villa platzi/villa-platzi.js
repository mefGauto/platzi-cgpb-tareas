let canvas = document.querySelector('#canvas');
let lienzo = canvas.getContext('2d');
let mapa = 'img/tile.png';

let fondo = new Image();
fondo.src = mapa;
fondo.addEventListener('load', dibujar);

let vaca = {
  url: 'img/vaca.png',
  carga: false
};
vaca.imagen = new Image();
vaca.imagen.src = 'img/vaca.png';
vaca.imagen.addEventListener('load', cargarVacas);

let cerdo = {
  url: 'img/cerdo.png',
  carga: false
};
cerdo.imagen = new Image();
cerdo.imagen.src = 'img/cerdo.png';
cerdo.imagen.addEventListener('load', cargarCerdos);

let pollo = {
  url: 'img/pollo.png',
  carga: false
};
pollo.imagen = new Image();
pollo.src.imagen = 'img/pollo.png';
pollo.imagen.addEventListener('load', cargarPollos);

function dibujar(){
  lienzo.drawImage(fondo, 0, 0);
}

function numAleatorio(min, max){
  let resultado;
  resultado = Math.floor(Math.random() * (max - min + 1) + min);
  return resultado;
}
