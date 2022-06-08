function calcularIva() {
    let iva = 1.21
    let precio = 78760
    let precioIva = precio * iva
    alert("El precio incluyendo IVA es: " + precioIva)
}

var respuesta = parseInt(prompt("Está a punto de comprar un televisor\n¿Desea saber el precio con IVA?\nSeleccione el número de la operación\n1. Si\n2. No\n3. Salir"))

while (respuesta != 3) {
    switch (respuesta) {
        case 1:
            calcularIva()
            break;
        case 2:
            alert("El precio del televisor sin IVA es: $78.670")
            break;
        case 3:
            alert("Muchas gracias")
        default:
            alert("Escriba una opción válida")
            break;
        }
    var respuesta = parseInt(prompt("Está a punto de comprar un televisor\n¿Desea saber el precio con IVA?\nSeleccione el número de la operación\n1. Si\n2. No\n3. Salir"))
}


