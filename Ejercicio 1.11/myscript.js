const times =[60,75,79,80,55,59];

//hacer el sumatorio
const acumulado = times.reduce((suma,valor)=>suma+valor,0);

//calcular la media
alert ("Media:" + (acumulado / times.length));
