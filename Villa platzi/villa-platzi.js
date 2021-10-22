let canvas = document.querySelector('#canvas');
let lienzo = canvas.getContext('2d');
let mapa = 'img/tile.png';

let fondo = new Image();
fondo.src = mapa;
fondo.addEventListener('load', dibujar);

let vaca = new Image();
vaca.src = 'img/vaca.png';
vaca.addEventListener('load', dibujarVacas);

let cerdo = new Image();
cerdo.src = 'img/cerdo.png';
cerdo.addEventListener('load', dibujarCerdos);

let pollo = new Image();
pollo.src = 'img/pollo.png';
pollo.addEventListener('load', dibujarPollos);

function dibujar(){
  lienzo.drawImage(fondo, 0, 0);
}
function dibujarVacas(){
  lienzo.drawImage(vaca, 10, 50);
}
function dibujarCerdos(){
  lienzo.drawImage(cerdo, 250, 300);
}
function dibujarPollos(){
  lienzo.drawImage(pollo, 400, 250)
}
function numAleatorio(min, max){
  let resultado;
  resultado = Math.floor(Math.random() * (max - min + 1) + min);
  return resultado;
}
