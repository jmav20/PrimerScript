document.getElementById("boton1").addEventListener ("click", alarma);

function alarma(){
    alert("Pulsado el boton");
}

document.getElementById("texto1").addEventListener ("focusin", cambio_color_foco);

function cambio_color_foco(){
    document.getElementById("texto1").style.backgroundColor = '#FF0000';
}

document.getElementById("texto1").addEventListener ("focusout", cambio_color_foco2);

function cambio_color_foco2(){
    document.getElementById("texto1").style.backgroundColor = "orange";
}

document.getElementById("texto2").addEventListener ("keypress", cambio_color_tecla);

function cambio_color_tecla(){
    var tecla= String.fromCharCode(Event.charCode)
    if(tecla == 'a' || tecla == 'e' || tecla == 'i' || tecla == 'o' || tecla == 'u' ){
    document.getElementById("texto2").style.backgroundColor = "orange";}
    else{
        document.getElementById("texto2").style.backgroundColor = "red";
    }
}