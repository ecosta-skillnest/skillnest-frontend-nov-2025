// Opción 1
const botonModificar = document.querySelector("#boton-modificar");

botonModificar.addEventListener("click", function () {
    const parrafo = document.querySelector("#texto1");
    parrafo.textContent = "Este es el texto 1 modificado";
});

// Opción 2
function modificarElemento() {
    const parrafo = document.querySelector("#texto2");
    parrafo.textContent = "Este es el texto 2 modificado";
}