var boton_encriptar = document.querySelector(".encriptar");
var boton_desencriptar = document.querySelector(".desencriptar");
var entrada_texto = document.querySelector(".entrada_texto");
var salida_texto = document.querySelector(".salida_texto");

boton_encriptar.onclick = encriptar;

function encriptar(){
    ocultarimagen();
}

function ocultarimagen(){
    salida_texto.classList.add("ocultarimg");
}