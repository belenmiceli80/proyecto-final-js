let id = 0;
let nombre = "";
let autor = "";
let precio = 0;
let total = 0;
const libros = [];
const carrito = [];

class Catalogo {
    constructor(id, nombre, autor, precio) {
        this.id = id;
        this.nombre = nombre.toUpperCase();
        this.autor = autor.toUpperCase();
        this.precio = precio;
    }
}

let usuario = prompt("Ingrese su nombre");

function agregarAlCarrito() {
    do {
        let compra = parseFloat(prompt("Bienvenido " + usuario + ", tenemos disponibles los siguientes libros: 1. Academia Belladonna, 2. Beautiful Disaster, 3. Fangirl, 4. It End with Us, 5. Kingpin, 6. Make It Sweet, 7. Our Overtime", "ingrese el número"));

        switch (compra) {
            case 1:
                precio = 1940;
                break;
            case 2:
                precio = 2898;
                break;
            case 3:
                precio = 1998;
                break;
            case 4:
                precio = 3988;
                break;
            case 5:
                precio = 798;
                break;
            case 6:
                precio = 2590;
                break;
            case 7:
                precio = 2598;
                break;
            default:
                alert("Dato incorrecto");
                precio = 0;
        }
        total = total + precio;
        otroProducto = confirm("¿Queres agregar otro producto?")
    } while (otroProducto);
}

function aplicarDescuento(total) {
    if (total >= 5000) {
        total = total * 0.80;
    }
    return total;
}

function calcularEnvio(total) {
    let confirmacion = confirm("¿Queres envio a domicilio?");

    if (confirmacion && total >= 2000) {
        alert("Envio gratis. El total es: " + total);
    } else if (confirmacion & total < 2000 && total != 0) {
        total = total + 700;
        alert("El costo es de $700. El total es: " + total);
    }
    return total;
}

agregarAlCarrito();
calcularEnvio(aplicarDescuento(total));

libros.push(new Catalogo (1, "Academia Belladonna", "Pablo De Santis", 1940));
libros.push(new Catalogo (2, "Beautiful Disaster", "Jamie McGuire", 2898));
libros.push(new Catalogo (3, "Fangirl", "Rainbow Rowell", 1998));
libros.push(new Catalogo (4, "It Ends With Us", "Collen Hoover", 3988));
libros.push(new Catalogo (5, "Kingpin", "W.S. Greer", 798));
libros.push(new Catalogo (6, "Make It Sweet", "Kristen Callihan", 2590));
libros.push(new Catalogo (7, "Our Overtime", "S.C. Kate", 2598));



console.log(libros);
console.log(total);

// solo siete como ejemplo para ver funcionalidad, el final tendra todos