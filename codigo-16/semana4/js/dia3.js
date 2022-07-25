// document.write("<h1>Dia 3 Switch</h1>");

// const angulo = 111;

// switch (angulo){
//     case 0:
//         document.write("<p>Nulo</p>");
//         break;
//     case 90:
//         document.write("<p>Recto</p>");
//         break;
//     case 180:
//         document.write("<p>Lllano</p>");
//         break;
//     case 360:
//         document.write("<p>Completo</p>");
//         break;
//     default:
//         document.write("<p>Sin Nombre</p>");
//         break;
//     }
// const nombres = ["Pepe", "Juan", "Maria", "Luisa", "Carlos", "Lucas"];
// const datos = [1, true, false, -2, "Hola Mundo"];

// console.log(nombres);
// console.log(nombres[3]);

// console.log("Nombres", nombres.length);
// console.log("Datos", datos.length);

// console.log("Ultimo dato:", datos[datos.length - 1]);

// //push: agrega un elemento al array
// // lo agrega en la ultima posicion

// datos.push("Agregando un dato");

// console.log("Dato agregado", datos);
// datos.push(["Pepe", "Juan", "Maria"]);

// console.log(datos);

// console.log(datos[6][0]);

//pop es una funcion para poder eliminar el ultimo elemento de un array

const laptops =["hp", "macbook", "asus", "lenovo"];
console.log("Laptops:", laptops);

console.log("Elemento eliminado", laptops.pop());
console.log("Laptops:", laptops);

//unshif: esta funcion agrega un elemento a un array pero en la primera posicion

laptops.unshift("toshiba");
console.log("Laptops", laptops);

//shift: elimina al primer elemento de un array

console.log(laptops.shift()); 

laptops[2] = "Nuevo modelo";
console.log(laptops);

//indefOf: esta funcion retorna la posicion en base a un dato

console.log(laptops.indexOf("Nuevo modelo")); //Si hay elementos repetidos devielve el mas cercano
 
if(num==0){console.log(laptops);}
