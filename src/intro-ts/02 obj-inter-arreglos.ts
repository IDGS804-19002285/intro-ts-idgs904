interface Alumno{
    matricula?:number,
    nombre:string,
    email: string,
    edad: number
}


const alumnos:Alumno={
    matricula: 123,
    nombre:"Juan Jose",
    edad: 23,
    email: "jjjestrada@gmail.com"
    
}

let vector1:Array<number>=[2,3,5,5]
vector1.push(34)
for(let elemento of vector1)
    console.log(elemento)