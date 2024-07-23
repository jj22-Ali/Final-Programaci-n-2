document.addEventListener("DOMContentLoaded", () => {
    const containerTarjetaCarrito = document.getElementById("container-carrito");
    const unidadesElement = document.getElementById("unidades");
    const precioElement = document.getElementById("precio");
    const carritoVacioElment = document.getElementById("carrito-vacio");
    const totalesElement = document.getElementById("totales")
    const reiniciarCarritoElement = document.getElementById("reiniciar")

    function crearTarjetaCarrito(){
        containerTarjetaCarrito.innerHTML = "";
        const productos = JSON.parse(localStorage.getItem("frutas"));
        console.log(productos);
        if (productos && productos.length > 0){
            productos.forEach(producto => {

                const ventaFrutra = document.createElement("div");
                ventaFrutra.className = "boxCarritoFruta";
                const imgFruta = document.createElement("img");
                imgFruta.src = producto.imagen;
                imgFruta.alt = producto.nombre;
                const nombreFruta = document.createElement("h6");
                nombreFruta.textContent = producto.nombre;
                const precioFruta = document.createElement("p");
                precioFruta.textContent = producto.precio;
                const btnMenos = document.createElement("button");
                btnMenos.textContent = "-";
                const spanCantidad = document.createElement("span");
                spanCantidad.className = "cantidad";
                spanCantidad.textContent = producto.cantidad;
                const btnMas = document.createElement("button");
                btnMas.textContent = "+";
    
        
                btnMas.addEventListener("click", () => {
                    const cuenta = agregarAlCarrito(producto);
                    spanCantidad.textContent = cuenta;
                    actualizarNumeroCarrito();
                    actualizarTotales();
                    revisarMensajesVacios();
                });
                btnMenos.addEventListener("click", () => {
                    const cuenta = restarAlCarrito(producto);
                    spanCantidad.textContent = cuenta;  
                    actualizarNumeroCarrito();
                    actualizarTotales();
                    revisarMensajesVacios();

                    if (cuenta === 0) {
                        crearTarjetaCarrito();
                    }
                });



                ventaFrutra.appendChild(imgFruta);
                ventaFrutra.appendChild(nombreFruta);
                ventaFrutra.appendChild(precioFruta);
                ventaFrutra.appendChild(btnMenos);
                ventaFrutra.appendChild(spanCantidad);
                ventaFrutra.appendChild(btnMas);
                containerTarjetaCarrito.appendChild(ventaFrutra);
        
        
            });
        } else{
            revisarMensajesVacios();
        }
    }
    crearTarjetaCarrito();
    actualizarTotales();
    
    function actualizarTotales(){
        const productos = JSON.parse(localStorage.getItem("frutas"));
        let unidades = 0;
        let precio = 0;
        if(productos && productos.length){
            productos.forEach(producto =>{
                unidades += producto.cantidad;
                precio += producto.precio * producto.cantidad;
            })
            unidadesElement.innerText = unidades;
            precioElement.innerText = precio;

        }


    }

    function revisarMensajesVacios(){
        const productos = JSON.parse(localStorage.getItem("frutas"));
        console.log(productos, productos == true)
        carritoVacioElment.classList.toggle("escondido", productos && productos.length > 0);
        totalesElement.classList.toggle("escondido",!(productos && productos.length > 0));
    }

    reiniciarCarritoElement.addEventListener("click", reiniciarCarrito);
    function reiniciarCarrito(){
        localStorage.removeItem("frutas");
        actualizarNumeroCarrito();
        actualizarTotales();
        crearTarjetaCarrito();
    }

    crearTarjetaCarrito();
    actualizarNumeroCarrito();
    actualizarTotales();
    revisarMensajesVacios();     
    
  
})