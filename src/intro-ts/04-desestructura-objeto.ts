
interface Alumno1{
    matricula1:number;
    nombre:string;
    edad:number;
    correo:string;
    grupo:Grupo;

}

interface Grupo{
    grupo:string;
    year:number;

}

const alumno2:Alumno1={
    matricula1:12345,
    nombre:'Mario',
    edad:23,
    correo:'mario@gmail.com',
    grupo:{
        grupo:'IDGS-904',
        year:2023
    }
}

const{matricula1,grupo:xx}=alumno2
const{grupo}=xx

console.log(`La Matricula es:${matricula1}`)
console.log(`La Nombre es:${alumno2.nombre}`)
console.log(`El Grupo es:${grupo}`)
console.log(`El year is:${alumno2.grupo.year}`)

const gps:string[]=['IDGS','IEVN','REDES'];
console.log(`grupo 1:${gps[0]}`)
console.log(`grupo 1:${gps[1]}`)
console.log(`grupo 1:${gps[2]}`)

const[a,,b]=gps;
console.log(`grupo 1: ${a}`)
