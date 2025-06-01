function cambiarOverflow(valor) {
  document.getElementById("contenedor-overflow").style.overflow = valor;
}
function cambiarVisibilidad() {
  const caja = document.getElementById("cajaOculta");

  if (caja.style.visibility === "hidden") {
    caja.style.visibility = "visible";
  } else {
    caja.style.visibility = "hidden";
  }
}
function cambiarColapaso() {
  const fila = document.getElementById("fila-colapsable");

  if (fila.style.visibility === "collapse") {
    fila.style.visibility = "visible";
  } else {
    fila.style.visibility = "collapse";
  }
}

let azulEncima = true;

function cambiarZIndex() {
  if (azulEncima) {
    document.getElementById("cajaAzul").style.zIndex = "0";
    document.getElementById("cajaRoja").style.zIndex = "1";
  } else {
    document.getElementById("cajaAzul").style.zIndex = "1";
    document.getElementById("cajaRoja").style.zIndex = "0";
  }
  azulEncima = !azulEncima;
}