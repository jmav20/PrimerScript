function calculo_par_impar(numero){
    if ((numero%2) == 0){
        return "El valor es par"}
    else{
        return "El valor es impar"
    }
}

let valor = prompt("Introduzca un numero")
if (isNaN(valor)){
    alert("Introduzca un numero")
}
else {alert(calculo_par_impar(valor))}
;
