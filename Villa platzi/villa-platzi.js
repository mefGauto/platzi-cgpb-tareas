let canvas = document.querySelector('#canvas');
let lienzo = canvas.getContext('2d');

let fondo = {
  url: 'img/tile.png',
  carga: false
};
fondo.imagen = new Image();
fondo.imagen.src = fondo.url;
fondo.imagen.addEventListener('load', cargarFondo);

let vaca = {
  url: 'img/vaca.png',
  carga: false
};
vaca.imagen = new Image();
vaca.imagen.src = vaca.url;
vaca.imagen.addEventListener('load', cargarVacas);

let cerdo = {
  url: 'img/cerdo.png',
  carga: false
};
cerdo.imagen = new Image();
cerdo.imagen.src = cerdo.url;
cerdo.imagen.addEventListener('load', cargarCerdos);

let pollo = {
  url: 'img/pollo.png',
  carga: false
};
pollo.imagen = new Image();
pollo.src.imagen = pollo.url;
pollo.imagen.addEventListener('load', cargarPollos);

function cargarFondo(){
  fondo.carga = true;
}
function cargarVacas(){
  vaca.carga = true;
}
function cargarCerdos(){
  cerdo.carga = true;
}
function cargarPollos(){
  pollo.carga = true;
}

function dibujar(){
  lienzo.drawImage(fondo, 0, 0);
}

function numAleatorio(min, max){
  let resultado;
  resultado = Math.floor(Math.random() * (max - min + 1) + min);
  return resultado;
}
