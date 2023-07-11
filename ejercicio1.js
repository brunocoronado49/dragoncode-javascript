/**
 * Complete la función devolviendo true si coincide con cualquier
 * cadena que comience y termine con la misma vocal. Recuerde que
 * las vocales son a, e, i, o y u.
 * Restricciones
 * La cadena consta solo de letras minúsculas (es decir, [a-z]).
 */

function mismaVocal(palabra) {
    const vocales = ["a", "e", "i", "o", "u"];
    const primeraLetra = palabra[0];
    const ultimaLetra = palabra[palabra.length - 1];

    if (
        vocales.includes(primeraLetra) &&
        vocales.includes(ultimaLetra) &&
        primeraLetra == ultimaLetra
    ) {
        return true;
    }

    return false;
}

const primeraPalabra = mismaVocal("mariana");
const segundaPalabra = mismaVocal("xomimilx");
const tercerPalabra = mismaVocal("anaranjada");
const cuartaPalabra = mismaVocal("oso");
const quintaPalabra = mismaVocal("aeiou");

console.log(
    `${primeraPalabra}\n${segundaPalabra}\n${tercerPalabra}\n${cuartaPalabra}\n${quintaPalabra}`
);
