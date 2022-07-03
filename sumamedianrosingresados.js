/* 3. Utilizando un bucle, mostrar la suma y la media de los números ingresados, hasta introducir un numero negativo, luego mostrar el resultado */

let permiso = prompt("Desea ingresar numeros? Y = si")

let ingresarNumero
let numerosIngresados = []

while (permiso == "Y") {
    ingresarNumero = parseInt(prompt("Ingrese un número"))
    
    if (ingresarNumero > 0) {
        numerosIngresados.push(ingresarNumero)
    } else if(ingresarNumero < 0) {
        break
    }
}

alert("Los números ingresados son " + numerosIngresados)

const numeros = numerosIngresados

let sumaDeNumerosIngresados = 0

for(let i = 0; i < numeros.length; i++) {
    sumaDeNumerosIngresados = sumaDeNumerosIngresados + numeros[i]
}

alert("La suma de los números da: " + sumaDeNumerosIngresados)

let mediaDeNumerosIngresados = 0

for(let i = 0; i < numeros.length; i++) {
    mediaDeNumerosIngresados = sumaDeNumerosIngresados / (numeros.length - 1)
}

alert("La media es: " + mediaDeNumerosIngresados)