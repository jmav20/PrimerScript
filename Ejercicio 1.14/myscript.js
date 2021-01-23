const user = [
    {username: 'ppc90', age: 30, premium: false},
    {username: 'lu65', age: 24, premium: true},
    {username: 'maria3', age: 36, premium: false},
    {username: 'abc123', age: 20, premium: false},
    {username: 'sergio58', age: 26, premium: true},
]

//const frase = user.reduce((texto,valor)=> valor.premium = true ? texto + " Usuario Premium:" + valor.username + " " + valor.age: "","");

let cadena =""
for (usuario of user){
    if (usuario.premium == true) {
    cadena += usuario.username + " " + usuario.age + " " + usuario.premium + "\n"
    }
}

console.log (cadena)

const usuarios_premium = user .filter(usu => usu.premium == false)

cadena =""
for (usuario of usuarios_premium){
    cadena += usuario.username + " " + usuario.age + " " + usuario.premium + "\n"
}

alert (cadena)
