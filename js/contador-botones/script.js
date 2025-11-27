// Seleccionamos todos los botones con la clase "boton-aumentar"
const botones = document.querySelectorAll(".boton-aumentar");

// Recorremos cada botón con la función forEach
// El forEach recibe una función que se ejecuta por cada botón
// La función recibe como parámetro el botón actual "boton"
botones.forEach(function (boton) {
    // Por cada botón, agregamos un event listener para el evento "click"
    boton.addEventListener("click", function () {
        // Seleccionamos el span dentro del botón
        const spanNumero = boton.querySelector("span");
        // Obtenemos el número actual y lo convertimos a número entero
        let numero = parseInt(spanNumero.textContent);
        // Aumentamos el número en 1
        numero = numero + 1;
        // Actualizamos el contenido del span con el nuevo número
        spanNumero.textContent = numero;
    });
});