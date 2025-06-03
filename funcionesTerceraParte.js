function cambiar(propiedad, valor) {
    document.getElementById("contenedor").style[propiedad] = valor;
}
function cambiarFlexGrow() {
    const caja = document.getElementById("caja2");
    const estilo = window.getComputedStyle(caja);
    const flexGrowActual = estilo.flexGrow;

    if (flexGrowActual === "0") {
        caja.style.flexGrow = "1";
    } else {
        caja.style.flexGrow = "0";
    }
}
function cambiarFlexBasis() {
    const caja = document.getElementById("caja2");
    const estilo = window.getComputedStyle(caja);
    const flexGrowActual = estilo.flexBasis;

    if (flexGrowActual === "100px") {
        caja.style.flexBasis = "150px";
    } else {
        caja.style.flexBasis= "100px";
    }
}