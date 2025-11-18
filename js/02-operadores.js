// Operadores en JavaScript

// Operadores aritméticos
let a = 10;
let b = 3;

console.log("Suma: " + (a + b)); // Suma: 13
console.log("Resta: " + (a - b)); // Resta: 7
console.log("Multiplicación: " + (a * b)); // Multiplicación: 30
console.log("División: " + (a / b)); // División: 3.3333...
console.log("Módulo: " + (a % b)); // Módulo: 1

// Operadores de asignación
let c = 5;
c += 2; // c = c + 2
console.log("Asignación suma: " + c); // Asignación suma: 7

c *= 3; // c = c * 3
console.log("Asignación multiplicación: " + c); // Asignación multiplicación: 21

// Operadores de comparación
console.log("Igualdad: " + (a == b)); // Igualdad: false
console.log("Desigualdad: " + (a != b)); // Desigualdad: true
console.log("Mayor que: " + (a > b)); // Mayor que: true
console.log("Menor que: " + (a < b)); // Menor que: false
console.log("Mayor o igual que: " + (a >= b)); // Mayor o igual que: true
console.log("Menor o igual que: " + (a <= b)); // Menor o igual que: false

// Operadores lógicos (booleanos)
let verdadero = true;
let falso = false;

console.log("AND lógico: " + (verdadero && falso)); // AND lógico: false
console.log("OR lógico: " + (verdadero || falso)); // OR lógico: true
console.log("NOT lógico: " + (!verdadero)); // NOT lógico: false
