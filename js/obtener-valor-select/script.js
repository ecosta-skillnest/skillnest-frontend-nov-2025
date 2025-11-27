// Seleccionar el elemento con el id "color" 
const color = document.querySelector("#color");

// Seleccionar el elemento select con el id "seleccionar-color"
const select = document.querySelector("#seleccionar-color");

// Agregar un evento "change" al elemento select
select.addEventListener("change", function () {
    // Obtener el valor seleccionado del select
    const valorSeleccionado = select.value;
    // Asignar el valor seleccionado al elemento con id "color"
    color.textContent = valorSeleccionado;
});