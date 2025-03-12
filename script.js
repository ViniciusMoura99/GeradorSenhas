let sliderElement = document.querySelector("#slider"); //atraves do # eu busco o ID
let buttonElement = document.querySelector("#button");

let sizePassword = document.querySelector("#valor")
let Password = document.querySelector("#password")

let containerPassword = document.querySelector("#container-password")

let charset =  "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@$%¨&*(){}[]";
let novaSenha = "";

sizePassword.innerHTML = sliderElement.Value;

sliderElement.oninput = function(){
    sizePassword.innerHTML = this.Value;
}

function generatePassword(){
    alert("VAMOS GERAR A SENHA!")
}

