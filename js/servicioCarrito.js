
function agregarAlCarrito(producto) {
    let memoria = JSON.parse(localStorage.getItem("frutas")) || [];
    console.log(memoria);

    const indiceProducto = memoria.findIndex(fruta => fruta.id === producto.id);
    console.log(indiceProducto);


    let cuenta = 0;

    if (indiceProducto === -1) {
        const nuevoProducto = getNuevoProductoParaMemoria(producto);
        memoria.push(nuevoProducto);
        cuenta = 1;

    } else {
        memoria[indiceProducto].cantidad++;
        cuenta = memoria[indiceProducto].cantidad;
    }

    localStorage.setItem("frutas", JSON.stringify(memoria));
    actualizarNumeroCarrito();
    return cuenta;


}
function restarAlCarrito(producto){
    let memoria = JSON.parse(localStorage.getItem("frutas")) || [];
    const indiceProducto = memoria.findIndex(fruta => fruta.id === producto.id);
    if(memoria[indiceProducto].cantidad === 1){
        memoria.splice(indiceProducto,1);
        localStorage.setItem("frutas", JSON.stringify(memoria));
        return 0;
    }else{
        memoria[indiceProducto].cantidad--;
        localStorage.setItem("frutas", JSON.stringify(memoria));
        return memoria[indiceProducto].cantidad;
    }
}

/* Tomo un producto, le agrega cantidad 1 y lo devuelve */
function getNuevoProductoParaMemoria(producto) {
        // Usando spread operator para crear una copia del objeto producto
    const nuevoProducto = { ...producto }; // Hacer una copia del producto
    nuevoProducto.cantidad = 1;
    return nuevoProducto;

}

/* acumular el carrito del navbar */

const cuentaCarritoElement = document.getElementById("cuenta-carrito");

function actualizarNumeroCarrito(){
    const memoria = JSON.parse(localStorage.getItem("frutas"));
    if(memoria && memoria.length > 0){
            //reduce sirve para agarrar un arrays de cosas y reducirlos a un solo valor

        const cuenta = memoria.reduce((acum, current) => acum+current.cantidad,0);

        cuentaCarritoElement.innerHTML = cuenta;
    } else {
        cuentaCarritoElement.innerHTML = 0;
    }
    
}

actualizarNumeroCarrito();

