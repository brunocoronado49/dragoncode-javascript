/**
 * Alice y Bob crearon cada uno un problema para Ecomsur. Un
 * revisor califica los dos desafíos, otorgando puntos en una escala
 * del 1 al 100 para tres categorías: claridad del problema,
 * originalidad y dificultad.
 */

function desafios(arr1, arr2) {
    let puntosAlice = 0;
    let puntosBob = 0;

    if (arr1.length === arr2.length) {
        for (let i = 0; i < arr1.length; i++) {
            if (arr1[i] > arr2[i]) {
                puntosAlice++;
            } else if (arr1[i] < arr2[i]) {
                puntosBob++;
            }
        }
    } else {
        return "Los arreglos no coinciden en numero de elementos";
    }

    if (puntosAlice > puntosBob) {
        return "Alice Gana!";
    } else if (puntosAlice < puntosBob) {
        return "Bob Gana!";
    } else {
        return "Es un empate!";
    }
}

const alice1 = [1, 2, 3];
const bob1 = [4, 5, 6];
const resultado1 = desafios(alice1, bob1);
console.log(resultado1);

const alice2 = [4, 7, 8];
const bob2 = [4, 5, 6];
const resultado2 = desafios(alice2, bob2);
console.log(resultado2);

const alice3 = [4, 7, 8, 5];
const bob3 = [4, 5, 6];
const resultado3 = desafios(alice3, bob3);
console.log(resultado3);
