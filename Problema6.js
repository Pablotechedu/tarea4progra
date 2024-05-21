let numerosArray = parseInt(prompt("¿Cuántos números quieres ingresar?"));

if (isNaN(numerosArray) || numerosArray <= 0) {
    alert("Por favor, ingresa un número válido mayor que cero.");
} else {
    let numeros = [];

    for (let i = 0; i < numerosArray; i++) {
        let numero = parseFloat(prompt("Ingresa el número " + (i + 1) + ":"));
        if (isNaN(numero)) {
            alert("Ingresa un número válido.");
            i--;
        } else {
            numeros.push(numero);
        }
    }
    let minimo = Math.min.apply(null, numeros);
    let maximo = Math.max.apply(null, numeros);
    alert("De todos los números que ingresaste el más pequeño es: " + minimo);
    alert("De todos los números que ingresaste el más grande es: " + maximo);
}
