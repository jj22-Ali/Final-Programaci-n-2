document.addEventListener("DOMContentLoaded", () => {
    fetch("../json/frutasProductos.json")
    .then(response => response.json())
    .then(data => {
        const container = document.getElementById("container-frutas");

        data.productos.forEach(producto => {

            const ventaFrutra = document.createElement("div");
            ventaFrutra.className = "boxVentaFruta";
            const imgFruta = document.createElement("img");
            imgFruta.src = producto.imagen;
            imgFruta.alt = producto.nombre;
            const nombreFruta = document.createElement("h6");
            nombreFruta.textContent = producto.nombre;
            const precioFruta = document.createElement("p");
            precioFruta.textContent = producto.precio;
            const btnFruta = document.createElement("button");
            btnFruta.textContent = "Agregar al carrito";

            // Agregar el event listener al botón individualmente
            btnFruta.addEventListener("click", () => agregarAlCarrito(producto));


            ventaFrutra.appendChild(imgFruta);
            ventaFrutra.appendChild(nombreFruta);
            ventaFrutra.appendChild(precioFruta);
            ventaFrutra.appendChild(btnFruta)
            container.appendChild(ventaFrutra);


        });
    })
    .catch(error => console.error('Error al cargar el JSON:', error));
});