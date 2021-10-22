let canvas = document.querySelector('#canvas');
let lienzo = canvas.getContext('2d');
let mapa = 'img/tile.png';

let imagen = new Image();
imagen.src = mapa;
imagen.addEventListener('load', dibujar);

function dibujar(){
  lienzo.drawImage(imagen, 0, 0);
}

function numAleatorio(min, max){
  let resultado;
  resultado = Math.floor(Math.random() * (max - min + 1) + min);
  return resultado;
}
