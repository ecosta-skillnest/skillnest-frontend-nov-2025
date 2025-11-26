// Opción 1
const boton = document.querySelector("#boton-eliminar");

boton.addEventListener("click", function () {
    const parrafo = document.querySelector("#texto1");
    parrafo.remove();
});


// Opción 2
function eliminarElemento() {
    const parrafo = document.querySelector("#texto2");
    parrafo.remove();
    // if (parrafo) {
    //     parrafo.remove();
    // } else {
    //     console.log("No existe el elemento que quieres eliminar");
    // }
}