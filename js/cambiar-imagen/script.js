// Opción 1
const botonCambiar = document.querySelector("#boton-cambiar");

botonCambiar.addEventListener("click", function () {
    const imagen = document.querySelector("#imagen1");
    imagen.src = "images/bart.png";
    imagen.alt = "Bart";
});

// Opción 2
function cambiarImagen() {
    const imagen = document.querySelector("#imagen2");
    imagen.src = "images/homero.png";
    imagen.alt = "Homero";
}

// Opción 3
const imagen = document.querySelector("#imagen3");

imagen.addEventListener("mouseenter", function() {
    imagen.src = "images/selma.png";
    imagen.alt = "Selma";
});

imagen.addEventListener("mouseleave", function(){
    imagen.src = "images/patty.png";
    imagen.alt = "Patty";
});