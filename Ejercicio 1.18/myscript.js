let enlaces = document.getElementsByTagName('a')

let parrafos = document.getElementsByTagName('p')
let enlaces_parrafo = parrafos[2].getElementsByTagName('a')


const parrafo = document.createElement('p')
parrafo.innerHTML = "numero de Enlaces documento: " + enlaces.length + " Direccion penultimo enlace:" + enlaces[(enlaces.length-2)].href + " Numero enlaces parrafo 3º: " + enlaces_parrafo.length
document.body.appendChild(parrafo);
