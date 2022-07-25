// // Una funcion es un bloque de codigo que realiza una accion

// // la sintaxis de una function se divide. en 3

// // Los mas clasico y antiguo
// function nombreDeLaFuncion() {
//     // En este espacio podemos escribir codigo
//     const alumnos = ["Pepe", "Juan", "Maria", "Luisa", "Lex", "Lucas", "Klark"];
  
//     for (let alumno of alumnos) {
//       console.log(alumno);
//     }
//   }
  
//   // Nota para hacer que una funcion se ejecute debemos llamarla
//   // Esta accion que acabamos de hacer se llama ejecutar a la funcions
//   nombreDeLaFuncion();
  
// function cuboDeUnNumero(){
//   return Math.pow(10,3);
// }

// const resultado = cuboDeUnNumero();
// console.log("Resultado", resultado);

// function potenciaDeUnNumero(numero, potencia){
//    return Math.pow(numero, potencia);
// }

// const ejemplo1 = potenciaDeUnNumero(4, 3);

// const ejemplo2 = potenciaDeUnNumero(5, 2);

// console.log(ejemplo1);
// console.log(ejemplo2);

// function sumar(x, y){
//   return x + y;
// }
// let num1 = Number(prompt("Ingrese primer numero"));
// let num2 = Number(prompt("Ingrese segundo numero"));
// let suma = sumar(num1, num2); 
// document.write(suma);
function calcularFactorial(numero){
  const number = Number(numero);
  if (isNaN(number)){
    return "No ingresaste un número";
  }
  
  let resultado = 1;  
  for(let i = 1; i<= numero; i++){
        resultado*=i;
    }
    return resultado;
}
const container = document.querySelector('.container');

function imprimirFactorial(){
  const inputValor = document.getElementById("input_number").value;
  const resultado = calcularFactorial(inputValor);
  
  const container = document.querySelector('.container');
  container.innerHTML += "<p>Factorial de "+ inputValor+ ": " + resultado +"</p>";

}



const contenedor2 = document.querySelector('.container2');
function imprimirTabla(){
    const numMultiplicar = document.getElementById("number");
    const numero3 = Number(numMultiplicar.value);
    if (isNaN(numero3)){
      alert("Ingrese un numero válido");
      return;
    }
    contenedor2.innerHTML += "<p>Tabla del " + numero3 + "</p>";
    for (let i = 1; i <= 12; i++){
      let producto = numero3 * i;
      contenedor2.innerHTML += "<p>" + numero3 + " x " + i + " = " + producto + "</p>";

    }
    return
}