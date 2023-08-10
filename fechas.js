function compararFecha(date) {
    return frase = date === 10 ? 'Hola' : date === 11 ? 'como' : date === 13 ? 'estas' : date === 14 ?? 'jijo';
}

const dia = new Date().getDate();

console.log(compararFecha(dia));