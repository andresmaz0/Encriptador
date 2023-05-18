var boton_encriptar = document.querySelector(".encriptar");
var boton_desencriptar = document.querySelector(".desencriptar");
var entrada_texto = document.querySelector(".entrada_texto");
var salida_texto = document.querySelector(".salida_texto");

boton_encriptar.onclick = b_encriptar;

function b_encriptar(){
    ocultarimagen();
    encriptar_texto();
}

function ocultarimagen(){
    salida_texto.classList.add("ocultarimg");
}

function encriptar_texto(){
    let texto = entrada_texto.value;
    let texto_encriptado = "";

    for(let i=0; i<texto.length; i++){
        if(texto[i]=="a"){
            texto_encriptado = texto_encriptado + "ai";
        }
        else if(texto[i]=="e"){
            texto_encriptado =  texto_encriptado + "enter";
        }
        else if(texto[i]=="i"){
            texto_encriptado =  texto_encriptado + "imes";
        }
        else if(texto[i]=="o"){
            texto_encriptado =  texto_encriptado + "ober";
        }
        else if(texto[i]=="u"){
            texto_encriptado =  texto_encriptado + "ufat";
        }
        else{
            texto_encriptado = texto_encriptado + texto[i];
        }
    }
    salida_texto.textContent = texto_encriptado;
}