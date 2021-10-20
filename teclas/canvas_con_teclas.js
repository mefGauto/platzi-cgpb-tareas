let teclas = {
  UP: 38,
  DOWN: 40,
  LEFT: 37,
  RIGHT: 39
};

document.addEventListener("keyup", dibujarConFlechas)

function dibujarConFlechas(evento) {
  switch (evento.keyCode) {
    case teclas.UP:
      console.log('Arrriba')
      break;
    case teclas.DOWN:
      console.log('Abajo')
      break;
    case teclas.LEFT:
      console.log('Izquierda')
      break;
    case teclas.RIGHT:
      console.log('Derecha')
      break;
    default:
      console.log('Con las flechas te dije, pibe')
  }
}
