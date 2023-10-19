let msg = "A continuación le estoy entregando una cadena de texto que servirá como texto guía para realizar los siguientes ejercicios con . "

// 1. ¿Qué método utiliza para saber la cantidad de caracteres?
// Imprima el resultado

let cantidadCaracteres = msg.length;
console.log("La cantidad de caracteres es: " + cantidadCaracteres);

// 2. Convierta la cadena de texto entregada a minúsculas e imprima por consola la salida.

let cadenaEnMinusculas = msg.toLowerCase();
console.log(cadenaEnMinusculas);

// 3. Si la cadena contiene la palabra filtro en algú lado imprima un mensaje por consola con el valor true.
if (msg.includes("filtro")) {
    console.log(true);
} else {
    console.log(false);
}

// 4. Extrae la palabra "ejercicios" del mensaje entregado.

let match = msg.match(/\b(\w+)\b/g);

for (let i = 0; i < match.length; i++) {
    if (match[i] === "ejercicios") {
        console.log(match[i]);
    }
}

// 5. Reemplaza los espacio por el caracter "-" e imprime el resultado final.
let mensajeModificado = msg.replace(/\s/g, "-");
console.log(mensajeModificado);

// 6. Realiza en el DOM un software que compare si dos campos de password son iguales.

// 7. Crea una función que valide cuántas vocales tiene el msg entregado.
function contarVocales(msg) {
    
    msg = msg.toLowerCase();

    
    let vocales = ['a', 'e', 'i', 'o', 'u'];

    
    let  contador = 0;

    
    for (let i = 0; i < msg.length; i++) {
        
        if (vocales.includes(msg[i])) {
            contador++;
        }
    }

    return contador;
}



let  numVocales = contarVocales(msg);

console.log("El mensaje tiene " + numVocales + " vocales.");


// 8. Realiza un programa basado en el mockup entregado, que guarde los comentarios agregados por el usuario, teniendo en cuenta lo siguiente:

// * No puede haber espacios ni al principio ni al final.
// * Debe poder convertirlos a mayúscula o a minúscula.
// * debe tener un contador que va disminuyendo conforme van terminándose el límite de caracteres que este será de 255.
// * Los comentarios deberán salir en color verde y negrilla.

// Fecha de entrega(por parejas) --> Jueves 19 de octubre de 2023 a las 11.30 pm -> Link del repositorio.
// Nombre completo de los integrantes