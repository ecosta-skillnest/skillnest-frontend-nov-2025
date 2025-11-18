// Condicionales en JavaScript

// Estructura if
let edad = 20;

if (edad >= 18) {
    console.log("Eres mayor de edad.");
}

// Estructura if-else
if (edad < 18) {
    console.log("Eres menor de edad.");
} else {
    console.log("Eres mayor de edad.");
}

// Estructura if-else if-else
let hora = 14;

if (hora < 12) {
    console.log("Buenos días.");
} else if (hora < 18) {
    console.log("Buenas tardes.");
} else {
    console.log("Buenas noches.");
}

// Estructura switch
let dia = 3;
let nombreDia;

switch (dia) {
    case 1:
        nombreDia = "Lunes";
        break;
    case 2:
        nombreDia = "Martes";
        break;
    case 3:
        nombreDia = "Miércoles";
        break;
    case 4:
        nombreDia = "Jueves";
        break;
    case 5:
        nombreDia = "Viernes";
        break;
    case 6:
        nombreDia = "Sábado";
        break;
    case 7:
        nombreDia = "Domingo";
        break;
    default:
        nombreDia = "Día inválido";
}

console.log("Hoy es " + nombreDia);

// Operador ternario
let esEstudiante = true;
let mensaje = esEstudiante ? "Eres estudiante." : "No eres estudiante.";
console.log(mensaje); 

