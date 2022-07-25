


const variableH1 = document.querySelector("#h1-test");
const h1Texto = document.querySelector("h1")

variableH1.onclick = () => {
    h1Texto.innerText = "Cambiando el h1 desde JS";
    document.title = "Titulo desde JS";
    document.body.style.backgroundColor = "#c3c3c3";
    document.body.style.marginTop = "40px";
    document.body.style.fontFamily = "Verdana";
}


const users = [];

const form = document.querySelector("#form-store-user");

form.onsubmit = (event) => {
    //el event guarda toda la info de los formularios
    event.preventDefault();
    //preventDefault evita que se refresque la pagina, pero no pasa la data al URL
    // pero la data siempre estará en el target

    // const formData = new FormData(event.target);
    // for (let [key, value] of formData.entries()){
    //     console.log(key, value);
    // }
    const formData = new FormData(event.target);
    const user = {};

    for (let dato of formData.entries()){
        console.log("key", dato[0]);
        console.log("value", dato[1]);
        console.log("----------------");
        user[dato[0]] = dato[1];

    }
    users.push(user);
}