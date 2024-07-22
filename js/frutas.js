document.addEventListener("DOMContentLoaded", () => {
    fetch("../json/frutasProductos.json")
    .then(response => response.json())
    .then(data => {
        const container = document.getElementById("container-frutas");

        data.productos.foreach(producto => {

            const ventaFrutra = document.createElement("div");
            ventaFrutra.className = "boxVentaFruta";
            const imgFruta = document.createElement("img");
            imgFruta.src = producto.imagen;
            imgFruta.alt = producto.nombre;
            const nombreFruta = document.createElement("h6");
            nombreFruta.textContent = producto.nombre;
            const precioFruta = document.createElement("p");
            precioFruta.textContent = producto.precio;

            ventaFrutra.appendChild(imgFruta);
            ventaFrutra.appendChild(nombreFruta);
            ventaFrutra.appendChild(precioFruta);
            container.appendChild(ventaFrutra);
        });
    })
    .catch(error => console.error('Error al cargar el JSON:', error));
})