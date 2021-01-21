function comprobacion_mayusculas(texto){
    let resultado = "Del texto introducido:" + texto + " ";
    if(texto == texto.toUpperCase()) {
        resultado += " La cadena está formada sólo por mayúsculas";
      }
      else if(texto == texto.toLowerCase()) {
        resultado += " La cadena está formada sólo por minúsculas";
      }
      else {
        resultado += "La cadena está formada por mayúsculas y minúsculas";
      }
    
      return resultado;
}

let valor = prompt("Introduzca una frase")

alert(comprobacion_mayusculas(valor))
