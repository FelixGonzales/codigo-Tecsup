const inputPassword = document.querySelector("#input-password");
const checkBoxShowPassword = document.querySelector("#checkbox-show-password");
const inputPasswordConfirm = document.querySelector("#input-password-confirm");
const textError = document.querySelector(".text-error");
const inputPhoneNumber = document.querySelector("#input-phone-number");
const inputEmail = document.querySelector("#input-email");

checkBoxShowPassword.onchange = function (){
    // if (this.checked){
    //     inputPassword.type = "text"
    // }else {
    //     inputPassword.type = "password"
    // }

//En ternario sería:::::

inputPassword.type = this.checked ? "text" : "password";
};
 
inputPasswordConfirm.onkeyup = function () {
    const password = inputPassword.value;
    const confirmPassword = this.value;
    if (inputPassword.value === ""){
        alert("Complete el password pata poder ingresar la confirmación");
        this.value = "";
        inputPassword.focus();
        return;
    }
    if (password !== confirmPassword){
        textError.style.display = "block"
    }else {
        textError.style.display = "none"
    }
};

inputPhoneNumber.onkeyup = function () {
    const valor = this.value;
    const caracteres = valor.split("");

    let newValue = "";
    caracteres.forEach((caracter) => {
        if(!isNaN(Number(caracter))){
            newValue += caracter;
        }
    });
    this.value = newValue;
};

inputEmail.onkeyup = function () {
    const value = this.value;
    const regex =  /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/gm;
    console.log(regex.test(value));
};