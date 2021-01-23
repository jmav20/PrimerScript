const words =["Environment","System","Research","Institute"];

//hacer la busqueda de la mayor longitud
const mayor = words.reduce((grande,valor)=> (valor.length > grande.length)? valor:grande,"");

alert ("Palabra mas larga:" + mayor);