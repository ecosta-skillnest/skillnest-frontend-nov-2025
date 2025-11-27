// Opción 1
// Seleccionar el botón con el id "boton-cambiar"
const botonCambiar = document.querySelector("#boton-cambiar");

// Agregar un event listener para el evento "click"
botonCambiar.addEventListener("click", function () {
    // Seleccionar la imagen con el id "imagen1"
    const imagen = document.querySelector("#imagen1");
    // Cambiar la fuente de la imagen
    imagen.src = "images/bart.png";
    // Cambiar el texto alternativo de la imagen
    imagen.alt = "Bart";
});

// Opción 2
// Función para cambiar la imagen con el id "imagen2"
function cambiarImagen() {
    // Seleccionar la imagen con el id "imagen2"
    const imagen = document.querySelector("#imagen2");
    // Cambiar la fuente de la imagen
    imagen.src = "images/homero.png";
    // Cambiar el texto alternativo de la imagen
    imagen.alt = "Homero";
}

// Opción 3
// Seleccionar la imagen con el id "imagen3"
const imagen = document.querySelector("#imagen3");

// Agregar event listener para el evento "mouseenter"
imagen.addEventListener("mouseenter", function() {
    // Cambiar la fuente de la imagen
    imagen.src = "images/selma.png";
    // Cambiar el texto alternativo de la imagen
    imagen.alt = "Selma";
});

// Agregar event listener para el evento "mouseleave"
imagen.addEventListener("mouseleave", function(){
    // Cambiar la fuente de la imagen
    imagen.src = "images/patty.png";
    // Cambiar el texto alternativo de la imagen
    imagen.alt = "Patty";
});