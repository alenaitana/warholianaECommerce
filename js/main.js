
class producto {
    constructor(id, nombre, imagen, color, precio) {
        this.id = id;
        this.nombre = nombre;
        this.imagen = imagen;
        this.color = color;
        this.precio = precio;
    }
    calcularTotal(){
        return this.precio;
    }
}
const productos = [ 
    new producto("1", "totebags", "./corazonBlanco.jpeg", "varios colores", 2500),
    new producto("2", "prendedores","./prendedores.jpeg", "varios colores", 800),
    new producto("3", "totebags","./corazonNegro.jpeg", "varios colores", 3000)
]
function mostrarProductos(productos) {
    const contenedorDeProductos = document.getElementById("contenedor-de-productos");
    contenedorDeProductos.innerHTML = "";

    productos.forEach(producto => {
        const divProducto = document.createElement("div");
            divProducto.classList.add("producto");
            divProducto.innerHTML = `
                <img height="400px" src="${producto.imagen}"<br>
                <h2>${producto.nombre}</h2>
                <p>color: ${producto.color} </p>
                <p>Precio: ${producto.precio}</p>
            `;
            const botonAgregarAlCarrito = document.createElement("button")
            botonAgregarAlCarrito.innerText = "Agregar al Carrito"
            botonAgregarAlCarrito.addEventListener("click",() => {
              
                agregarAlCarrito(producto);
            })

        divProducto.appendChild(botonAgregarAlCarrito);

        contenedorDeProductos.appendChild(divProducto);
    })
}

function agregarAlCarrito(producto){
    let carrito = JSON.parse(localStorage.getItem("carrito"))
    if (carrito == null) {
        carrito = []
    }
    carrito.push(producto);
    localStorage.setItem("carrito", JSON.stringify(carrito));
}

document.getElementById("ver-carrito").addEventListener("click", verCarrito)
document.getElementById('ver-carrito').onclick = () => {
    Swal.fire({
        text: 'Estos son tus productos!',
        icon: 'success',
        confirmButtonText: 'Entendido'

      })
}
function verCarrito(){
    let carrito = JSON.parse(localStorage.getItem("carrito"))
    if (carrito == null){
        carrito = [];
    }
    mostrarProductos(carrito)
}

document.getElementById("ver-catalogo").addEventListener("click", ()=>{
   
    mostrarProductos(productos);
});

mostrarProductos(productos);
