const scores =[
    {name: 'Christanaia Williams', country: 'Jamaica', time: 11.80},
    {name: 'Elaine Thompson', country: 'Jamaica', time: 10.71},
    {name: 'Tori Bowie', country: 'EEUU', time: 10.83},
    {name: 'Marie Josee Ta Lou', country: 'Irlanda', time: 10.86},
    {name: 'Dafne Schippers', country: 'Holanda', time: 10.90},
    {name: 'English Gardner', country: 'EEUU', time: 11.94},
    {name: 'Michelle-Lee Ahye', country: 'Trinidad', time: 10.92},
    {name: 'Shelly-Ann Fraser-Pryce', country: 'Jamaica', time: 10.86},
]

//Directamente sobre los objetos.
 const objeto =  
 scores.reduce((ganadora,valor)=> valor.time < ganadora.time? valor: ganadora, scores[0]);

 alert(objeto.name)


//Busqueda mediante el valor.
const resultado =  
scores.reduce((ganadora,valor)=> valor.time < ganadora? valor.time: ganadora, scores[0].time);

alert (resultado)

//prueba con el for para buscar el nombre
for (score of scores){
    if (score.time == resultado){
        alert("encontrado" + score.time)
    }
    else{
        alert(score.time)
    }
}

const ganadora = scores.filter(x => x.time == resultado)

alert(ganadora[0].name)