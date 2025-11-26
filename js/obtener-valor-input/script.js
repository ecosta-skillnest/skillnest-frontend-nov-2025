const formulario = document.querySelector("#formulario");

formulario.addEventListener("submit", function () {
    const inputNombre = document.querySelector("#nombre");
    const nombre = inputNombre.value;
    alert("El nombre ingresado es " + nombre);
    
    // if (nombre === "") {
    //     alert("Debes ingresar un nombre");
    // } else {
    //     alert("El nombre ingresado es " + nombre);
    // }
});