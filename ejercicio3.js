/**
 * Dado un entero, regrese el número sus dígitos invertidos.
 * Ejemplo 1:
 * Entrada: x = 123
 * Salida: 321
 */

function numerosInvertidos(numero) {
    return parseInt(numero.toString().split("").reverse().join(""));
}

const numeroInvertido = numerosInvertidos(234);
console.log(numeroInvertido);

const numeroInvertido2 = numerosInvertidos(867);
console.log(numeroInvertido2);
