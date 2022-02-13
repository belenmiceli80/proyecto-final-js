let carritoDeCompras = [];

const contenedorProductos = document.getElementById('contenedor-productos');
const contededorCarrito = document.getElementById('carrito-contenedor');

const contadorCarrito = document.getElementById('contadorCarrito');
const precioTotal = document.getElementById('precioTotal');

const selectCategorias = document.getElementById('selectCategorias')


selectCategorias.addEventListener('change', () => {
    if(selectCategorias.value == 'all'){
        mostrarProductos(stockProductos)
    } else {
        mostrarProductos(stockProductos.filter (elemento => elemento.categoria == selectCategorias.value))
    }
})  


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

// AGREGAR EL CSS VER BIEN LAS CLASES DE CADA UNO



function agregarAlCarrito(id){
    let agregarProducto = stockProductos.find(item => item.id == id)

    carritoDeCompras.push(agregarProducto)
    actualizarCarrito()
    
    let div = document.createElement('div')
    div.className='productoEnCarrito'
    div.innerHTML = `
                <p>${agregarProducto.nombre}</p>
                <p>${agregarProducto.autor}</p>
                <p>$${agregarProducto.precio}</p>
                <p>Cantidad: ${agregarProducto.cantidad}</p>
                <button id="btnEliminar${agregarProducto.id}" class="boton-eliminar"><i class="fas fa-trash-alt"></i></button>
    `
    contenedorProductos.appendChild(div)

    let btnEliminar = document.getElementById(`btnEliminar${agregarProducto.id}`)
    btnEliminar.addEventListener('click', () => {
        btnEliminar.parentElement.remove()
        carritoDeCompras = carritoDeCompras.filter(elemento => elemento.id != agregarProducto.id)
        actualizarCarrito()
    })

}


function actualizarCarrito(){
    contadorCarrito.innerText = carritoDeCompras.reduce((acc,e) => acc + e.cantidad, 0);
    precioTotal.innerText = carritoDeCompras.reduce((acc,e)=> acc + e.precio, 0)
}