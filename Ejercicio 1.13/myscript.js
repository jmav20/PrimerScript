const meses =["enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre"];

//hacer la busqueda de la mayor longitud
const resultado = meses
    .filter(mes =>mes.length >7) 
    .map(mes => mes.toUpperCase())

alert ("Lista meses > 7 letras en Mayuscula:" + resultado + " Numero:" + resultado.length);