let z;

for(let i = 0; i < 10; i++){
  z = numAleatorio(0, 500);
  document.write(z + ', ');
}

function numAleatorio(min, max){
  let resultado;
  resultado = Math.floor(Math.random() * (max - min + 1) + min);
  return resultado;
}
