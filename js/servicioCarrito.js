/*
    function agregarAlCarrito(producto){
    const memoria = JSON.parse(localStorage.getItem("frutas")) || [];
    console.log(memoria);
    if(!memoria){
        const nuevoProducto = getNuevoProductoParaMemoria(producto);
        localStorage.setItem("frutas",JSON.stringify([nuevoProducto]));

    }else{
        const indiceProducto = memoria.findIndex(fruta => fruta.id === producto.id);
        console.log(indiceProducto)
        if(indiceProducto === -1){
            const nuevaMemoria = memoria;
            nuevaMemoria.push(getNuevoProductoParaMemoria(producto))
        } else {
            nuevaMemoria(indiceProducto).cantidad ++;
        }
        localStorage.setItem("frutas",JSON.stringify(nuevoMemoria));
    }
}


function getNuevoProductoParaMemoria(producto){
    const nuevoProducto = producto;
    nuevoProducto.cantidad = 1;
    return nuevoProducto;
}
*/
function agregarAlCarrito(producto) {
    let memoria = JSON.parse(localStorage.getItem("frutas")) || [];
    console.log(memoria);

    const indiceProducto = memoria.findIndex(fruta => fruta.id === producto.id);
    console.log(indiceProducto);

    if (indiceProducto === -1) {
        const nuevoProducto = getNuevoProductoParaMemoria(producto);
        memoria.push(nuevoProducto);
    } else {
        memoria[indiceProducto].cantidad++;
    }

    localStorage.setItem("frutas", JSON.stringify(memoria));
}

/* Tomo un producto, le agrega cantidad 1 y lo devuelve */
function getNuevoProductoParaMemoria(producto) {
        // Usando spread operator para crear una copia del objeto producto
    const nuevoProducto = { ...producto }; // Hacer una copia del producto
    nuevoProducto.cantidad = 1;
    return nuevoProducto;
}

