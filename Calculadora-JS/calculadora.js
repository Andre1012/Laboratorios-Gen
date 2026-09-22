// Programa que muestra una calculadora básica en JavaScript

let nombre = prompt("Escribe tu nombre: ");
let numero1 = Number(prompt("Introduce el primer número: "));
let numero2 = Number(prompt("Introduce el segundo número: "));

let suma = numero1 + numero2
let resta = numero1 - numero2
let multiplicacion = numero1 * numero2
let division = numero1 / numero2

console.log("Hola", nombre, "Bienvenido a tu calculadora!!");
console.log("Suma: ", suma);
console.log("Resta: ", resta);
console.log("Multiplicación: ", multiplicacion);
console.log("División: ", division);