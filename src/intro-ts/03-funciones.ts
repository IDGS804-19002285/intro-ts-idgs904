
function suma(a,b):void{
    console.log(a+b)
}

const resultado=suma(3,4)

function suma2(n1:number,n2:number){
    return n1+n2
}

console.log(suma2(2,6))

function multiplicar(n3:number,n4:number,n5:number=5):number{
    let tem = n3*n5
    return tem
}

console.log(multiplicar(3,5))

interface Mascotas {
    nombre:string,
    edad:number,
    mostrarEdad:()=>void
}

function datosMascota( Mascota: Mascotas,x:number):void{
    Mascota.edad = x
    console.log(Mascota)
}
const nuevaMascota:Mascotas = {
    nombre:'Juanito',
    edad: 6,
    mostrarEdad():void{
        console.log('LA edad es'+this.edad)
    },

}
console.log(datosMascota(nuevaMascota,21))

let funcSsuma=function(n1:number,n2:number):number{
    return n1+n2
}

console.log(funcSsuma)

function sumar3(...valores:number[]){
    let suma=0
    for(let x=0; x<valores.length;x++)
        suma += valores[x];

    return suma
}

console.log(sumar3(10,2,3,4))
console.log(sumar3(1,2))