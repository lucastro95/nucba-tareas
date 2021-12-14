/*Ejercicio 1

let numero = parseInt(prompt("Ingrese un número"));
if(Number.isInteger(numero)) {
    alert("El número ingresado tiene " + numero.toString().length + " dígitos.");
} else {
    alert("Ingrese un número");
}
*/

/*Ejercicio 2

let edad = parseFloat(prompt("Ingrese su edad"));
if(edad >= 18) {
    alert("Usted es mayor de edad");
} else {
    alert("Usted es menor de edad");
}
*/

/*Ejercicio 3

let sabores = prompt("Elegir sabores de helado");
let cobertura = prompt("¿Desea cobertura de chocolate? Responder con Si o No");
if(cobertura.toLowerCase() == "si") {
    alert("Su helado sabor " + sabores + " con cobertura de chocolate cuesta $180");
} else {
    alert("Su helado sabor " + sabores + " sin cobertura de chocolate cuesta $150");
}
*/

/*Ejercicio 4

let numero1 = prompt("Ingrese el primer número");
let numero2 = prompt("Ingrese el segundo número");
let resultado = parseFloat(numero1) + parseFloat(numero2);
if(resultado%2 == 0) {
    alert("El resultado de la suma es: " + resultado + " y el número es par.");
} else {
    alert("El resultado de la suma es: " + resultado + " y el número es inpar.");
}
*/

/*Ejercicio 5 
let numero = parseFloat(prompt("Ingrese un número"));
if(numero == 0) {
    alert("El número es 0");
} else if (numero < 0) {
    alert("El número es negativo");
} else {
    alert("El número es positivo");
}
*/

/*Ejercicio 6 

let monto = parseFloat(prompt("Ingrese un monto"));
if (monto > 2000) {
    let resultado = monto - (monto * 10 /100);
    alert("El monto con el 10% de descuento sería de $" +resultado);
} else {
    alert("No hay descuento el monto es de $" + monto);
}
*/

/*Ejercicio 7

let texto = prompt("Ingrese un texto");
let posicion = prompt("Ingrese una posición");

let letra = texto.slice(posicion-1, posicion);
letra = letra.toLowerCase();

if(letra == "a" || letra == "e" || letra == "i"|| letra == "o"|| letra == "u") {
    alert("Esta letra es una vocal");
} else {
    alert("Esta letra no es una vocal")
}
*/

/*Ejercicio 8

let nota = parseFloat(prompt("Ingrese una nota"));
if (nota >= 0 && nota <= 3) {
    alert("Estas aplazado");
} else if (nota == 4 || nota ==5) {
    alert("Reprobado");
} else if (nota >= 6 && nota <=10) {
    alert("Aprobado");
} else {
    alert("Ingrese una nota válida");
}
*/

/*Ejercicio 9

let numero1 = parseFloat(prompt("Ingrese el primer número"));
let numero2 = parseFloat(prompt("Ingrese el segundo número"));

if (numero1 < numero2) {
    alert(" el número " + numero1 + " es menor al número " + numero2);
} else if (numero1 > numero2) {
    alert(" el número " + numero1 + " es mayor al número " + numero2);
} else {
    alert("Los números son iguales")
}
*/

/*Ejercicio 10 
let mes = prompt("Ingrese el número del mes");
alert(new Date(2021, mes, 0).getDate());
*/

/*Ejercicio 11 

let numero1 = parseFloat(prompt("Ingrese el primer número"));
let numero2 = parseFloat(prompt("Ingrese el segundo número"));
let numero3 = parseFloat(prompt("Ingrese el tercer número"));

if (numero1 > numero2 && numero1 > numero3) {
    alert("El número " + numero1 + " es mayor a los demás");
} else if (numero2 > numero1 && numero2 > numero3) {
    alert("El número " + numero2 + " es mayor a los demás");
} else {
    alert("El número " + numero3 + " es mayor a los demás");
}
*/

//Ejercicio 12

let edad = prompt("Ingrese su edad");
let bebida = prompt("Ingrese la bebida que desea: $50 Cerveza, $30 jugo o $10 agua");
bebida = bebida.toLowerCase();

if (edad < 18 && bebida == "cerveza") {
    alert("No puedes pedir alcohol por ser menor de edad");
} else {
    let dinero = prompt("¿Con cuánto desea pagar?");

    if (bebida == "cerveza" && dinero >= 50) {
        dinero = dinero - 50;
        alert("Compraste una cerveza y tu vuelto es de " + dinero);
    } else if (bebida == "cerveza" && dinero < 50) {
        alert("No te alcanza la plata");
    } else if (bebida == "jugo" && dinero >= 30) {
        alert("Compraste una jugo");
    } else if (bebida == "jugo" && dinero < 30) {
        alert("No te alcanza la plata");
    } else if (bebida == "agua" && dinero >= 10) {
        alert("Compraste una agua");
    } else if (bebida == "agua" && dinero < 10) {
        alert("No te alcanza la plata");
    }
}

