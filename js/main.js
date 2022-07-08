
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
const producto1 = new producto("1", "totebags", "./assets/tiendalmg/corazonBlanco.jpeg", "varios colores", 2500);
const producto2 = new producto("2", "prendedores","./assets/tiendalmg/prendedores.jpeg", "varios colores", 800);
const producto3 = new producto("3", "totebags","./assets/tiendalmg/corazonNegro.jpeg", "varios colores", 3000);

const productos = [];

productos.push(producto1);
productos.push(producto2);
productos.push(producto3);  

function mostrarProductos(productos) {
const contenedorDeProductos = document.getElementById("contenedorDeProductos");
contenedorDeProductos.innerHTML = "";

productos.forEach(producto => {
    const divProducto = document.createElement("div");
    divProducto.classList.add("producto")
    divProducto.innerHTML = `
        <img src="${producto.imagen}" alt="titulo"
        <h2>${producto.nombre}<h2>
        <p>color: ${producto.color} <p>
        <p>Precio: ${producto.precio}
    `;

});
}

mostrarProductos(productos);