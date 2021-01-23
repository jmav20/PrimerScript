class Objeto{
    constructor(tipo,lado){
        this.tipo = tipo;
        this.lado = lado;
    }

    Calculos(){
        console.log("Area del " + this.tipo + ":" + this.lado * this.lado);
        console.log("Perimetro del " + this.tipo + ":" + this.lado * 4);
    }
}

const cuadrado_pequeño = new Objeto("Cuadrado pequeño",2)
const cuadrado_mediano = new Objeto("Cuadrado mediano",5)
const cuadrado_grande = new Objeto("Cuadrado grande",10)

cuadrado_pequeño.Calculos()
cuadrado_mediano.Calculos()
cuadrado_grande.Calculos()

