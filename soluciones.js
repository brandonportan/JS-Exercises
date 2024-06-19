// 1. Dado el siguiente listado de objetos:
// const libros = [ { titulo: "Cien años de soledad", autor: "Gabriel García Márquez", año:
// 1967 }, { titulo: "Don Quijote de la Mancha", autor: "Miguel de Cervantes", año: 1605 }, {
// titulo: "1984", autor: "George Orwell", año: 1949 } ]
// Genere una lista que contenga solo los autores de dicha lista en una variable
// llamada: autores.
const libros = [ { titulo: "Cien años de soledad", autor: "Gabriel García Márquez", anio:
    1967 }, { titulo: "Don Quijote de la Mancha", autor: "Miguel de Cervantes", anio: 1605 }, {
    titulo: "1984", autor: "George Orwell", anio: 1949 } ]


let autores = []
for (let libro of libros) {
    const { autor } = libro
    autores.push(autor)
}

console.log('autores :>> ', autores);


// 2. Dado el siguiente objeto:
// const empleado = { nombre: "Juan", salario: 10000, antiguedad: 6 };
// Modifique el valor del salario, siempre y cuando la antigüedad sea mayor a 5 años, el
// aumento será del 10%. Imprima los nuevos valores.

const empleado = { nombre: "Juan", salario: 10000, antiguedad: 6 };

const modificarSalario = (empl, antiguedadNueva)=>{

    const {salario , antiguedad} = empl
    empl['antiguedad'] = antiguedadNueva
    if(antiguedadNueva <=5){
        return
    }

    if(antiguedadNueva >5 && antiguedad >=5){
        let valor = antiguedadNueva-antiguedad
        let porcentaje = valor*0.01

        empl['salario'] = salario*(porcentaje+1)
        return

    }

    if(antiguedad < 5 && antiguedadNueva >5){
        let valor = antiguedadNueva-5
        let porcentaje = valor*0.01

        empl['salario'] = salario*(porcentaje+1)
        return
    }

    return
}

modificarSalario(empleado, 8)
console.log('empleado :>> ', empleado);

// 3. Dado el siguiente listado:
// const numeros = [5, 8, 12, 3, 7, 19, 1, 10, 2]
// imprima el número mayor de la lista (sin ordenarla)

const numeros = [5, 8, 12, 3, 7, 19, 1, 10, 2]

const obtenerMayor = (arreglo)=>{
    let mayor = -Infinity
    for(let i=0; i<arreglo.length; i++){
        if(arreglo[i] > mayor ){
            mayor = arreglo[i]
        }
    }

    return mayor
}

console.log('Mayor :>> ', obtenerMayor(numeros));


// 4. Con el listado anterior, calcule el promedio de todos los números impares

function promedioImpar(arreglo){
    let suma = 0, impares = 0, promedio =0
    for(let elemento of arreglo){
        if(elemento %2 !== 0){
            suma += elemento
            impares++
        }
    }

    return suma/impares
}

console.log('Promedio :>> ', promedioImpar(numeros));

// 5. Dado el siguiente objeto:
// const persona = { nombre: "Ana", edad: 25, ciudad: "SPS" };
// Desestructure el objeto para extraer los valores en 3 variables diferentes y mostrarlas
// en consola.

const persona = { nombre: "Ana", edad: 25, ciudad: "SPS" };

const {nombre, edad, ciudad} = persona

console.log('nombre :>> ', nombre);
console.log('edad :>> ', edad);
console.log('ciudad :>> ', ciudad);