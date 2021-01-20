alert("El primer codigo en JavaScript")

const celta={
    day:20,
    month: 'Abril'
}

console.log('Mi cumpleaños es el ' + celta.day + ' de ' + celta.month)


const data = ["hola",2,5,"adios"]
let resultado = data[1]>data[2]

console.log('El numero ' + data[1] + ' es mayor que ' + data[2] + ' = ' + resultado)

console.log('suma =' + data[2]+data[1])
console.log('resta =' + (data[2]-data[1]))
console.log('multiplicacion =' + data[2]*data[1])
console.log('division =' + data[2]/data[1])
console.log('resto =' + data[2]%data[1])