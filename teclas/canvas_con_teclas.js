let teclas = {
  UP: 38,
  DOWN: 40,
  LEFT: 37,
  RIGHT: 39
};

document.addEventListener("keyup", dibujarConFlechas);
let canvas = document.querySelector('#canvas');
let lienzo = canvas.getContext('2d');
let x;
let y;
let colorcito = 'orange';
let estado;

dibujarLinea(colorcito, x-1, y-1, x+1, y+1)

function dibujarLinea(color, xInicial, yInicial, xFinal, yFinal){
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.moveTo(xInicial, yInicial);
  lienzo.lineTo(xFinal, yFinal);
  lienzo.stroke();
  lienzo.closePath()
}

function dibujarConFlechas(evento) {
  switch (evento.keyCode) {
    case teclas.UP:
      dibujarLinea(colorcito, x, y, x, y-10)
      y = y - 10;
      break;
    case teclas.DOWN:
      dibujarLinea(colorcito, x, y, x, y+10)
      y = y + 10;
      break;
    case teclas.LEFT:
      dibujarLinea(colorcito, x, y, x -10, y)
      x = x - 10;
      break;
    case teclas.RIGHT:
      dibujarLinea(colorcito, x, y, x + 10, y)
      x = x + 10;
      break;
    default:
      console.log('Con las flechas te dije, pibe')
  }
}

canvas.addEventListener('mousemove', dibujarConMouse);

function dibujarConMouse(evento){
  if(evento.buttons == 1){
    dibujarLinea(colorcito, x, y, evento.layerX, evento.layerY)
  }else{
    x = evento.layerX;
    y = evento.layerY;
  }
}
