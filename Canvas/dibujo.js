var d = document.querySelector('#canvas');
var lienzo = d.getContext("2d");

dibujarLinea("pink", 15, 78, 255, 25)

function dibujarLinea(color, xInicial, yInicial, xFinal, yFinal){
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.moveTo(xInicial, yInicial);
  lienzo.lineTo(xFinal, yFinal);
  lienzo.stroke();
  lienzo.closePath()
}
