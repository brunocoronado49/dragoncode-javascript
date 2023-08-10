/**
 * Crea una funcion que retorne el arreglo ordenado que recibe
 * con un parametro que sea un array
 * de objetos con nombre y puntaje
 * retornar el arreglo ordenado de mayor a menor
 */

function fighterSelector(fighters) {
    fighters.sort((a, b) => b.poder - a.poder);

    return fighters;
}

const peleadores = [
    {personaje: 'Goku', poder: 230},
    {personaje: 'Vegetta', poder: 432},
    {personaje: 'Broly', poder: 645},
    {personaje: 'Picollo', poder: 130},
    {personaje: 'Gohan', poder: 530},
    {personaje: 'Milk', poder: 234},
];

const result = fighterSelector(peleadores);
console.log(result);
