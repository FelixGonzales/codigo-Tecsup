// funcion anonima
const multiplicar = function (n1, n2){
    return n1 * n2;
}


// Arrow function
const dividir = (n1, n2) => {
    return validarSiEsNumero(n1) || validarSiEsNumero(n2)
    ? "Error numero no valido"
    : n1 / n2;
}

function validarSiEsNumero(numero){
    return !isNaN(numero);
}

const alumnos = [];
const imprimirAlumnos = () =>{
    const inputNombre = document.querySelector("#input_name");
    const nombre = inputNombre.value;
    alumnos.push(nombre);
    inputNombre.value = "";
    const resultado = document.querySelector(".resultado");
    resultado.innerHTML = "";
    for (let alumno of alumnos) {
        resultado.innerHTML += "<p>" + alumno + "</p>";
    }
}

const calcularPromedio = () =>{
    const nota1 = Number(document.querySelector("#n1").value);
    const nota2 = Number(document.querySelector("#n2").value);
    const nota3 = Number(document.querySelector("#n3").value);
    const nota4 = Number(document.querySelector("#n4").value);

    const resultado2 = document.querySelector(".resultado2");
    resultado2.innerHTML += "<p>Notas: " + nota1+ ", " + nota2 + ", " + nota3 + ", " + nota4 + "</p>";
    const promedio = (nota1 + nota2 + nota3 + nota4)/4;
    resultado2.innerHTML += "<p>Promedio: " + promedio + "</p>";
}