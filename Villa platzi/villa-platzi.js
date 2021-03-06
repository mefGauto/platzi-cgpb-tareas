let canvas = document.querySelector('#canvas');
let lienzo = canvas.getContext('2d');

let cantidad = numAleatorio(0, 5);

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
pollo.imagen.src = pollo.url;
pollo.imagen.addEventListener('load', cargarPollos);

function cargarFondo(){
  fondo.carga = true;
  dibujar();
}
function cargarVacas(){
  vaca.carga = true;
  dibujar();
}
function cargarCerdos(){
  cerdo.carga = true;
  dibujar();
}
function cargarPollos(){
  pollo.carga = true;
  dibujar();
}

function dibujar(){
  if (fondo.carga == true){
    lienzo.drawImage(fondo.imagen, 0, 0);
  }
  if(vaca.carga){
    for (let v = 0; v < cantidad; v++){
      let x = numAleatorio(0, 5);
      let y = numAleatorio(0, 5);
      x = x * 80;
      y = y * 80;
      lienzo.drawImage(vaca.imagen, x, y);
    }
  }
  if(cerdo.carga){
    for (let c = 0; c < cantidad; c++){
      let x = numAleatorio(0, 5);
      let y = numAleatorio(0, 5);
      x = x * 80;
      y = y * 80;
      lienzo.drawImage(cerdo.imagen, x, y);
    }
  }
  if(pollo.carga){
    for (let p = 0; p < cantidad; p++){
      let x = numAleatorio(0, 5);
      let y = numAleatorio(0, 5);
      x = x * 80;
      y = y * 80;
      lienzo.drawImage(pollo.imagen, x, y);
    }
  }
}

function numAleatorio(min, max){
  let resultado;
  resultado = Math.floor(Math.random() * (max - min + 1) + min);
  return resultado;
}
