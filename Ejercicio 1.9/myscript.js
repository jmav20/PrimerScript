const topics =['JavaScript','Variables','funciones','condicionales','bucles'];

//calculado con funciones flecha
const resultado_flecha = topics.map(topic => topic.toUpperCase());
alert (resultado_flecha);

//calculado con mpas
const resultado = topics.map(function(topic){return topic.toUpperCase()});
alert(resultado);

//calculado con for
const lista_may =[];
for (valor of topics){
    lista_may.push(valor.toUpperCase())
}

alert(lista_may);