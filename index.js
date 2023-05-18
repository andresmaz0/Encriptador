var boton_encriptar = document.querySelector(".encriptar");
var boton_desencriptar = document.querySelector(".desencriptar");
var boton_copiar = document.querySelector(".copiar");
var boton_pegar = document.querySelector(".pegar");
var entrada_texto = document.querySelector(".entrada_texto");
var salida_texto = document.querySelector(".salida_texto");

boton_encriptar.onclick = b_encriptar;
boton_desencriptar.onclick = b_desencriptar;
boton_copiar.onclick = b_copiar;
boton_pegar.onclick = b_pegar;

function b_encriptar(){
    ocultarimagen();
    visualizar_boton();
    encriptar_texto();
}

function b_desencriptar(){
    desencriptar_texto();
    ocultarimagen();
    visualizar_boton();
}

function b_copiar(){
    salida_texto.select();
    document.execCommand("copy");
}

function b_pegar(){
    entrada_texto.value="";
    entrada_texto.value = salida_texto.value;
}

function ocultarimagen(){
    salida_texto.classList.add("ocultarimg");
}

function visualizar_boton(){
    boton_copiar.classList.add("visualizar_boton");
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

function desencriptar_texto(){
    let texto = entrada_texto.value;

    for(let i=0; i<6; i++){
        if(texto.includes("ai")){
            texto = texto.replaceAll("ai","a");
        }
        else if(texto.includes("enter")){
            texto = texto.replaceAll("enter","e");
        }
        else if(texto.includes("imes")){
            texto = texto.replaceAll("imes","i");
        }
        else if(texto.includes("ober")){
            texto = texto.replaceAll("ober","o");
        }
        else if(texto.includes("ufat")){
            texto = texto.replaceAll("ufat","u");
        }
    }
    salida_texto.textContent = texto;
}