function calcularTotal() {
    let precios = [];
    let suma = 0;
    for (let i = 1; i <= 3; i++) {
        let precio = parseFloat(prompt("Introduce el precio del plato " + i + ":"));
        precios.push(precio);
    }
    for (let j = 0; j < precios.length; j++) {
        suma += precios[j];
    }
    let impuesto = parseFloat(prompt("Introduce el porcentaje de impuesto:"));
    let montoImpuesto = (suma * impuesto) / 100;
    let total = suma + montoImpuesto;
    return total;
}
let totalFactura = calcularTotal();
alert("El monto total de la factura es de: Q" + totalFactura);
