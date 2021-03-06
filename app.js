let carritoDeCompras = [];

document.addEventListener("DOMContentLoaded", (e) => {
    if (localStorage.getItem("carrito")) {
        carritoDeCompras = JSON.parse(localStorage.getItem("carrito"))
        actualizarCarrito(carritoDeCompras);
    }
})

const contenedorProductos = document.getElementById('contenedor-productos');
const contededorCarrito = document.getElementById('carrito-contenedor');

const contadorCarrito = document.getElementById('contadorCarrito');
const precioTotal = document.getElementById('precioTotal');

const selectCategorias = document.getElementById('selectCategorias')


mostrarProductos(stockProductos)

function mostrarProductos(array){
    contenedorProductos.innerHTML = "";
    
    array.forEach(producto => {
        let div = document.createElement('div')
        div.className = 'producto'
        div.innerHTML = `
                        <div class="card">
                            <div class="card-image">
                                <img src=${producto.img}>
                            </div>
                            <div class="card-content">
                                <h2>${producto.nombre}</h2>
                                <h4>${producto.autor}</h4>
                                <p>$${producto.precio}</p>
                                <a id="botonAgregar${producto.id}" class="button"> <i class="fas fa-shopping-cart"></i></a>
                            </div>
                        </div>
        `
        contenedorProductos.appendChild(div)

        let btnAgregar = document.getElementById(`botonAgregar${producto.id}`)

        btnAgregar.addEventListener('click', () => {
            agregarAlCarrito(producto.id)
        })


    });
}



function agregarAlCarrito(id) {
    let repetido = carritoDeCompras.find(productoR => productoR.id == id);
    if(repetido){
        repetido.cantidad =  repetido.cantidad + 1
        document.getElementById(`cantidad${repetido.id}`).innerHTML = `<p id=cantidad${repetido.id}>Cantidad:${repetido.cantidad}</p>`
        actualizarCarrito()
    }else{
        let productoAgregar = stockProductos.find(prod => prod.id == id);
    console.log(productoAgregar)
    carritoDeCompras.push(productoAgregar);
    
        productoAgregar.cantidad = 1;
    let div = document.createElement('div');
    div.classList.add('productoEnCarrito');
    div.innerHTML= `<p>${productoAgregar.nombre}</p>
                    <p>Precio: $${productoAgregar.precio}</p>
                    <p id=cantidad${productoAgregar.id}>Cantidad: ${productoAgregar.cantidad}</p>
                    <button id=eliminar${productoAgregar.id} class="boton-eliminar"><i class="fas fa-trash-alt"></i></button>`

    contenedorCarrito.appendChild(div)  
    actualizarCarrito()
    let botonEliminar = document.getElementById(`eliminar${productoAgregar.id}`)
    botonEliminar.addEventListener('click', ()=>{
        botonEliminar.parentElement.remove()
        carritoDeCompras = carritoDeCompras.filter(el => el.id != productoAgregar.id);
        actualizarCarrito();
    })  
    }
}

function actualizarCarrito() {
    contadorCarrito.innerText = carritoDeCompras.reduce((acc , el)=> acc + el.cantidad,0);
    precioTotal.innerText = carritoDeCompras.reduce((acc, el) => acc + (el.precio * el.cantidad) , 0)

    localStorage.setItem("carrito", JSON.stringify(carritoDeCompras))
}


selectCategorias.addEventListener('change', () => {
    if(selectCategorias.value == 'all'){
        mostrarProductos(stockProductos)
    } else {
        mostrarProductos(stockProductos.filter (elemento => elemento.categoria == selectCategorias.value))
    }
}) 