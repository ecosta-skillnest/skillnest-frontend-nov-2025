// Opción 1
// Seleccionamos el botón con el id "boton-eliminar"
const boton = document.querySelector("#boton-eliminar");

// Agregamos un event listener para el evento "click"
boton.addEventListener("click", function () {
    // Seleccionamos el párrafo con el id "texto1"
    const parrafo = document.querySelector("#texto1");
    // Eliminamos el párrafo del DOM
    parrafo.remove();
});


// Opción 2
// Función para eliminar el elemento con el id "texto2"
function eliminarElemento() {
    // Seleccionamos el párrafo con el id "texto2"
    const parrafo = document.querySelector("#texto2");
    // Eliminamos el párrafo del DOM
    parrafo.remove();

    // Alternativa con verificación
    // if (parrafo) {
    //     parrafo.remove();
    // } else {
    //     console.log("No existe el elemento que quieres eliminar");
    // }
}