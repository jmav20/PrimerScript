const Notas = [6,7,2,9,3,4,5,8,2]

let suma = 0
for (let i = 0; i < 9; i++) {
   suma += Notas[i]
};
console.log("Suma con for:" + suma);

suma = 0
for (const Nota of Notas) {
   suma += Nota
};
console.log("Suma con for..in: " + suma);