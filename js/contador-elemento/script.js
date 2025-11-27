// Función para aumentar el número en el span
function aumentar() {
    // Seleccionamos el span con el id "numero"
    const spanNumero = document.querySelector("#numero");
    // Obtenemos el número actual y lo convertimos a número entero
    let numero = parseInt(spanNumero.textContent);
    // Aumentamos el número en 1
    numero = numero + 1;
    // Actualizamos el contenido del span con el nuevo número
    spanNumero.textContent = numero;
}