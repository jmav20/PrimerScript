const Letras = ['T','R','W','A','G','M','Y','F','P','D','X','B','N','J','Z','S','Q','V','H','L','C','K','E','T'];

let Dni = prompt("introduzca el DNI sin letra");
let Letra_dni = prompt("introduzca la letra del DNI");

if(isNaN(Dni))
    {alert('solo numeros!')}
else{
    if (Dni < 0 && Dni> 9999999) {
        alert("El numero proporcionado no es valido")
    }
    else{
        let resto = Dni%23
        alert("La letra correcta es:" + Letras[resto])
    }
}