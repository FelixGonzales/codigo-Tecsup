let numero1 = 10;
let numero2 = 20;

console.log("Suma", numero1 + numero2);
console.log("Resta", numero1 - numero2);
console.log("Multiplicación", numero1 * numero2);
console.log("División", numero1 / numero2);

let numero3 = "22";
console.log(Number(numero3));

let numero5 = "33.5";

console.log("Forma1", Number(numero5));
console.log("Forma2", parseInt(numero5));
console.log("Forma3", +numero5);
console.log("Forma4", parseFloat(numero5));

console.log(Number("12hola"));

const operacion = 3 * 2 + 10 - 5 / 2;

console.log(Math.sqrt(operacion));
console.log(Math.pow(6,3));

//const catetoA = Number(prompt("Ingrese el valor de A"));
//const catetoB = Number(prompt("Ingrese el valor de B"));

//const operacion2 = Math.sqrt(Math.pow(catetoA,2) + Math.pow(catetoB,2));
//console.log("La hipotenusa es", operacion2);

const base = Number(prompt("Ingrese medida de la base"));
const altura = Number(prompt("Ingrese medida de la altura"));
const operacion3 = base * altura;
console.log("El área del rectángulo es:", operacion3);


const radio = Number(prompt("Ingrese medida del radio"));
const operacion4 = Math.PI * Math.pow(radio,2);
console.log("El área del círculo es:", operacion4);