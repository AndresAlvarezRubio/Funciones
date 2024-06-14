/*******************************************************/
/*                  Sumar 2 Números                    */
/*******************************************************/

// sumarNum(); //Hay que llamar a la función sumarNum() para que aparezca el console log

// function sumarNum() {

//     let suma = 5 + 6;
//     console.log(suma); //No se ejecuta por si solo

// }


// sumarNum(); //Se puede llamar desde cualquier parte del código


// function mostrar() {

//     console.log("Estoy dentro de la función mostrar() y llamo a la función sumarNum()");
//     sumarNum(); //función dentro de otra función

// }

// mostrar();






/*******************************************************/
/*                     2 Mensajes                      */
/*******************************************************/

// let mensaje1 = "Hola, Cristina";
// let mensaje2 = "Voy al médico";

// function mostrarMensaje(texto) {

//     // alert(texto);

// }

// mostrarMensaje(mensaje1)
// mostrarMensaje(mensaje2);







/*******************************************************/
/*                    Raíz Cuadrada                    */
/*******************************************************/

// let numero //= prompt("Escribe un número")

// function raizCuadrada(num) {

//     //alert(Math.sqrt(num));

// }

// raizCuadrada(numero)









/*******************************************************/
/*                    Valor Retorno                    */
/*******************************************************/

let numeroRetorno = prompt("Introduce un número");

function esPar(num) {

    if (num % 2 == 0) {

        return true;

    } else {

        return false;

    }
}


let respuesta = esPar(numeroRetorno); //tipo boolean

if (respuesta) {

    console.log("Es par");

} else {

    console.log("Es impar");

}






/*******************************************************/
/*                    Ejercicio                        */
/*******************************************************/
//Pide 10 veces un número y muestra si es par o impar


for (let i = 0; i < 10; i++) {

    let numeroRetorno = prompt("Introduce un número");

    let respuestaEjercicio = esPar(numeroRetorno); //La función esPar() viene de arriba del ejercicio

    respuestaEjercicio ? console.log("Es par") : console.log("Es impar");

}






/*******************************************************/
/*         Parámetros por Valor y Referencia           */
/*******************************************************/

var numero1 = 7;
var numero2 = 8;

function menor(primero,segundo) {

    var elmenor = primero;

    if (segundo < primero) {

        elmenor = segundo;

    }
    return elmenor;
}

console.log(menor(numero1,numero2));

