let d = document.querySelector('#canvas');
let lienzo = d.getContext("2d");
let lineas = 30;
let xI;
let yF;

document.querySelector('#boton').onclick = function(){
  for (let i = 0; i < lineas; i++){
    dibujarLinea("orange", xI, 0, 300, yF)
    xI = 10 * i;
    yF = 10 * (i+ 1)
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
