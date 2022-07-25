// container:
const div_container = document.getElementById('container');

class User {
    static cantidad = 0;
    constructor (_first_name, _last_name){
        User.cantidad++;
        this.id = User.cantidad;
        this.first_name = _first_name;
        this.last_name = _last_name;
        
    }

    get fullName(){
        return "ID: "+ this.id + " , " + this.first_name + " " + this.last_name;
    }

    set fullName (_fullname){
        this.first_name = _fullname.split(" ")[0];
        this.last_name = _fullname.split(" ")[1];
    }
}

const user1 = new User("bruno", "diaz");
const user2 = new User("felix", "gonzales");
const user3 = new User("juan", "perez");
const user4 = new User("pepe", "grillo");

div_container.innerHTML += "<p>" + user1.fullName + "</p>";
div_container.innerHTML += "<hr>";
div_container.innerHTML += "<p>" + user2.fullName + "</p>";
div_container.innerHTML += "<hr>";
div_container.innerHTML += "<p>" + user3.fullName + "</p>";
div_container.innerHTML += "<hr>";
div_container.innerHTML += "<p>" + user4.fullName + "</p>";
div_container.innerHTML += "<hr>";

div_container.innerHTML += "<p>Número de usuarios: " + User.cantidad;

// // Objetos
// class Carro {

//     constructor(_color, _velocidad) {
//         this.setColor(_color);
//         // this.velocidad = _velocidad;
//         this.setVelocidad(_velocidad);
//     }

//     presentacion() {
//         const texto = "Hola soy un carro de color " + this.color
//         + " y tengo una velocidad de: " + this.velocidad;
//         return texto;
//     }
//     setColor(_nuevo_color){
//         this.color = String(_nuevo_color).toLowerCase();
//     }
//     getColor(){
//         return this.color;
//     }
//     setVelocidad(_nueva_velocidad){
//         this.velocidad = _nueva_velocidad + " Km/h"
//     }
//     getVelocidad(){
//         return this.velocidad
//     }

// }

// const carro_rojo = new Carro('ROJO', 200); // instanciar objeto
// const carro_azul = new Carro('AZUL', 50); // dar vida al objeto
// const carro_verde = new Carro('VERDE', 100); // crear el objeto

// carro_rojo.setColor('GRIS');
// // carro_azul.color = 'Negro';
// // carro_rojo.color = 'Negro';

// div_container.innerHTML += "<p>" + carro_rojo.getColor() + "</p>";
// div_container.innerHTML += "<hr>";
// div_container.innerHTML += "<p>" + carro_azul.presentacion() + "</p>";
// div_container.innerHTML += "<hr>";
// div_container.innerHTML += "<p>" + carro_verde.presentacion() + "</p>";
// div_container.innerHTML += "<hr>";




// const crearCarros = () => {
// let velocidad = 10;
// let color = "negro";
// for (i = 1; i <= 10; i++){
//     current_carro = new Carro(color, velocidad);
//     div_container.innerHTML += "<p>" + current_carro.presentacion() + "</p>";
//     velocidad += 10;
// }
// return;
// }

// crearCarros();