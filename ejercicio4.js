/**
 * Programar un conversor de numeros romanos
 * Solo se usan los siguientes simbolos:
 * I, V, X, L, C, D y M.
 * El numero 2 se escribe como II solo se suman dos.
 * 12 se escribe como XII
 * el 27 como XXVII
 * Dado un numero romano convertir en entero
 */

function romanDecoder(numero) {
    if (numero > 3999) return 'Numero fuera del rango.' 

    const simbolos = [
        { value: 1000, numeral: "M" },
        { value: 900, numeral: "CM" },
        { value: 500, numeral: "D" },
        { value: 400, numeral: "CD" },
        { value: 100, numeral: "C" },
        { value: 90, numeral: "XC" },
        { value: 50, numeral: "L" },
        { value: 40, numeral: "XL" },
        { value: 10, numeral: "X" },
        { value: 9, numeral: "IX" },
        { value: 5, numeral: "V" },
        { value: 4, numeral: "IV" },
        { value: 1, numeral: "I" },
    ];

    let result = '';

    for (const valor of simbolos) {
        while (numero >= valor.value) {
            result += valor.numeral;
            numero -= valor.value;
            console.log(result , '-', numero);
        }
    }

    return result;
}

const resultFn = romanDecoder(8);
console.log(resultFn);
