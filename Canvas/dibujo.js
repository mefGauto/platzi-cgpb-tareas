let d = document.querySelector('#canvas');
let lienzo = d.getContext("2d");
let xI;
let yF;
let ancho = d.width;
let colorcito = 'orange';

document.querySelector('#boton').onclick = function(){
  let numeroLineas = parseInt(document.querySelector('#numLineas').value);
  let lineas = numeroLineas;
  let espacio = ancho / lineas;

  for (let i = 0; i < lineas; i++){
    dibujarLinea(colorcito, xI, 0, 300, yF)
    xI = espacio * i;
    yF = espacio * (i+ 1);
  }
}
// dibujarLinea("pink", 15, 78, 255, 25)

function dibujarLinea(color, xInicial, yInicial, xFinal, yFinal){
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.moveTo(xInicial, yInicial);
  lienzo.lineTo(xFinal, yFinal);
  lienzo.stroke();
  lienzo.closePath()
}
