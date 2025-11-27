// Seleccionar el formulario con el id "formulario"
const formulario = document.querySelector("#formulario");

// Agregar un evento "submit" al formulario
formulario.addEventListener("submit", function () {    
    // Seleccionar el input con el id "nombre"
    const inputNombre = document.querySelector("#nombre");
    // Obtener el valor del input
    const nombre = inputNombre.value;
    // Mostrar una alerta con el valor obtenido
    alert("El nombre ingresado es " + nombre);
    
    // Alternativa con validación
    // if (nombre === "") {
    //     alert("Debes ingresar un nombre");
    // } else {
    //     alert("El nombre ingresado es " + nombre);
    // }
}); 