// Opción 1
// Seleccionar el botón con el id "boton-modificar"
const botonModificar = document.querySelector("#boton-modificar");

// Agregar un evento de clic al botón
botonModificar.addEventListener("click", function () {
    // Seleccionar el párrafo con el id "texto1"
    const parrafo = document.querySelector("#texto1");
    // Modificar el contenido del párrafo
    parrafo.textContent = "Este es el texto 1 modificado";
});

// Opción 2
// Función para modificar el contenido del elemento
function modificarElemento() {
    // Seleccionar el párrafo con el id "texto2"
    const parrafo = document.querySelector("#texto2");
    // Modificar el contenido del párrafo
    parrafo.textContent = "Este es el texto 2 modificado";
}